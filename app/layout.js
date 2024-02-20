import Footer from "@/components/footer/Footer";
import "./globals.css";


export const metadata = {
  title: "Создание сайтов в Минске и Беларуси",
  description: "Предоставляем профессиональные услуги по созданию сайтов в Минске и по всей Беларуси. Наша команда специалистов разработает уникальный сайт, соответствующий вашим потребностям и целям бизнеса. Мы гарантируем высокое качество работы, индивидуальный подход к каждому проекту и соблюдение сроков.",
  keywords: "создание сайтов, лендингов, Минск, Беларусь, веб-разработка, веб-дизайн, интернет-магазин, корпоративный сайт, разработка веб-приложений, под ключ",
  alternates: {
    canonical: 'https://site2024-one.vercel.app/'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
