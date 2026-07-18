import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Xuân Thành Photocopy | Sửa Chữa & Đổ Mực Máy In Tại Hà Nội",
    template: "%s | Xuân Thành Photocopy",
  },
  description: "Xuân Thành chuyên đổ mực máy in, sửa chữa máy photocopy tại nhà Hà Nội. Phục vụ nhanh 15-30 phút, linh kiện chính hãng, bảo hành dài hạn, xuất hóa đơn VAT.",
  keywords: [
    "đổ mực máy in",
    "đổ mực máy in hà nội",
    "sửa máy in tại nhà",
    "sửa máy photocopy tại hà nội",
    "sửa chữa máy photocopy",
    "cho thuê máy photocopy",
    "đổ mực máy photocopy",
    "sửa máy photocopy cầu giấy",
    "sửa máy photocopy đống đa",
    "sửa máy photocopy thanh xuân",
    "sửa máy in hà nội",
    "nạp mực máy in"
  ],
  authors: [{ name: "Xuân Thành Photocopy" }],
  creator: "Xuân Thành Photocopy",
  publisher: "Xuân Thành Photocopy",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://xuanthanhphotocopy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Xuân Thành Photocopy | Sửa Chữa & Đổ Mực Máy In Tại Hà Nội",
    description: "Xuân Thành chuyên đổ mực máy in, sửa chữa máy photocopy tại nhà Hà Nội. Phục vụ nhanh 15-30 phút, linh kiện chính hãng, bảo hành dài hạn, xuất hóa đơn VAT.",
    url: "https://xuanthanhphotocopy.com",
    siteName: "Xuân Thành Photocopy",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/xuan_thanh.jpg",
        width: 800,
        height: 600,
        alt: "Kỹ thuật viên sửa chữa máy photocopy Xuân Thành",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xuân Thành Photocopy | Sửa Chữa & Đổ Mực Máy In Tại Hà Nội",
    description: "Xuân Thành chuyên đổ mực máy in, sửa chữa máy photocopy tại nhà Hà Nội. Phục vụ nhanh 15-30 phút, linh kiện chính hãng, bảo hành dài hạn, xuất hóa đơn VAT.",
    images: ["/xuan_thanh.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${roboto.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Xuân Thành Photocopy",
              "image": "https://xuanthanhphotocopy.com/hero_repair.png",
              "@id": "https://xuanthanhphotocopy.com/#localbusiness",
              "url": "https://xuanthanhphotocopy.com",
              "telephone": "0988732433",
              "priceRange": "80.000đ - 450.000đ",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "175 Trần Quốc Vượng",
                "addressLocality": "Cầu Giấy",
                "addressRegion": "Hà Nội",
                "postalCode": "100000",
                "addressCountry": "VN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 21.0360,
                "longitude": 105.7950
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "08:00",
                "closes": "21:00"
              },
              "areaServed": [
                { "@type": "AdministrativeArea", "name": "Cầu Giấy" },
                { "@type": "AdministrativeArea", "name": "Đống Đa" },
                { "@type": "AdministrativeArea", "name": "Thanh Xuân" },
                { "@type": "AdministrativeArea", "name": "Hà Đông" },
                { "@type": "AdministrativeArea", "name": "Ba Đình" },
                { "@type": "AdministrativeArea", "name": "Hoàn Kiếm" },
                { "@type": "AdministrativeArea", "name": "Hoàng Mai" },
                { "@type": "AdministrativeArea", "name": "Hai Bà Trưng" },
                { "@type": "AdministrativeArea", "name": "Tây Hồ" },
                { "@type": "AdministrativeArea", "name": "Nam Từ Liêm" },
                { "@type": "AdministrativeArea", "name": "Bắc Từ Liêm" },
                { "@type": "AdministrativeArea", "name": "Mỹ Đình" }
              ]
            })
          }}
        />
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
