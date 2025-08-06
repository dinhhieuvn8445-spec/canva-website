import { Check } from "lucide-react";

export default function PricingSection() {
  const packages = [
    {
      name: "Canva Cơ bản",
      subtitle: "(Beginner)",
      price: "500.000 VNĐ",
      features: [
        "Làm quen giao diện, đăng nhập, chuyển ngôn ngữ",
        "Các thao tác cơ bản: chỉnh kích thước, xóa, khôi phục",
        "Thiết kế ảnh bìa Facebook, poster, banner",
        "Thực hành nhiều ấn phẩm cơ bản"
      ],
      note: "✔️ Phù hợp: Người mới bắt đầu, hoặc chưa biết gì về thiết kế",
      featured: false
    },
    {
      name: "Canva Nâng cao",
      subtitle: "(Advanced)",
      price: "500.000 VNĐ",
      features: [
        "Khai thác tính năng AI: xóa nền, chỉnh màu",
        "Thiết kế video: TikTok, Facebook, YouTube",
        "Kết hợp với ChatGPT: gợi ý ý tưởng",
        "Xây dựng bộ nhận diện thương hiệu"
      ],
      note: "✔️ Phù hợp: Chủ doanh nghiệp, nhà sáng tạo nội dung, marketer",
      featured: false
    },
    {
      name: "Combo Canva Full",
      subtitle: "Khóa học hoàn chỉnh",
      price: "1.000.000 VNĐ",
      features: [
        "Bao gồm cả 2 khóa học cơ bản và nâng cao",
        "Tặng kèm gói tài nguyên thiết kế",
        "Hỗ trợ trực tiếp từ giảng viên",
        "Cập nhật nội dung mới liên tục"
      ],
      note: "Tiết kiệm 50% so với mua riêng lẻ!",
      featured: true
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lộ trình học</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 ${
                pkg.featured 
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white transform scale-105 relative' 
                  : 'bg-white'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    PHỔ BIẾN NHẤT
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className={`text-2xl font-bold mb-2 ${pkg.featured ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name}
                </h3>
                <p className={`mb-4 ${pkg.featured ? 'text-blue-100' : 'text-gray-600'}`}>
                  {pkg.subtitle}
                </p>
                <div className={`text-4xl font-bold mb-6 ${
                  pkg.featured ? 'text-yellow-300' : 'text-blue-600'
                }`}>
                  {pkg.price}
                </div>
                
                <ul className="text-left space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className={`mt-1 mr-3 w-4 h-4 flex-shrink-0 ${
                        pkg.featured ? 'text-yellow-300' : 'text-emerald-600'
                      }`} />
                      <span className={pkg.featured ? 'text-blue-100' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <p className={`text-sm mb-6 ${pkg.featured ? 'text-blue-100' : 'text-gray-600'}`}>
                  {pkg.note}
                </p>
                
                {pkg.featured && (
                  <a 
                    href="#registration" 
                    className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
                  >
                    ĐĂNG KÝ NGAY
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
