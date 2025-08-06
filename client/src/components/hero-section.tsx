import CountdownTimer from "./countdown-timer";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Dành riêng cho 100 người đăng ký đầu tiên
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            THIẾT KẾ ĐỒ HỌA<br />
            <span className="text-yellow-300">CHUYÊN NGHIỆP</span><br />
            TOÀN DIỆN VỚI CANVA
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">BỘ KHÓA HỌC</p>

          {/* Price Display */}
          <div className="mb-8">
            <div className="text-5xl md:text-7xl font-bold text-yellow-300 mb-2">1.000.000 VNĐ</div>
            <p className="text-lg text-blue-100">Tặng kèm các gói tài nguyên dành cho thiết kế</p>
            <p className="text-sm text-blue-200 mt-2">(Áp dụng các khóa học Online + Offline của Giảng viên HDT AI)</p>
          </div>

          <CountdownTimer />

          <a 
            href="#registration" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
          >
            ĐĂNG KÝ NHẬN ƯU ĐÃI
          </a>
        </div>
      </div>
    </section>
  );
}
