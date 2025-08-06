import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

interface Registration {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  coursePackage: string;
  experience?: string;
  message?: string;
  createdAt: string;
}

export default function Admin() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["/api/registrations"],
    queryFn: async () => {
      const response = await fetch("/api/registrations");
      if (!response.ok) throw new Error("Failed to fetch registrations");
      const result = await response.json();
      return result.data as Registration[];
    },
  });

  if (isLoading) return <div className="p-8">Đang tải...</div>;
  if (error) return <div className="p-8 text-red-600">Lỗi: {error.message}</div>;

  const getPackageName = (pkg: string) => {
    switch (pkg) {
      case "basic": return "Canva Cơ bản - 500k";
      case "advanced": return "Canva Nâng cao - 500k";
      case "combo": return "Combo Full - 1000k";
      default: return pkg;
    }
  };

  const getExperienceName = (exp?: string) => {
    switch (exp) {
      case "beginner": return "Người mới bắt đầu";
      case "intermediate": return "Có kinh nghiệm cơ bản";
      case "advanced": return "Có kinh nghiệm nâng cao";
      default: return "Chưa chọn";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">
              Quản lý đăng ký khóa học HDT AI
            </h1>
            <p className="text-gray-600 mt-1">
              Tổng cộng: <span className="font-semibold">{data?.length || 0}</span> đăng ký
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Thời gian
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Thông tin liên hệ
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Gói khóa học
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kinh nghiệm
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ghi chú
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data?.map((registration) => (
                  <tr key={registration.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {format(new Date(registration.createdAt), "dd/MM/yyyy HH:mm")}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <div className="font-medium">{registration.fullName}</div>
                      <div className="text-gray-500">{registration.phone}</div>
                      <div className="text-gray-500">{registration.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {getPackageName(registration.coursePackage)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {getExperienceName(registration.experience)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                      {registration.message || "Không có"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {(!data || data.length === 0) && (
            <div className="text-center py-12">
              <p className="text-gray-500">Chưa có đăng ký nào</p>
            </div>
          )}
        </div>

        {/* Google Sheets Status */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">
            Trạng thái Google Sheets
          </h3>
          <p className="text-yellow-700 mb-4">
            ❌ Google Sheets chưa được liên kết. Dữ liệu đăng ký được lưu trong hệ thống.
          </p>
          <a 
            href="/GOOGLE_SHEETS_SETUP.md" 
            target="_blank"
            className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
          >
            📋 Xem hướng dẫn liên kết Google Sheets
          </a>
        </div>
      </div>
    </div>
  );
}