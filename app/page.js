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

              <button
                className="btn btn-primary sd:btn-md xz:btn-sm rounded-none text-white mt-8 uppercase"
                onClick={() => handleOrderClick('Получить консультацию')}
              >
                Получить консультацию
              </button>
            </div>

            <div className='absolute sd:right-0 xz:-right-12 xz:-left-14 sd:left-auto z-0 sd:top-0 xz:top-10'>
              <Image
                src='/svg/fon.svg'
                alt='Разработка сайтов - фоновое изображение'
                width={1100} height={1100}
                className=""
                
              />
            </div>
            <div className='absolute sd:right-20 xz:right-8 z-10 sd:bottom-1/4 xz:-top-3'>
              <Image
                src='/fon/fon.webp'
                alt='Создание сайтов - фоновое изображение'
                width={650} height={650}
                loading="eager"
              />
            </div>
          </section>
        </div>
      </div>
      <section className='xz:pb-20 sd:pb-28 pt-10 bg-primary'>
        <div className='container mx-auto text-center'>
          <h3 className='sd:text-5xl xz:text-3xl uppercase text-white/90'>
            Цена создания сайта
          </h3>
          <p className='mt-6 sd:text-base xz:text-sm text-white/75 font-light sd:block xz:hidden'>
            Создание сайта зависит от нескольких ключевых факторов, включая количество страниц, тип товаров или услуг, а также требования к дизайну и функционалу. От правильного планирования и разработки контента до оптимизации для поисковых систем – каждый этап играет важную роль в создании уникального и эффективного веб-проекта.
          </p>
          <div className='bg-white flex sd:flex-row xz:flex-col py-10 sd:mt-5 xz:mt-10 justify-evenly'>
            <div className=''>
              <div className='border-b border-primary h-32'>
                <div className='px-4'>
                  <h4 className='uppercase font-semibold text-gray-600'>
                    Одностраничный сайт
                  </h4>
                  <p className='font-bold mt-7 sd:text-6xl xz:text-5xl text-primary'>
                    <span className="">от</span>  350 BYN
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
            <div className='sd:mt-0 xz:mt-20'>
              <div className='border-b border-primary h-32'>
                <div className='px-4'>
                  <h4 className='uppercase font-semibold text-gray-600'>
                    Многостраничный сайт
                  </h4>
                  <p className='font-bold mt-7 sd:text-6xl xz:text-5xl text-primary'>
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
            <div className='sd:mt-0 xz:mt-20'>
              <div className='border-b border-primary h-32'>
                <div className='px-4'>
                  <h4 className='uppercase font-semibold text-gray-600'>
                    Интернет-магазин
                  </h4>
                  <p className='font-bold mt-7 sd:text-6xl xz:text-5xl text-primary'>
                    <span className="">от</span>  1499 BYN
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
