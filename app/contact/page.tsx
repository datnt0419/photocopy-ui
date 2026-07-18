import { ContactForm } from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20 bg-slate-50 dark:bg-zinc-950 transition-colors">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-4">
          <Badge className="bg-indigo-600/10 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400 w-fit mx-auto rounded-full px-3 py-1 font-semibold uppercase tracking-wider text-xs">
            Liên hệ hỗ trợ
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Liên Hệ Và Đăng Ký Đổ Mực / Sửa Máy
          </h1>
          <p className="text-slate-600 dark:text-zinc-400">
            Đặt lịch hẹn trực tuyến trong 1 phút hoặc liên hệ trực tiếp tổng đài chăm sóc khách hàng 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Thông Tin Xuân Thành Photocopy
              </h2>
              <p className="text-slate-600 dark:text-zinc-400 font-light text-sm leading-relaxed">
                Quý khách cần giải đáp khiếu nại, phản hồi chất lượng phục vụ hoặc báo giá dịch vụ doanh nghiệp vui lòng liên hệ:
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">Hotline Phục Vụ 24/7</h4>
                  <a href="tel:0984399119" className="text-indigo-600 dark:text-indigo-400 font-semibold text-base block mt-0.5 hover:underline">
                    0984.399.119
                  </a>
                  <a href="tel:02439964519" className="text-slate-500 text-sm block hover:underline">
                    Bàn cố định: 024.3996.4519
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">Email Tiếp Nhận Báo Giá</h4>
                  <span className="text-slate-600 dark:text-zinc-400 text-sm block mt-0.5">
                    lienhe@hoanghaphotocopy.com
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">Thời Gian Làm Việc</h4>
                  <span className="text-slate-600 dark:text-zinc-400 text-sm block mt-0.5">
                    08:00 - 21:00 (Tất cả các ngày trong tuần, kể cả lễ Tết)
                  </span>
                  <span className="text-zinc-500 text-xs block mt-0.5">
                    Kỹ thuật trực khẩn cấp: Sẵn sàng 24/24h.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">Văn Phòng Điều Hành Trung Tâm</h4>
                  <span className="text-slate-600 dark:text-zinc-400 text-sm block mt-0.5">
                    Số 26 Ngõ 165 Cầu Giấy, Quận Cầu Giấy, Hà Nội
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
