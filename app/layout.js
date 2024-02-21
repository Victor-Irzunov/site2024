import Footer from "@/components/footer/Footer";
import "./globals.css";


export const metadata = {
  title: "Создание сайтов в Минске и Беларуси",
  description: "Предоставляем профессиональные услуги по созданию сайтов в Минске и по всей Беларуси. Наша команда специалистов разработает уникальный сайт, соответствующий вашим потребностям и целям бизнеса. Мы гарантируем высокое качество работы, индивидуальный подход к каждому проекту и соблюдение сроков.",
  keywords: "создание сайтов, лендингов, одностраничных сайтов, многостраничных сайтов, Минск, Беларусь, веб-разработка, веб-дизайн, интернет-магазин, корпоративный сайт, разработка веб-приложений, под ключ",
  alternates: {
    canonical: 'https://site2024-one.vercel.app/'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">

      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="Wphm-E5wKW04SLRPjx_8RruLZSGhx_vxEprHvnYPgAE" />
        <meta name="yandex-verification" content="ca1b9c01d34250d4" />
        <script async defer src="https://www.googletagmanager.com/gtag/js?id=AW-11166544233"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11166544233');
              `
          }}
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
