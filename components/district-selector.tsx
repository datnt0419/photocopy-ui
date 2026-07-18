"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, ChevronRight } from "lucide-react";

export function DistrictSelector() {
  const [selectedDistrict, setSelectedDistrict] = useState<string>("Cầu Giấy");

  const districts = [
    { name: "Cầu Giấy", hotline: "0984.399.119", address: "Số 26 Ngõ 165 Cầu Giấy" },
    { name: "Đống Đa", hotline: "0984.399.119", address: "Số 12 Chùa Bộc, Đống Đa" },
    { name: "Thanh Xuân", hotline: "0984.399.119", address: "Số 45 Nguyễn Trãi, Thanh Xuân" },
    { name: "Hà Đông", hotline: "0984.399.119", address: "Số 88 Quang Trung, Hà Đông" },
    { name: "Ba Đình", hotline: "0984.399.119", address: "Số 15 Liễu Giai, Ba Đình" },
    { name: "Hoàn Kiếm", hotline: "0984.399.119", address: "Số 5 Hàng Bài, Hoàn Kiếm" },
    { name: "Hoàng Mai", hotline: "0984.399.119", address: "Số 120 Tân Mai, Hoàng Mai" },
    { name: "Hai Bà Trưng", hotline: "0984.399.119", address: "Số 32 Bạch Mai, Hai Bà Trưng" },
    { name: "Tây Hồ", hotline: "0984.399.119", address: "Số 56 Lạc Long Quân, Tây Hồ" },
    { name: "Nam Từ Liêm", hotline: "0984.399.119", address: "Số 99 Lê Đức Thọ, Mỹ Đình" },
    { name: "Bắc Từ Liêm", hotline: "0984.399.119", address: "Số 22 Cổ Nhuế, Bắc Từ Liêm" },
    { name: "Mỹ Đình", hotline: "0984.399.119", address: "Số 15 Nguyễn Cơ Thạch, Mỹ Đình" },
  ];

  const currentDistrictInfo = districts.find((d) => d.name === selectedDistrict);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Info side */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <Badge className="bg-indigo-600/10 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400 w-fit rounded-full px-3 py-1 font-semibold uppercase tracking-wider text-xs">
          Khu vực phục vụ nhanh
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Kỹ Thuật Viên Túc Trực Tại 12 Quận Hà Nội
        </h2>
        <p className="text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
          Với mạng lưới showroom và trạm trực kỹ thuật trải rộng khắp các quận Hà Nội, chúng tôi cam kết có mặt trong vòng 15-30 phút sau cuộc gọi để xử lý sự cố nhanh nhất.
        </p>

        {/* Dynamic district output card */}
        <div className="bg-indigo-600 text-white rounded-2xl p-6 shadow-xl shadow-indigo-600/10 relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 mt-0.5 text-indigo-200 shrink-0" />
            <div>
              <h4 className="font-bold text-lg mb-1">Trạm Trực Quận: {selectedDistrict}</h4>
              <p className="text-xs text-indigo-100 mb-4">{currentDistrictInfo?.address}</p>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg text-sm w-fit font-medium">
                <Phone className="w-4 h-4 animate-pulse" />
                Hotline gọi nhanh: <a href="tel:0984399119" className="underline font-bold">{currentDistrictInfo?.hotline}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid selector side */}
      <div className="lg:col-span-7">
        <h4 className="text-sm font-semibold text-slate-500 dark:text-zinc-400 mb-4 uppercase tracking-wider">
          Chọn quận của bạn để tìm chi nhánh gần nhất:
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {districts.map((d, idx) => {
            const isActive = d.name === selectedDistrict;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedDistrict(d.name)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-600/25 scale-[1.02]"
                    : "bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-indigo-500/50 hover:bg-slate-50 dark:hover:bg-zinc-800"
                }`}
              >
                <span>{d.name}</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "translate-x-0.5" : "text-slate-400"}`} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
