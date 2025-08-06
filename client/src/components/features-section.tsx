import { Check, Bot, Briefcase, Palette, Download, RefreshCw } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Check className="w-6 h-6" />,
      title: "Lộ trình bài bản, dễ tiếp cận",
      description: "Dành cho người mới bắt đầu và nâng cao kỹ năng cho người đã biết"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Tích hợp AI chỉnh sửa",
      description: "Sử dụng AI để chỉnh sửa ảnh, tạo video, hỗ trợ sáng tạo nội dung"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Thực hành nhiều dự án thực tế",
      description: "Bài đăng Facebook, Instagram, video TikTok, YouTube..."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Xây dựng thương hiệu cá nhân",
      description: "Hướng dẫn tạo bộ nhận diện thương hiệu hoàn chỉnh"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Hỗ trợ tài nguyên thiết kế",
      description: "Mẹo và thủ thuật giúp tăng hiệu suất gấp nhiều lần"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Cập nhật liên tục",
      description: "Khóa học được bổ sung nội dung mới thường xuyên"
    }
  ];

  return (
    <section id="course-info" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Điểm nổi bật của khóa học</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Khóa học Canva toàn diện giúp bạn làm chủ thiết kế từ cơ bản đến nâng cao chỉ trong thời gian ngắn
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition duration-300">
              <div className="text-emerald-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
