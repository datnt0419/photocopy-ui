import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/contact-form";
import { DistrictSelector } from "@/components/district-selector";
import {
  Phone,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Award,
  Sparkles,
  Wrench,
  Settings,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Đổ Mực Máy In & Photocopy",
      description: "Nạp mực chính hãng siêu nét cho các dòng máy đen trắng, máy màu. Cam kết không lem mực, bản in sắc nét.",
      price: "Chỉ từ 80.000đ - 350.000đ",
      icon: <Sparkles className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Sửa Chữa Phần Cứng Máy Văn Phòng",
      description: "Khắc phục triệt để các lỗi kẹt giấy, không lên nguồn, bản in sọc đen, kêu to. Thay thế linh kiện tận nơi.",
      price: "Báo giá trước khi làm",
      icon: <Wrench className="w-6 h-6 text-amber-500" />,
    },
    {
      title: "Bảo Dưỡng & Vệ Sinh Định Kỳ",
      description: "Dịch vụ bảo dưỡng máy photocopy định kỳ giúp tăng tuổi thọ máy và tránh hỏng vặt khi đang sử dụng.",
      price: "Tiết kiệm chi phí",
      icon: <Settings className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Cho Thuê Máy Photocopy Giá Rẻ",
      description: "Cung cấp máy photocopy công suất lớn, hiện đại cho các văn phòng không cần chi phí đầu tư ban đầu lớn.",
      price: "Từ 800.000đ / tháng",
      icon: <Award className="w-6 h-6 text-blue-500" />,
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:py-24 bg-slate-50 dark:bg-zinc-950 transition-colors">
        {/* Decorative ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300 border-indigo-200/30 rounded-full font-medium">
                  Có mặt sau 15-30 phút
                </Badge>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border-blue-200/30 rounded-full font-medium">
                  Đầy đủ hoá đơn VAT
                </Badge>
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200/30 rounded-full font-medium">
                  Hỗ trợ 24/7
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
                Sửa Chữa & Đổ Mực{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-blue-400 dark:to-indigo-300">
                  Máy Photocopy
                </span>{" "}
                Tại Nhà Hà Nội
              </h1>

              <p className="max-w-xl text-lg text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
                Hoàng Hà chuyên đổ mực, sửa chữa, thay thế linh kiện chính hãng cho máy in, máy photocopy chuyên nghiệp
                (Canon, HP, Brother, Ricoh, Toshiba, Xerox, Epson...). Kỹ thuật viên phản ứng nhanh sau 15 phút gọi!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href="tel:0984399119"
                  className={buttonVariants({
                    variant: "default",
                    size: "lg",
                    className: "bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold px-8 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 transform hover:-translate-y-0.5 transition-all text-base group flex items-center justify-center gap-2",
                  })}
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Gọi Ngay: 0984.399.119
                </a>
                <Link
                  href="/services"
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className: "rounded-full font-semibold border-slate-300 hover:bg-slate-100 dark:border-zinc-800 dark:hover:bg-zinc-900 text-base flex items-center justify-center",
                  })}
                >
                  Xem Bảng Giá
                </Link>
              </div>

              {/* Trust markers */}
              <div className="pt-6 border-t border-slate-200 dark:border-zinc-800/80 w-full grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <h4 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">10+ Năm</h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-500 uppercase tracking-wider font-semibold mt-1">
                    Kinh Nghiệm
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">12 Quận</h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-500 uppercase tracking-wider font-semibold mt-1">
                    Túc Trực Ở HN
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">99.8%</h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-500 uppercase tracking-wider font-semibold mt-1">
                    Hài Lòng
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Right Visual */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[450px] aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-slate-300 dark:shadow-none border border-slate-200 dark:border-zinc-800">
                <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay pointer-events-none" />
                <Image
                  src="/hero_repair.png"
                  alt="Kỹ thuật viên sửa chữa máy photocopy"
                  fill
                  priority
                  className="object-cover object-center transform hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              {/* Floating glass overlay card */}
              <div className="absolute -bottom-6 -left-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-slate-200/50 dark:border-zinc-800/50 rounded-xl p-4 shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs text-slate-500 dark:text-zinc-400">Thời gian phục vụ</h5>
                  <p className="text-sm font-bold text-slate-800 dark:text-zinc-100">15p - 30p có mặt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 bg-white dark:bg-zinc-900 border-y border-slate-100 dark:border-zinc-900 transition-colors">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-4">
            <Badge className="bg-indigo-600/10 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400 w-fit mx-auto rounded-full px-3 py-1 font-semibold uppercase tracking-wider text-xs">
              Dịch vụ nổi bật
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Giải Pháp Thiết Bị Văn Phòng Cho Bạn
            </h2>
            <p className="text-slate-600 dark:text-zinc-400">
              Đầy đủ các gói dịch vụ phục vụ nhu cầu in ấn của doanh nghiệp và cá nhân.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-zinc-950 border border-slate-200/40 dark:border-zinc-900 rounded-2xl p-6 hover:shadow-lg hover:border-indigo-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center mb-4">
                    {svc.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">
                    {svc.title}
                  </h3>
                  <p className="text-slate-500 dark:text-zinc-400 text-xs leading-relaxed mb-4">
                    {svc.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/40 dark:border-zinc-900 flex items-center justify-between text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  <span>{svc.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className={buttonVariants({
                variant: "outline",
                className: "rounded-full font-bold px-6 py-2 group inline-flex items-center gap-1.5",
              })}
            >
              Xem Chi Tiết Dịch Vụ & Báo Giá
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* DISTRICTS PREVIEW */}
      <section className="py-20 bg-slate-50 dark:bg-zinc-950 transition-colors">
        <div className="container mx-auto px-4 md:px-8">
          <DistrictSelector />
          <div className="text-center mt-12">
            <Link
              href="/districts"
              className={buttonVariants({
                variant: "outline",
                className: "rounded-full font-bold px-6 py-2 group inline-flex items-center gap-1.5",
              })}
            >
              Xem Hệ Thống Chi Nhánh Bàn Kỹ Thuật
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section className="py-20 bg-white dark:bg-zinc-900 border-y border-slate-100 dark:border-zinc-900 transition-colors">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-4">
            <Badge className="bg-emerald-600/10 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 w-fit mx-auto rounded-full px-3 py-1 font-semibold uppercase tracking-wider text-xs">
              Yên tâm sử dụng
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Cam Kết Chất Lượng Vàng Từ Hoàng Hà
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 dark:bg-zinc-950/30 border border-slate-200/50 dark:border-zinc-800/80 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">Bản In Sắc Nét 99%</h3>
              <p className="text-slate-500 dark:text-zinc-500 text-xs leading-relaxed">
                Mực nạp cao cấp nhập khẩu, đảm bảo độ phủ mực đồng đều, không đen mờ hay lem mực thải.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-zinc-950/30 border border-slate-200/50 dark:border-zinc-800/80 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">Bảo Vệ Linh Kiện</h3>
              <p className="text-slate-500 dark:text-zinc-500 text-xs leading-relaxed">
                Đổ đúng định lượng, tra mỡ bôi trơn chuyên dụng bảo vệ tối đa hộp mực và cụm sấy.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-zinc-950/30 border border-slate-200/50 dark:border-zinc-800/80 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">Phản Hồi Thần Tốc</h3>
              <p className="text-slate-500 dark:text-zinc-500 text-xs leading-relaxed">
                Có mặt lập tức sau 15-30 phút gọi. Kỹ thuật trực quận đảm bảo không làm gián đoạn công việc.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-zinc-950/30 border border-slate-200/50 dark:border-zinc-800/80 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">Bảo Hành Tận Nơi</h3>
              <p className="text-slate-500 dark:text-zinc-500 text-xs leading-relaxed">
                Mọi linh kiện thay thế (trống, gạt, trục...) đều được dán tem bảo hành và hỗ trợ lỗi chu đáo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 bg-slate-50 dark:bg-zinc-950 transition-colors">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

