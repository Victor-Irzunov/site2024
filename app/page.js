"use client"
import Modal from "@/components/modal/Modal";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    document.getElementById("my_modal_3").showModal();
  };
  const closeModal = () => {
    document.getElementById("my_modal_3").close();
  };
  return (
    <main className="overflow-hidden max-w-full" style={{ background: 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)' }}>
      <div className='relative min-h-screen'>
        <div className='container mx-auto'>

          <section className="sd:pt-0 xz:pt-10">

            <div className='flex sd:flex-row xz:flex-col items-center sd:justify-between xz:justify-center h-screen' >
              <div className='sd:w-1/2 xz:w-full text-white'>
                <h1 className='sd:text-7xl xz:text-4xl xx:text-5xl font-bold text-shadow'>
                  Создание сайтов в Гродно
                </h1>
                <h2 className='mt-5 sd:text-3xl xz:text-xl font-light sd:pl-2 xz:pl-1'>
                  Продвижение сайтов в Google и Яндекс
                </h2>
                <div className='container mx-auto'>
                  <p className='sd:mt-10 xz:mt-6 font-light sd:pl-2 xz:pl-1 sd:text-justify xz:text-left sd:text-base xz:text-sm'>
                    Мы специализируемся на создании современных и интуитивно понятных сайтов, способствующих увеличению продаж или получению заказов, и помогающих вашему бизнесу выделиться среди конкурентов. <span className="sd:inline xz:hidden">Наша команда профессиональных разработчиков готова воплотить ваши идеи в жизнь, обеспечивая высокий уровень качества и функциональности.</span>
                  </p>
                </div>

                <button
                  className="btn btn-primary  border-none shadow-lg sd:btn-md xz:btn-sm rounded-none text-white mt-8 uppercase"
                  onClick={() => handleOrderClick('Получить консультацию')}
                >
                  Получить консультацию
                </button>
              </div>

              <div className='sd:w-1/2 xz:w-full flex justify-center items-center overflow-hidden sd:mt-0 xz:mt-10'>
                <Image className="" src='/fon/2.webp'
                  width={577} height={433}
                  alt="фоновое изображение - создание сайтов"
                />
              </div>
            </div>

            <div className='text-white sd:-mt-16 xz:mt-4 flex sd:flex-row xz:flex-col sd:text-lg xz:text-base'>
              <p className=''>
                Наш основной сайт:{' '}
                <a href="https://vi-tech.by/"
                  target="_blank"
                  className="underline font-semibold"
                >
                  vi-tech.by  <Image src='/svg/link.svg' className="inline ml-1" alt='Стоимость продвижения' width={20} height={20} />
                </a>
              </p>
              <p className='sd:mt-0 xz:mt-4 sd:ml-5 xz:ml-0'>
                Работы нашей команды:{' '}
                <a href="https://vi-tech.by/portfolio"
                  target="_blank"
                  className="underline font-semibold"
                >
                  Портфолио  <Image src='/svg/link.svg' className="inline ml-1" alt='Стоимость продвижения' width={20} height={20} />
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
      <section className='xz:pb-12 sd:pb-28 pt-10 mt-8'>
        <div className='container mx-auto text-center'>
          <h3 className='sd:text-5xl xz:text-3xl uppercase text-white'>
            Цена создания сайта
          </h3>
          <p className='sd:mt-6 xz:mt-0 sd:text-base xz:text-sm text-white/95 font-light sd:block xz:hidden'>
            Создание сайта зависит от нескольких ключевых факторов, включая количество страниц, тип товаров или услуг, а также требования к дизайну и функционалу. От правильного планирования и разработки контента до оптимизации для поисковых систем – каждый этап играет важную роль в создании уникального и эффективного веб-проекта.
          </p>

          <div className='grid sd:grid-cols-3 xz:grid-cols-1 gap-4 justify-center mt-10 mb-5'>

            <div className='bg-white sd:px-3 xz:px-3 py-7 shadow-xl'>
              <div className='border-b border-primary h-32'>
                <div className='px-4'>
                  <h4 className='uppercase font-semibold text-gray-600'>
                    Одностраничный сайт
                  </h4>
                  <p className='text-sm text-gray-500'>
                    (сайт-визитка, лендинг)
                  </p>
                  <p className='font-bold mt-3 sd:text-4xl lg:text-6xl xz:text-4xl xy:text-5xl text-primary'>
                    <span className="">от</span>  299 BYN
                  </p>
                </div>
              </div>
              <ul className='mt-4 text-black'>
                <li className='mb-2'>
                  <span className="font-semibold">Срок создания </span>
                  <span className="block text-gray-600">
                    3-5 дней
                  </span>
                </li>
                <li className='mb-2'>
                  <span className="font-semibold">Назначение </span>
                  <span className="block text-gray-600">
                    услуги / товары
                  </span>
                </li>
              </ul>
              <button
                className="btn btn-primary text-white rounded-none mt-8 text-xl px-8"
                onClick={() => handleOrderClick('Заказать: Одностраничный сайт')}
              >
                Заказать
              </button>
            </div>


            <div className='sd:mt-0 xz:mt-2 bg-white sd:px-3 xz:px-3 py-7 shadow-xl'>
              <div className='border-b border-primary h-32'>
                <div className='px-4'>
                  <h4 className='uppercase font-semibold text-gray-600'>
                    Многостраничный сайт
                  </h4>
                  <p className='font-bold mt-7 sd:text-4xl lg:text-6xl xz:text-4xl xy:text-5xl text-primary'>
                    <span className="">от</span>  599 BYN
                  </p>
                </div>
              </div>
              <ul className='mt-4 text-black'>
                <li className='mb-2'>
                  <span className="font-semibold">Срок создания </span>
                  <span className="block text-gray-600">
                    от 5 дней
                  </span>
                </li>
                <li className='mb-2'>
                  <span className="font-semibold">Назначение </span>
                  <span className="block text-gray-600">
                    услуги / товары
                  </span>
                </li>
              </ul>
              <button
                className="btn btn-primary text-white rounded-none mt-8 text-xl px-8"
                onClick={() => handleOrderClick('Заказать: Многостраничный сайт')}
              >
                Заказать
              </button>
            </div>
            <div className='sd:mt-0 xz:mt-2 bg-white sd:px-3 xz:px-3 py-7 shadow-xl'>
              <div className='border-b border-primary h-32'>
                <div className='px-4'>
                  <h4 className='uppercase font-semibold text-gray-600'>
                    Интернет-магазин
                  </h4>
                  <p className='font-bold mt-7 sd:text-4xl lg:text-6xl xz:text-4xl xy:text-5xl text-primary'>
                    <span className="">от</span>  1399 BYN
                  </p>
                </div>
              </div>
              <ul className='mt-4 text-black'>
                <li className='mb-2'>
                  <span className="font-semibold">Срок создания </span>
                  <span className="block text-gray-600">
                    от 7 дней
                  </span>
                </li>
                <li className='mb-2'>
                  <span className="font-semibold">Назначение </span>
                  <span className="block text-gray-600">
                    товары
                  </span>
                </li>
              </ul>
              <button
                className="btn btn-primary text-white rounded-none mt-8 text-xl px-8"
                onClick={() => handleOrderClick('Заказать: Интернет-магазин')}
              >
                Заказать
              </button>
            </div>
          </div>

          <div className='xz:mt-4 sd:mt-7 text-left text-white sd:text-xl xz:text-base'>
            <p className=''>
            Стоимость продвижения сайта от 150 BYN{' '}
              <a href="https://vi-tech.by/prodvizhenie-sajta"
                target="_blank"
                className="underline block"
              >
               Подробнее <Image src='/svg/link.svg' className="inline ml-1" alt='Стоимость продвижения' width={20} height={20} />
              </a>
            </p>
          </div>
        </div>
      </section>
      <Modal
        selectedProduct={selectedProduct}
        closeModal={closeModal}
        isFormSubmitted={isFormSubmitted}
        setIsFormSubmitted={setIsFormSubmitted}
      />
    </main>
  );
};
