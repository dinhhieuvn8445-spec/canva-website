export default function StatsSection() {
  const stats = [
    { number: "3750", label: "Khách hàng trung thành" },
    { number: "451", label: "Dự án hoàn thành" },
    { number: "05", label: "Thành tích đặc biệt" },
    { number: "255", label: "Đối tác lớn" }
  ];

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">THỐNG KÊ</h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">{stat.number}</div>
              <div className="text-lg text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
