import Footer from "@/components/footer/Footer";
import "./globals.css";

export const metadata = {
  title: "Создание сайтов Минск | Разработка и продвижение",
  description: "Предоставляем профессиональные услуги по созданию сайтов в Минске и по всей Беларуси. Наша команда специалистов разработает уникальный сайт, соответствующий вашим потребностям и целям бизнеса. Мы гарантируем высокое качество работы, индивидуальный подход к каждому проекту и соблюдение сроков.",
  keywords: "создание сайтов, лендингов, одностраничных сайтов, многостраничных сайтов, Минск, Беларусь, веб-разработка, веб-дизайн, интернет-магазин, корпоративный сайт, разработка веб-приложений, под ключ",
  alternates: {
    canonical: 'https://vi-tech.site'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">

      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* <meta name="google-site-verification" content="Wphm-E5wKW04SLRPjx_8RruLZSGhx_vxEprHvnYPgAE" /> */}
        <meta name="yandex-verification" content="ca1b9c01d34250d4" />
        {/* <script async defer src="https://www.googletagmanager.com/gtag/js?id=AW-11166544233"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11166544233');
              `
          }}
        /> */}

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(96537385, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
              });
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
