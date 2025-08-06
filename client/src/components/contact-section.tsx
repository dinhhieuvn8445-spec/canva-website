export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">LIÊN HỆ</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-red-500 mr-3"></i>
                <span className="text-gray-300">203 Bế Văn Đàn - Quang Trung - Đống Đa - Hà Nội</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-red-500 mr-3"></i>
                <span className="text-gray-300">+84 33 473 4875</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-red-500 mr-3"></i>
                <span className="text-gray-300">gattsvn@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">THỜI GIAN LÀM VIỆC</h3>
            <div className="space-y-2 text-gray-300">
              <div>Thứ 2 - Thứ 6: 8AM đến 5PM</div>
              <div>Thứ 7: 8AM đến 11AM</div>
              <div>Chủ nhật: Nghỉ</div>
            </div>
          </div>

          {/* Social Groups */}
          <div>
            <h3 className="text-xl font-bold mb-4">HỘI NHÓM</h3>
            <div className="space-y-3">
              <a 
                href="https://zalo.me/g/ylfdge520" 
                className="flex items-center text-gray-300 hover:text-white transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-zalo text-red-500 mr-3"></i>
                <span>Nhóm Zalo</span>
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-white transition duration-300">
                <i className="fab fa-telegram text-red-500 mr-3"></i>
                <span>Nhóm Telegram (đang cập nhật)</span>
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-white transition duration-300">
                <i className="fab fa-facebook text-red-500 mr-3"></i>
                <span>Fanpage FB (đang cập nhật)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">🌐 CHÍNH SÁCH & BẢO MẬT</h4>
            <p className="text-gray-300 text-sm max-w-2xl mx-auto">
              Chúng tôi cam kết bảo vệ thông tin cá nhân và quyền riêng tư của khách hàng. 
              Tất cả dữ liệu được thu thập và xử lý tuân thủ nghiêm ngặt các quy định pháp luật hiện hành.
            </p>
          </div>
          <p className="text-gray-400 text-sm">
            Cập nhật lần cuối: 02/07/2025 | 
            <a href="https://www.kingai.com.vn/policies" className="text-blue-400 hover:text-blue-300 ml-1">
              Xem chi tiết chính sách
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
