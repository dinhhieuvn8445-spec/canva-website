import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRegistrationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Registration endpoint
  app.post("/api/registrations", async (req, res) => {
    try {
      const validatedData = insertRegistrationSchema.parse(req.body);
      
      const registration = await storage.createRegistration(validatedData);
      
      // Here you would integrate with Google Sheets
      // For now, we'll simulate the Google Sheets integration
      try {
        await sendToGoogleSheets(registration);
      } catch (error) {
        console.error("Failed to send to Google Sheets:", error);
        // Continue execution even if Google Sheets fails
      }
      
      res.json({ 
        success: true, 
        message: "Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
        data: registration 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Dữ liệu không hợp lệ", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Lỗi server, vui lòng thử lại sau" 
        });
      }
    }
  });

  // Get all registrations (for admin)
  app.get("/api/registrations", async (req, res) => {
    try {
      const registrations = await storage.getAllRegistrations();
      res.json({ success: true, data: registrations });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Lỗi khi lấy dữ liệu đăng ký" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

// Function to send data to Google Sheets
async function sendToGoogleSheets(registration: any) {
  const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL || "";
  
  console.log("🔍 Debug Google Sheets URL:", GOOGLE_SHEETS_URL);
  
  if (!GOOGLE_SHEETS_URL) {
    console.log("⚠️ Google Sheets chưa được cấu hình. Để kích hoạt Google Sheets:");
    console.log("1. Tạo Google Apps Script với code webhook");
    console.log("2. Deploy và lấy URL");
    console.log("3. Cấu hình biến môi trường GOOGLE_SHEETS_WEBHOOK_URL");
    console.log("📋 Dữ liệu đăng ký vẫn được lưu trong hệ thống:", {
      fullName: registration.fullName,
      phone: registration.phone,
      email: registration.email,
      coursePackage: registration.coursePackage,
      timestamp: registration.createdAt.toISOString()
    });
    return;
  }

  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        fullName: registration.fullName,
        phone: registration.phone,
        email: registration.email,
        coursePackage: registration.coursePackage,
        experience: registration.experience || '',
        message: registration.message || '',
        timestamp: registration.createdAt.toISOString(),
      }),
    });

    const responseText = await response.text();
    console.log("📝 Google Sheets response:", responseText);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}, response: ${responseText}`);
    }

    try {
      const responseData = JSON.parse(responseText);
      if (responseData.success) {
        console.log("✅ Dữ liệu đã được gửi thành công tới Google Sheets");
      } else {
        console.error("❌ Google Sheets trả về lỗi:", responseData.error || responseData.message);
      }
    } catch (parseError) {
      console.log("✅ Dữ liệu đã được gửi tới Google Sheets (response không phải JSON)");
    }
  } catch (error) {
    console.error("❌ Lỗi khi gửi tới Google Sheets:", error);
    throw error;
  }
}
