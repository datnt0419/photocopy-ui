import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      q: "Giá đổ mực máy in và máy photocopy tại Hà Nội là bao nhiêu?",
      a: "Giá đổ mực dao động tùy thuộc vào loại máy của bạn. Máy in đen trắng văn phòng nhỏ (Canon, HP...) có giá từ 80.000đ - 120.000đ. Với các dòng máy photocopy văn phòng công sở lớn (Ricoh, Toshiba...), đơn giá dao động từ 250.000đ - 350.000đ tùy theo dung tích ống mực. Linh kiện thay thế sẽ được báo giá cụ thể trước khi thực hiện.",
    },
    {
      q: "Bao lâu kỹ thuật viên có mặt tại địa chỉ của tôi?",
      a: "Chúng tôi sở hữu hệ thống kỹ thuật viên trực quận liên tục ở Cầu Giấy, Đống Đa, Thanh Xuân, Hà Đông... Kỹ thuật viên sẽ di chuyển ngay lập tức và có mặt trong vòng 15-30 phút sau khi cuộc gọi được xác nhận tùy theo khoảng cách địa lý.",
    },
    {
      q: "Linh kiện thay thế có được bảo hành không?",
      a: "Có. Tất cả linh kiện thay thế (trống in, gạt mực, lô sấy, lô ép, vỏ sấy...) do Hoàng Hà cung cấp đều được dán tem bảo hành chính hãng. Thời gian bảo hành từ 1 đến 12 tháng tùy thuộc vào chủng loại linh kiện.",
    },
    {
      q: "Cửa hàng có xuất hóa đơn VAT đầy đủ cho công ty không?",
      a: "Có. Chúng tôi hỗ trợ xuất hóa đơn tài chính (VAT) đầy đủ cho các công ty, cơ quan hành chính nhà nước, trường học và doanh nghiệp văn phòng khi thực hiện dịch vụ đổ mực máy photocopy/sửa máy in.",
    },
    {
      q: "Đổ mực nạp nhiều lần có làm hỏng máy photocopy không?",
      a: "Không. Việc đổ mực đúng kỹ thuật và sử dụng mực nạp chính hãng chất lượng cao hoàn toàn không ảnh hưởng tới tuổi thọ của cụm trống hay sấy của máy. Trái lại, quy trình làm sạch mực thừa định kỳ của chúng tôi còn giúp hộp mực của bạn hoạt động bền bỉ hơn.",
    },
    {
      q: "Tôi có thể thuê máy photocopy văn phòng với mức giá như thế nào?",
      a: "Hoàng Hà cung cấp các gói dịch vụ cho thuê máy photocopy Ricoh, Toshiba chất lượng cao cho văn phòng công ty với mức phí chỉ từ 800.000đ/tháng. Gói thuê đã bao gồm toàn bộ chi phí đổ mực, sửa chữa hỏng hóc và bảo dưỡng định kỳ, bạn chỉ cần mua giấy in.",
    },
  ];

  return (
    <div className="py-12 md:py-20 bg-slate-50 dark:bg-zinc-950 transition-colors">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16 flex flex-col gap-4">
          <Badge className="bg-indigo-600/10 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400 w-fit mx-auto rounded-full px-3 py-1 font-semibold uppercase tracking-wider text-xs">
            Giải đáp thắc mắc
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Các Câu Hỏi Thường Gặp
          </h1>
          <p className="text-slate-600 dark:text-zinc-400">
            Tổng hợp các thắc mắc của khách hàng về chi phí, quy trình hỗ trợ và chế độ bảo hành của Hoàng Hà Photocopy.
          </p>
        </div>

        <Accordion className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx + 1}`}
              className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl px-4 py-1"
            >
              <AccordionTrigger className="text-base font-bold text-slate-950 dark:text-zinc-100">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 dark:text-zinc-400 leading-relaxed text-sm">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 bg-white dark:bg-zinc-900/30 border border-slate-200 dark:border-zinc-800/80 rounded-2xl p-8 text-center max-w-2xl mx-auto">
          <h3 className="font-bold text-slate-900 dark:text-white text-lg">Bạn vẫn còn câu hỏi khác?</h3>
          <p className="text-slate-500 text-sm mt-1 mb-6">Liên hệ trực tiếp với bộ phận chăm sóc khách hàng của chúng tôi để được tư vấn thêm.</p>
          <a
            href="tel:0984399119"
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className: "bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 rounded-full inline-flex items-center gap-2 shadow-lg",
            })}
          >
            <Phone className="w-4 h-4" />
            Liên hệ: 0984.399.119
          </a>
        </div>
      </div>
    </div>
  );
}
