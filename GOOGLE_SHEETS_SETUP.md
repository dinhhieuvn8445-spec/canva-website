# Hướng dẫn liên kết Google Sheets

## Trạng thái hiện tại
❌ **Google Sheets cần cấu hình đúng URL webhook**
✅ **Form đăng ký hoạt động bình thường** (dữ liệu vẫn được lưu trong hệ thống)
⚠️ **URL hiện tại chỉ là Sheet ID, cần tạo Apps Script webhook**

## Cách liên kết Google Sheets

### Bước 1: Tạo Google Apps Script

1. Truy cập [Google Apps Script](https://script.google.com/)
2. Tạo project mới
3. Thay thế code mặc định bằng đoạn code sau:

```javascript
function doPost(e) {
  try {
    // ID của Google Sheet (thay bằng ID của bạn)
    const SHEET_ID = '15dd9lP2bOIPJG6t2bcwJNPSSelTwoy9hyZsnN6Z22gU';
    const SHEET_NAME = 'Đăng ký khóa học';
    
    // Mở Google Sheets
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // Tạo sheet mới nếu chưa tồn tại
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      // Thêm header
      sheet.getRange(1, 1, 1, 7).setValues([
        ['Thời gian', 'Họ tên', 'Số điện thoại', 'Email', 'Gói khóa học', 'Kinh nghiệm', 'Ghi chú']
      ]);
    }
    
    // Parse dữ liệu từ request
    const data = JSON.parse(e.postData.contents);
    
    // Thêm dữ liệu vào sheet
    sheet.appendRow([
      data.timestamp,
      data.fullName,
      data.phone,
      data.email,
      data.coursePackage,
      data.experience || '',
      data.message || ''
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Bước 2: Deploy Google Apps Script

✅ **Đã cấu hình:**
1. Chọn loại: **Ứng dụng web** 
2. Thực thi với tư cách: **Tôi**
3. Người có quyền truy cập: **Bất kỳ ai** ⚠️ (cần thay đổi từ "Chỉ mình tôi")
4. Click **Triển khai**
5. Copy **Web app URL** từ popup

### Bước 3: Sử dụng Google Sheet hiện có

✅ **Sheet đã được chọn:** https://docs.google.com/spreadsheets/d/15dd9lP2bOIPJG6t2bcwJNPSSelTwoy9hyZsnN6Z22gU/edit
✅ **Sheet ID:** 15dd9lP2bOIPJG6t2bcwJNPSSelTwoy9hyZsnN6Z22gU (đã có trong code)

### Bước 4: Cập nhật Secrets trong Replit

🔧 **Cần cập nhật secret:**
- Key: `GOOGLE_SHEETS_WEBHOOK_URL`  
- Value hiện tại: `15dd9lP2bOIPJG6t2bcwJNPSSelTwoy9hyZsnN6Z22gU` (sai - chỉ là Sheet ID)
- **Value mới cần thay:** `https://script.google.com/macros/s/AKfycbz9R1VNYRBG_fh6Sqlmfj6I6PyB-3aPbFAb-GffQvinI6l5pDRgAnyuwc78NhYXaZDdvQ/exec`

⚠️ **Vào Replit Secrets và cập nhật giá trị này để Google Sheets hoạt động!**

## Trạng thái hiện tại

✅ **URL webhook đã đúng:** https://script.google.com/macros/s/AKfycbz9R1VNYRBG_fh6Sqlmfj6I6PyB-3aPbFAb-GffQvinI6l5pDRgAnyuwc78NhYXaZDdvQ/exec
⚠️ **Gặp lỗi 403:** Google Apps Script cần kiểm tra quyền truy cập
❌ **Cần sửa:** Deploy lại với quyền "Anyone" và kiểm tra Google Sheet permissions

## Giải pháp lỗi 403

1. **Vào Google Apps Script** và redeploy:
   - Click **Deploy** → **Manage deployments**
   - Edit deployment hiện tại
   - Đảm bảo "Who has access" = **Anyone**
   - Save

2. **Kiểm tra Google Sheet permissions:**
   - Mở sheet: https://docs.google.com/spreadsheets/d/15dd9lP2bOIPJG6t2bcwJNPSSelTwoy9hyZsnN6Z22gU/edit
   - Click **Share** và đảm bảo Apps Script có quyền edit

## Test kết nối

Sau khi sửa lỗi 403:
1. Điền form đăng ký trên website
2. Kiểm tra console logs
3. Kiểm tra Google Sheet có dữ liệu mới

## Lưu ý quan trọng

- Phải cấp quyền cho Apps Script lần đầu chạy
- Google Sheet phải được tạo trước khi test
- URL webhook phải được cấu hình đúng
- Dữ liệu vẫn được lưu trong hệ thống ngay cả khi Google Sheets lỗi