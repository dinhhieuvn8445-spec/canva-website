export default function CourseFeatures() {
  const features = [
    {
      icon: "fas fa-check-circle",
      title: "Lộ trình bài bản, dễ tiếp cận",
      description: "Dành cho người mới bắt đầu và nâng cao kỹ năng cho người đã biết",
    },
    {
      icon: "fas fa-robot",
      title: "Tích hợp AI chỉnh sửa",
      description: "Sử dụng AI để chỉnh sửa ảnh, tạo video, hỗ trợ sáng tạo nội dung",
    },
    {
      icon: "fas fa-project-diagram",
      title: "Thực hành nhiều dự án thực tế",
      description: "Bài đăng Facebook, Instagram, video TikTok, YouTube...",
    },
    {
      icon: "fas fa-palette",
      title: "Xây dựng thương hiệu cá nhân",
      description: "Hướng dẫn tạo bộ nhận diện thương hiệu hoàn chỉnh",
    },
    {
      icon: "fas fa-download",
      title: "Hỗ trợ tài nguyên thiết kế",
      description: "Mẹo và thủ thuật giúp tăng hiệu suất gấp nhiều lần",
    },
    {
      icon: "fas fa-sync-alt",
      title: "Cập nhật liên tục",
      description: "Khóa học được bổ sung nội dung mới thường xuyên",
    },
  ];

  return (
    <section id="course-info" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Điểm nổi bật của khóa học</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Khóa học Canva toàn diện giúp bạn làm chủ thiết kế từ cơ bản đến nâng cao chỉ trong thời gian ngắn.
            Với hơn 80+ bài học thực hành, bạn sẽ tự tin tạo ra ấn phẩm marketing, poster, banner, video, CV, 
            logo và bộ nhận diện thương hiệu chỉ bằng vài cú click.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition duration-300">
              <div className="text-green-600 mb-4">
                <i className={`${feature.icon} text-2xl`}></i>
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
