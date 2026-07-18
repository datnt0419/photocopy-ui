import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Phone, CheckCircle2 } from "lucide-react";

export default function ProcessPage() {
  const processSteps = [
    {
      step: "01",
      title: "Kiểm Tra Ban Đầu",
      desc: "Kỹ thuật viên tiến hành in thử bản in test để đánh giá tình trạng hỏng hóc hoặc xem hộp mực đã cạn kiệt hay do hỏng linh kiện khác.",
    },
    {
      step: "02",
      title: "Tháo Dỡ & Vệ Sinh Mực Thải",
      desc: "Tháo rời hộp mực bằng các thiết bị chuyên dụng, đổ mực thải tích tụ dư thừa để tránh tràn mực gây lem bản in sau này.",
    },
    {
      step: "03",
      title: "Bảo Trì Linh Kiện",
      desc: "Vệ sinh sạch trống, gạt và trục cao áp. Bôi trơn các khớp truyền động cơ học bằng mỡ mỡ chịu nhiệt giúp linh kiện hoạt động êm ái.",
    },
    {
      step: "04",
      title: "Đổ Mực Tiêu Chuẩn",
      desc: "Đổ mực nạp mới đúng chủng loại, đảm bảo tương thích 100% với dòng máy in hoặc photocopy của khách hàng để duy trì tuổi thọ linh kiện.",
    },
    {
      step: "05",
      title: "Lắp Ráp & Nghiệm Thu",
      desc: "Lắp ráp hộp mực hoàn chỉnh, đưa vào máy và in test nhiều bản in để khách hàng trực tiếp kiểm tra chất lượng độ nét trước khi viết hóa đơn.",
    },
    {
      step: "06",
      title: "Dán Tem & Bảo Hành",
      desc: "Dán tem bảo hành dịch vụ, dán tem số lần đổ mực để theo dõi chất lượng cartridge, viết phiếu thu và hướng dẫn khách hàng cách sử dụng bền bỉ.",
    },
  ];

  return (
    <div className="py-12 md:py-20 bg-slate-50 dark:bg-zinc-950 transition-colors">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-4">
          <Badge className="bg-indigo-600/10 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400 w-fit mx-auto rounded-full px-3 py-1 font-semibold uppercase tracking-wider text-xs">
            Quy trình chuẩn kỹ thuật
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Quy Trình Làm Việc Chuyên Nghiệp 6 Bước
          </h1>
          <p className="text-slate-600 dark:text-zinc-400">
            Quy trình kỹ thuật được nghiên cứu kỹ lưỡng để đảm bảo bản in của quý khách luôn sắc nét nhất và kéo dài tối đa tuổi thọ thiết bị.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900/30 border border-slate-200/50 dark:border-zinc-800/80 rounded-xl p-6 relative hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute top-4 right-6 text-4xl font-black text-indigo-500/10 dark:text-indigo-500/5 select-none">
                {step.step}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits section on process */}
        <div className="mt-16 bg-white dark:bg-zinc-900/30 border border-slate-200 dark:border-zinc-800/80 rounded-2xl p-8 max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Tại Sao Quy Trình Của Chúng Tôi Lại Đảm Bảo Bản In Sắc Nét?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Vệ sinh mực thải bắt buộc</h4>
                <p className="text-slate-500 text-xs mt-1">Nhiều bên thường bỏ qua bước đổ mực thải làm mực tràn gây lem luốc, đen góc bản in.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Đo lường định lượng chính xác</h4>
                <p className="text-slate-500 text-xs mt-1">Đổ vừa đủ khối lượng của từng dòng máy in giúp tránh hiện tượng quá tải phễu mực hoặc mờ sương.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Kiểm tra tính tương thích</h4>
                <p className="text-slate-500 text-xs mt-1">Sử dụng mực nạp đúng mã hạt mài mòn từ nhà sản xuất, hạn chế hao mòn tối đa trống in.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Theo dõi tình trạng hộp mực</h4>
                <p className="text-slate-500 text-xs mt-1">Báo cáo trung thực số lần đổ mực và chất lượng hao mòn để khách hàng đưa ra quyết định thay cartridge kịp thời.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-indigo-600 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-indigo-600/10">
          <div>
            <h3 className="text-xl font-bold">Quy trình chuyên nghiệp - Phục vụ tức thì!</h3>
            <p className="text-indigo-100 text-sm mt-1">Kỹ thuật viên túc trực của chúng tôi đã sẵn sàng phục vụ bạn trong 15-30 phút.</p>
          </div>
          <a
            href="tel:0984399119"
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className: "bg-white hover:bg-slate-100 text-indigo-700 font-bold px-6 py-3 rounded-full flex items-center gap-2 shrink-0 shadow-lg",
            })}
          >
            <Phone className="w-4 h-4" />
            0984.399.119
          </a>
        </div>
      </div>
    </div>
  );
}
