import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Sparkles, Wrench, Settings, Award, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Bảng Giá Dịch Vụ Đổ Mực & Sửa Máy In, Máy Photocopy",
  description: "Báo giá chi tiết dịch vụ đổ mực máy in A4/A3, đổ mực máy photocopy Ricoh/Toshiba, sửa chữa phần cứng và linh kiện chính hãng tại Hà Nội.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: "Đổ Mực Máy In & Photocopy",
      description: "Nạp mực chính hãng siêu nét cho các dòng máy đen trắng, máy màu. Cam kết không lem mực, bản in sắc nét hoàn hảo.",
      brands: ["Canon", "HP", "Brother", "Ricoh", "Xerox", "Toshiba"],
      price: "Chỉ từ 80.000đ - 350.000đ",
      icon: <Sparkles className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Sửa Chữa Phần Cứng Máy Văn Phòng",
      description: "Khắc phục triệt để các lỗi kẹt giấy, không lên nguồn, bản in sọc đen, kêu to. Thay thế linh kiện chính hãng tận nơi.",
      brands: ["Trống (Drum)", "Gạt mực", "Trục từ", "Lô ép/Sấy", "Hộp từ"],
      price: "Báo giá trước khi làm",
      icon: <Wrench className="w-6 h-6 text-amber-500" />,
    },
    {
      title: "Bảo Dưỡng & Vệ Sinh Định Kỳ",
      description: "Dịch vụ bảo dưỡng máy photocopy định kỳ cho văn phòng, cơ quan nhằm tăng tuổi thọ máy và tránh hỏng vặt khi đang sử dụng.",
      brands: ["Vệ sinh gương quét", "Hút mực thải", "Tra dầu mỡ bánh răng"],
      price: "Tiết kiệm chi phí",
      icon: <Settings className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Cho Thuê Máy Photocopy Giá Rẻ",
      description: "Cung cấp máy photocopy công suất lớn, hiện đại cho các văn phòng, công ty không cần chi phí đầu tư ban đầu lớn.",
      brands: ["Ricoh", "Toshiba", "Canon", "Hỗ trợ kỹ thuật 24/7"],
      price: "Từ 800.000đ / tháng",
      icon: <Award className="w-6 h-6 text-blue-500" />,
    },
  ];

  return (
    <div className="py-12 md:py-20 bg-slate-50 dark:bg-zinc-950 transition-colors">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-4">
          <Badge className="bg-indigo-600/10 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400 w-fit mx-auto rounded-full px-3 py-1 font-semibold uppercase tracking-wider text-xs">
            Dịch vụ chi tiết
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Giải Pháp Toàn Diện Cho Thiết Bị Văn Phòng
          </h1>
          <p className="text-slate-600 dark:text-zinc-400">
            Dịch vụ đổ mực, sửa chữa, thay thế linh kiện tận nơi phục vụ cơ quan hành chính, văn phòng công sở và cá nhân tại Hà Nội.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900/50 border border-slate-200/60 dark:border-zinc-800/60 rounded-2xl p-6 hover:shadow-xl hover:border-indigo-500/40 dark:hover:border-indigo-400/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {svc.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {svc.title}
                </h3>
                <p className="text-slate-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed">
                  {svc.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {svc.brands.map((b, bIdx) => (
                    <span
                      key={bIdx}
                      className="text-xs bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 px-2.5 py-1 rounded-full font-medium"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 dark:text-zinc-500 uppercase tracking-wider font-semibold">
                  Đơn giá tham khảo
                </span>
                <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-500/5 dark:bg-indigo-500/10 px-3 py-1 rounded-lg">
                  {svc.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed price table for common printers */}
        <div className="mt-16 bg-white dark:bg-zinc-900/30 border border-slate-200 dark:border-zinc-800/80 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center md:text-left">
            Bảng Giá Đổ Mực Máy In & Thay Linh Kiện Thông Dụng
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-500 dark:text-zinc-400">
              <thead className="text-xs text-slate-700 dark:text-zinc-300 uppercase bg-slate-100 dark:bg-zinc-800">
                <tr>
                  <th scope="col" className="px-6 py-4 rounded-l-lg">Hạng mục dịch vụ</th>
                  <th scope="col" className="px-6 py-4">Dòng máy áp dụng</th>
                  <th scope="col" className="px-6 py-4 rounded-r-lg">Đơn giá trọn gói (VNĐ)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-zinc-800/80">
                <tr className="hover:bg-slate-50/50 dark:hover:bg-zinc-900/50">
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Đổ mực máy in A4 đen trắng</td>
                  <td className="px-6 py-4">Canon LBP 2900, 3300, HP Laser M15a, 107a, Brother HL-2321d...</td>
                  <td className="px-6 py-4 font-bold text-indigo-600 dark:text-indigo-400">80.000đ - 120.000đ</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-zinc-900/50">
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Đổ mực máy in A3 đen trắng</td>
                  <td className="px-6 py-4">Canon LBP 3500, 8610, 8780x, HP LaserJet 5200...</td>
                  <td className="px-6 py-4 font-bold text-indigo-600 dark:text-indigo-400">250.000đ - 350.000đ</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-zinc-900/50">
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Đổ mực máy in Laser màu</td>
                  <td className="px-6 py-4">HP Color LaserJet, Canon LBP 611Cn, Brother 3150cdw... (mỗi màu)</td>
                  <td className="px-6 py-4 font-bold text-indigo-600 dark:text-indigo-400">250.000đ - 300.000đ</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-zinc-900/50">
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Đổ mực máy Photocopy lớn</td>
                  <td className="px-6 py-4">Ricoh Aficio, Toshiba e-Studio, Xerox, Canon (ống lớn)</td>
                  <td className="px-6 py-4 font-bold text-indigo-600 dark:text-indigo-400">300.000đ - 450.000đ</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-zinc-900/50">
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Thay thế Trống in (Drum)</td>
                  <td className="px-6 py-4">Các dòng máy in Canon, HP A4 văn phòng thông dụng</td>
                  <td className="px-6 py-4 font-bold text-indigo-600 dark:text-indigo-400">150.000đ - 220.000đ</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-zinc-900/50">
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Thay thế lô sấy / lô ép</td>
                  <td className="px-6 py-4">Máy in văn phòng Canon/HP bị rách vỏ sấy, mòn lô ép</td>
                  <td className="px-6 py-4 font-bold text-indigo-600 dark:text-indigo-400">250.000đ - 450.000đ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 bg-indigo-600 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-indigo-600/10">
          <div>
            <h3 className="text-xl font-bold">Quý khách có nhu cầu sửa chữa dòng máy văn phòng đặc biệt?</h3>
            <p className="text-indigo-100 text-sm mt-1">Vui lòng gọi hotline để kỹ thuật viên tư vấn và giải đáp miễn phí trong vòng 5 phút.</p>
          </div>
          <a
            href="tel:0988732433"
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className: "text-indigo-700 font-bold px-6 py-3 rounded-full flex items-center gap-2 shrink-0 shadow-lg",
            })}
          >
            <Phone className="w-4 h-4" />
            0988.732.433
          </a>
        </div>
      </div>
    </div>
  );
}
