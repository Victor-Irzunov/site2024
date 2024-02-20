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

      <section className='pb-20 pt-2'>
        <div className='container mx-auto text-center'>
          <h3 className='sd:text-5xl xz:text-3xl'>
            Цена создания сайта
          </h3>


          <p className='mt-6 sd:text-base xz:text-sm text-gray-600 font-light sd:block xz:hidden'>
            Создание сайта зависит от нескольких ключевых факторов, включая количество страниц, тип товаров или услуг, а также требования к дизайну и функционалу. От правильного планирования и разработки контента до оптимизации для поисковых систем – каждый этап играет важную роль в создании уникального и эффективного веб-проекта.
          </p>


          <div className="overflow-x-auto mt-10">
            <table className="table">
              <thead className="bg-slate-200">
                <tr>
                  <th>Наименование</th>
                  <th>Стоимость</th>
                  <th>Сроки</th>
                  <th className="sd:block xz:hidden">Назначение</th>
                </tr>
              </thead>
              <tbody className="sd:text-base xz:text-xs">
                <tr>

                  <td>Одностраничный сайт (лендинг)</td>
                  <td>от 350 руб.</td>
                  <td>3-5 дней</td>
                  <td className="sd:block xz:hidden">услуги/товар</td>
                </tr>
                <tr>
                  <td>Многостраничный сайт</td>
                  <td>от 599 руб.</td>
                  <td>от 5 дней</td>
                  <td className="sd:block xz:hidden">услуги/товар</td>
                </tr>
                <tr>
                  <td>Интернет-магазин</td>
                  <td>от 1499 руб.</td>
                  <td>от 7 дней</td>
                  <td className="sd:block xz:hidden">товар</td>
                </tr>
              </tbody>
            </table>


          </div>

        </div>
      </section>
    </main>
  );
}
