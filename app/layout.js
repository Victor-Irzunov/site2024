import Footer from "@/components/footer/Footer";
import "./globals.css";

export const metadata = {
  title: "Создание сайтов в Гродно",
  description: "Предоставляем профессиональные услуги по созданию сайтов в Гродно. Наша команда специалистов разработает уникальный сайт, соответствующий вашим потребностям и целям бизнеса. Мы гарантируем высокое качество работы, индивидуальный подход к каждому проекту и соблюдение сроков.",
  keywords: "создание сайтов, заказать сайт, создание интернет магазинов, лендингов, одностраничных сайтов, многостраничных сайтов, Беларусь, веб-разработка, веб-дизайн, интернет-магазин, корпоративный сайт, создать сайт цена, разработка веб-приложений, под ключ, Гродно",
  alternates: {
    canonical: 'https://it-grodno.vercel.app/'
  },
  ogTitle: 'Создание сайтов в Гродно | Разработка и продвижение',
  ogDescription: "Предоставляем профессиональные услуги по созданию сайтов в Гродно. Наша команда специалистов разработает уникальный сайт, соответствующий вашим потребностям и целям бизнеса. Мы гарантируем высокое качество работы, индивидуальный подход к каждому проекту и соблюдение сроков.",
  ogImage: 'my-app/public/image.png',
  twitterTitle: 'Создание сайтов в Гродно | Разработка и продвижение',
  twitterDescription: "Предоставляем профессиональные услуги по созданию сайтов в Гродно. Наша команда специалистов разработает уникальный сайт, соответствующий вашим потребностям и целям бизнеса. Мы гарантируем высокое качество работы, индивидуальный подход к каждому проекту и соблюдение сроков.",
  twitterImage: 'my-app/public/image.png'
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
