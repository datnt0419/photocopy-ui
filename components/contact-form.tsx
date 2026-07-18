"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, ShieldAlert } from "lucide-react";

export function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "do-muc", note: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", phone: "", service: "do-muc", note: "" });
    }, 5000);
  };

  return (
    <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
      {/* Ambient blur */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="text-center mb-8 flex flex-col gap-3">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Đặt Lịch Hẹn Ngay</h2>
        <p className="text-slate-500 dark:text-zinc-400 text-sm">
          Điền thông tin của bạn vào mẫu dưới đây. Kỹ thuật viên của chúng tôi sẽ liên hệ lại ngay trong 5 phút!
        </p>
      </div>

      {formSubmitted ? (
        <div className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 p-6 rounded-2xl flex items-center gap-3 animate-in fade-in zoom-in-95">
          <CheckCircle2 className="w-6 h-6 shrink-0 text-emerald-500" />
          <div>
            <h4 className="font-bold">Đăng ký thành công!</h4>
            <p className="text-xs mt-0.5">Chúng tôi đã tiếp nhận yêu cầu. Kỹ thuật viên sẽ điện thoại cho bạn ngay lập tức.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-bold text-slate-600 dark:text-zinc-400 uppercase tracking-wider">
                Họ và Tên <span className="text-rose-500">*</span>
              </label>
              <Input
                id="name"
                required
                placeholder="Nguyễn Văn A"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-slate-50/50 dark:bg-zinc-950/50 border-slate-200 dark:border-zinc-800 h-10 px-3.5"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-xs font-bold text-slate-600 dark:text-zinc-400 uppercase tracking-wider">
                Số Điện Thoại <span className="text-rose-500">*</span>
              </label>
              <Input
                id="phone"
                required
                type="tel"
                placeholder="0984xxxxxx"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-slate-50/50 dark:bg-zinc-950/50 border-slate-200 dark:border-zinc-800 h-10 px-3.5"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="service" className="text-xs font-bold text-slate-600 dark:text-zinc-400 uppercase tracking-wider">
              Dịch Vụ Yêu Cầu
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full h-10 rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-1.5 text-base transition-colors outline-none placeholder:text-slate-400 focus-visible:border-indigo-500 focus-visible:ring-3 focus-visible:ring-indigo-500/20 dark:border-zinc-850 dark:bg-zinc-950/50 text-sm text-slate-800 dark:text-zinc-100"
            >
              <option value="do-muc">Đổ mực máy in/photocopy</option>
              <option value="sua-chua">Sửa chữa máy bị lỗi/kẹt giấy</option>
              <option value="bao-duong">Bảo dưỡng máy văn phòng định kỳ</option>
              <option value="thue-may">Yêu cầu thuê máy photocopy</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="note" className="text-xs font-bold text-slate-600 dark:text-zinc-400 uppercase tracking-wider">
              Ghi Chú (Tên máy in hoặc lỗi gặp phải)
            </label>
            <Textarea
              id="note"
              placeholder="Ví dụ: Máy in Canon 2900 bản in bị mờ hoặc máy photocopy Ricoh bị kẹt giấy liên tục..."
              value={formData.note}
              onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              className="bg-slate-50/50 dark:bg-zinc-950/50 border-slate-200 dark:border-zinc-850 min-h-24 px-3.5 py-2.5"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold h-11 text-base rounded-lg shadow-lg shadow-indigo-600/25 transition-all cursor-pointer"
          >
            Gửi Yêu Cầu Hỗ Trợ
          </Button>
        </form>
      )}

      <div className="mt-8 pt-6 border-t border-slate-100 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-zinc-500">
        <span className="flex items-center gap-1">
          <ShieldAlert className="w-4 h-4 text-emerald-500" />
          Mọi thông tin đều được bảo mật tuyệt đối.
        </span>
        <span className="font-semibold">Hotline hỗ trợ trực tiếp 24/7: 0984.399.119</span>
      </div>
    </div>
  );
}
