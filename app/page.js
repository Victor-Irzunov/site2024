import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden max-w-full">
      <div className='relative min-h-screen'>
        <div className='container mx-auto'>
          <section className=''>
            <div className='absolute z-20 sd:w-1/2 xz:max-w-full sd:top-1/2 xz:top-2/3 xm:top-full -translate-y-1/2'>
              <h1 className='sd:text-8xl xz:text-4xl font-bold'>
                Создание сайтов
              </h1>
              <h2 className='mt-5 sd:text-3xl xz:text-xl font-light sd:pl-2 xz:pl-1'>
                Удивительные сайты здесь
              </h2>
              <div className='container mx-auto'>
                <p className='sd:mt-10 xz:mt-6 font-light sd:pl-2 xz:pl-1 sd:text-justify xz:text-left sd:text-base xz:text-sm'>
                  Мы специализируемся на создании современных и интуитивно понятных сайтов, способствующих увеличению продаж или получению заказов, и помогающих вашему бизнесу выделиться среди конкурентов. <span className="sd:inline xz:hidden">Наша команда профессиональных разработчиков готова воплотить ваши идеи в жизнь, обеспечивая высокий уровень качества и функциональности.</span>
                </p>
              </div>

              <button className="btn btn-primary sd:btn-md xz:btn-sm rounded-none text-white mt-8 uppercase">
                Получить консультацию
              </button>
            </div>

            <div className='absolute sd:right-0 xz:-right-12 xz:-left-14 sd:left-auto z-0 sd:top-0 xz:top-10'>
              <Image src='/svg/fon.svg' alt='Разработка сайтов - фоновое изображение'
                width={1100} height={1100}
                className=""
              />
            </div>
            <div className='absolute sd:right-20 xz:right-8 z-10 sd:bottom-1/4 xz:-top-3'>
              <Image src='/fon/fon.webp' alt='Создание сайтов - фоновое изображение' width={650} height={650} />
            </div>
          </section>
        </div>
      </div>

      <section className='min-h-screen'>

      </section>
    </main>
  );
}
