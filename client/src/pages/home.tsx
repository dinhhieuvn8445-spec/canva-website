import HeroSection from "../components/hero-section";
import CourseFeatures from "../components/course-features";
import Statistics from "../components/statistics";
import Instructors from "../components/instructors";
import CoursePackages from "../components/course-packages";
import RegistrationForm from "../components/registration-form";
import ContactSection from "../components/contact-section";
import Logo from "../components/logo";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32">
            <div className="flex items-center space-x-6">
              <Logo className="w-32 h-32" />
              <h1 className="text-6xl font-bold text-gray-900 tracking-wide">HDT AI</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#course-info" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Thông tin khóa học
                </a>
                <a href="#instructors" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Giảng viên
                </a>
                <a href="#pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Bảng giá
                </a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Liên hệ
                </a>
              </div>
            </div>
            <button className="md:hidden">
              <i className="fas fa-bars text-gray-700"></i>
            </button>
          </div>
        </div>
      </nav>

      <HeroSection />
      <CourseFeatures />
      <Statistics />
      <Instructors />
      <CoursePackages />
      <RegistrationForm />
      <ContactSection />
    </div>
  );
}
