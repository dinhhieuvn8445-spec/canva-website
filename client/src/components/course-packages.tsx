export default function CoursePackages() {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lộ trình học</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Package */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Canva Cơ bản</h3>
              <p className="text-gray-600 mb-4">(Beginner)</p>
              <div className="text-4xl font-bold text-blue-600 mb-6">500.000 VNĐ</div>

              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                  <span className="text-gray-700">Làm quen giao diện, đăng nhập, chuyển ngôn ngữ</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                  <span className="text-gray-700">Các thao tác cơ bản: chỉnh kích thước, xóa, khôi phục</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                  <span className="text-gray-700">Thiết kế ảnh bìa Facebook, poster, banner</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                  <span className="text-gray-700">Thực hành nhiều ấn phẩm cơ bản</span>
                </li>
              </ul>

              <p className="text-sm text-gray-600 mb-6">✔️ Phù hợp: Người mới bắt đầu, hoặc chưa biết gì về thiết kế</p>
            </div>
          </div>

          {/* Advanced Package */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Canva Nâng cao</h3>
              <p className="text-gray-600 mb-4">(Advanced)</p>
              <div className="text-4xl font-bold text-blue-600 mb-6">500.000 VNĐ</div>

              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                  <span className="text-gray-700">Khai thác tính năng AI: xóa nền, chỉnh màu</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                  <span className="text-gray-700">Thiết kế video: TikTok, Facebook, YouTube</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                  <span className="text-gray-700">Kết hợp với ChatGPT: gợi ý ý tưởng</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                  <span className="text-gray-700">Xây dựng bộ nhận diện thương hiệu</span>
                </li>
              </ul>

              <p className="text-sm text-gray-600 mb-6">✔️ Phù hợp: Chủ doanh nghiệp, nhà sáng tạo nội dung, marketer</p>
            </div>
          </div>

          {/* Full Combo - Featured */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 shadow-xl transform scale-105 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">PHỔ BIẾN NHẤT</span>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Combo Canva Full</h3>
              <p className="text-blue-100 mb-4">Khóa học hoàn chỉnh</p>
              <div className="text-4xl font-bold text-yellow-300 mb-6">1.000.000 VNĐ</div>

              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-yellow-300 mt-1 mr-3"></i>
                  <span className="text-blue-100">Bao gồm cả 2 khóa học cơ bản và nâng cao</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-yellow-300 mt-1 mr-3"></i>
                  <span className="text-blue-100">Tặng kèm gói tài nguyên thiết kế</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-yellow-300 mt-1 mr-3"></i>
                  <span className="text-blue-100">Hỗ trợ trực tiếp từ giảng viên</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-yellow-300 mt-1 mr-3"></i>
                  <span className="text-blue-100">Cập nhật nội dung mới liên tục</span>
                </li>
              </ul>

              <p className="text-sm text-blue-100 mb-6">Tiết kiệm 50% so với mua riêng lẻ!</p>

              <a 
                href="#registration" 
                className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
              >
                ĐĂNG KÝ NGAY
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-4">
            <strong>NHANH TAY LÊN!</strong> Đăng ký trước ngày 15/7/2025
          </p>
          <p className="text-sm text-gray-600">
            Sau khi đăng ký mua khóa học, bộ phận CSKH của HDT AI sẽ liên hệ với bạn để xác nhận thông tin. 
            Bạn sẽ nhận được link + tài khoản truy cập khóa học sau khi xác nhận đã thanh toán gói tương ứng.
          </p>
        </div>
      </div>
    </section>
  );
}
