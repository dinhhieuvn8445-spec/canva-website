import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertRegistrationSchema } from "@shared/schema";
import type { InsertRegistration } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function RegistrationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertRegistration>({
    resolver: zodResolver(insertRegistrationSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      coursePackage: undefined as any,
      experience: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertRegistration) => {
      const response = await apiRequest("POST", "/api/registrations", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Đăng ký thành công!",
        description: data.message || "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error: any) => {
      console.error("Registration error:", error);
      toast({
        title: "Có lỗi xảy ra",
        description: "Vui lòng thử lại sau hoặc liên hệ trực tiếp với chúng tôi.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: InsertRegistration) => {
    setIsSubmitting(true);
    mutation.mutate(data);
  };

  return (
    <section id="registration" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ĐĂNG KÝ KHÓA HỌC</h2>
          <p className="text-lg text-gray-600">Điền thông tin để nhận ưu đãi đặc biệt</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Input */}
            <div>
              <Label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Họ và tên *
              </Label>
              <Input
                id="fullName"
                {...form.register("fullName")}
                placeholder="Nhập họ tên đầy đủ"
                className="w-full"
              />
              {form.formState.errors.fullName && (
                <p className="text-red-600 text-sm mt-1">{form.formState.errors.fullName.message}</p>
              )}
            </div>

            {/* Phone Input */}
            <div>
              <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Số điện thoại *
              </Label>
              <Input
                id="phone"
                type="tel"
                {...form.register("phone")}
                placeholder="Nhập số điện thoại"
                className="w-full"
              />
              {form.formState.errors.phone && (
                <p className="text-red-600 text-sm mt-1">{form.formState.errors.phone.message}</p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                {...form.register("email")}
                placeholder="Nhập địa chỉ email"
                className="w-full"
              />
              {form.formState.errors.email && (
                <p className="text-red-600 text-sm mt-1">{form.formState.errors.email.message}</p>
              )}
            </div>

            {/* Course Selection */}
            <div>
              <Label htmlFor="coursePackage" className="block text-sm font-medium text-gray-700 mb-2">
                Chọn gói khóa học *
              </Label>
              <Select 
                onValueChange={(value: "basic" | "advanced" | "combo") => form.setValue("coursePackage", value)}
                value={form.watch("coursePackage")}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Chọn gói khóa học" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Gói Canva cơ bản - 500k</SelectItem>
                  <SelectItem value="advanced">Gói Canva nâng cao - 500k</SelectItem>
                  <SelectItem value="combo">Combo full Canva - 1000k</SelectItem>
                </SelectContent>
              </Select>
              {form.formState.errors.coursePackage && (
                <p className="text-red-600 text-sm mt-1">{form.formState.errors.coursePackage.message}</p>
              )}
            </div>

            {/* Experience Level */}
            <div>
              <Label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                Mức độ kinh nghiệm
              </Label>
              <Select 
                onValueChange={(value) => form.setValue("experience", value)}
                value={form.watch("experience")}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Chọn mức độ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Người mới bắt đầu</SelectItem>
                  <SelectItem value="intermediate">Đã có kinh nghiệm cơ bản</SelectItem>
                  <SelectItem value="advanced">Có kinh nghiệm nâng cao</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Ghi chú
              </Label>
              <Textarea
                id="message"
                {...form.register("message")}
                rows={4}
                placeholder="Chia sẻ mong muốn của bạn về khóa học..."
                className="w-full"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 text-lg"
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  ĐANG GỬI...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane mr-2"></i>
                  GỬI ĐĂNG KÝ
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Payment Information */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Thông tin thanh toán</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Thông tin chuyển khoản</h4>
              <div className="bg-white rounded-lg p-6 space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Ngân hàng:</span>
                  <span className="text-gray-900">Techcombank</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Chủ tài khoản:</span>
                  <span className="text-gray-900">Hoang Anh Tu</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Số tài khoản:</span>
                  <span className="text-gray-900 font-mono">88043333333</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Lưu ý quan trọng</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                  Chỉ chuyển khoản sau khi đã hoàn tất bấm "Đăng ký gói"
                </li>
                <li className="flex items-start">
                  <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                  Khi chuyển khoản, ghi rõ HỌ TÊN + SỐ ĐIỆN THOẠI
                </li>
                <li className="flex items-start">
                  <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                  Giữ lại biên lai/chụp màn hình giao dịch
                </li>
                <li className="flex items-start">
                  <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                  Nhân viên sẽ liên hệ trong vòng 24 giờ
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
