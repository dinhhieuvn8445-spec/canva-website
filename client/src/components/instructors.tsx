import minhTuanPhoto from "@assets/vietnamese_young_man_1754386669625.png";
import ducMinhPhoto from "@assets/vietnamese_young_man_3_1754386669625.png";
import hoangAnhTuPhoto from "@assets/thịnh công tử_1754386657267.png";

export default function Instructors() {
  const instructors = [
    {
      id: 1,
      name: "Minh Tuấn",
      title: "Canva Expert • Content Creator",
      photo: minhTuanPhoto,
      description: "Tôi đã có 5 năm kinh nghiệm trong lĩnh vực thiết kế đồ họa và marketing digital. Chuyên về Canva, Adobe Creative Suite, và các công cụ AI hỗ trợ thiết kế.",
      skills: "Canva Pro, ChatGPT, Adobe Illustrator, Figma",
    },
    {
      id: 2,
      name: "Đức Minh",
      title: "AI Integration Specialist",
      photo: ducMinhPhoto,
      description: "Chuyên gia về tích hợp AI vào quy trình thiết kế. Tôi đã đào tạo hơn 2000 học viên sử dụng ChatGPT kết hợp với Canva để tối ưu hóa năng suất sáng tạo.",
      skills: "ChatGPT, Midjourney, Canva AI, Leonardo AI",
    },
    {
      id: 3,
      name: "Hoàng Anh Tú",
      title: "Marketing & AI Tools Expert",
      photo: hoangAnhTuPhoto,
      description: "Tôi đã giảng dạy về các công cụ hỗ trợ Marketing, các công cụ AI như Leonardo AI, KlingAI, Digen, HeyGen, D-ID, Video-Gen và các công cụ xử lý hình ảnh, videos, âm thanh.",
      skills: "Canva, ChatGPT, Capcut, YouTube, TikTok",
    },
  ];

  return (
    <section id="instructors" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Người chắp cánh đam mê</h2>
          <p className="text-lg text-gray-600">Thông tin nổi bật về đội ngũ giảng viên của HDT AI</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition duration-300">
              <div className="mb-6">
                <img 
                  src={instructor.photo} 
                  alt={`Giảng viên ${instructor.name}`}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Giảng viên: {instructor.name}</h3>
              <div className="text-blue-600 font-semibold mb-3">{instructor.title}</div>
              <p className="text-gray-600 text-sm mb-4">"{instructor.description}"</p>
              <div className="text-sm text-gray-500">{instructor.skills}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
