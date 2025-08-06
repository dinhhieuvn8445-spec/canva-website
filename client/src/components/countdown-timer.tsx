import { useCountdown } from "../hooks/use-countdown";

export default function CountdownTimer() {
  // Set countdown for 7 days from now
  const targetDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-yellow-300">
        Thời gian ưu đãi còn lại:
      </h3>
      <div className="flex justify-center space-x-4">
        <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center min-w-[80px]">
          <div className="text-3xl font-bold text-yellow-300">{days}</div>
          <div className="text-sm text-blue-100">Ngày</div>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center min-w-[80px]">
          <div className="text-3xl font-bold text-yellow-300">{hours}</div>
          <div className="text-sm text-blue-100">Giờ</div>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center min-w-[80px]">
          <div className="text-3xl font-bold text-yellow-300">{minutes}</div>
          <div className="text-sm text-blue-100">Phút</div>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center min-w-[80px]">
          <div className="text-3xl font-bold text-yellow-300">{seconds}</div>
          <div className="text-sm text-blue-100">Giây</div>
        </div>
      </div>
    </div>
  );
}