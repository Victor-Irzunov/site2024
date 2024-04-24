import Image from "next/image"


const Footer = () => {
	return (
		<footer className="bg-white">
			<div className='container mx-auto'>


				<aside className='pt-8 sd:pb-0 xz:pb-10'>
					<h4 className='font-semibold text-5xl'>
						Контакты
					</h4>

					<div className='sd:text-2xl xz:text-xl mt-8 grid sd:grid-cols-3 xz:grid-cols-1 gap-4'>
						<div className=''>
							<span className="text-primary font-semibold block">
								Телефон
							</span>{' '}
							<a href="tel:80333511597">
								+375 33 351-15-97
							</a>
						</div>



						<div className=''>
							<span className="text-primary font-semibold">
								Наш основной сайт
							</span>{' '}
							<a href='https://vi-tech.by' target='_blank' rel="noreferrer" className='block underline'>
								vi-tech.by
							</a>
						</div>
						<div className=''>
							<span className="text-primary font-semibold">
								Портфолио
							</span>{' '}
							<a href='https://vi-tech.by/portfolio' target='_blank' rel="noreferrer" className='block underline'>
								vi-tech.by/portfolio
							</a>
						</div>
				
						<div className=''>
							<span className="text-primary font-semibold">
								Контакты
							</span>{' '}
							<a href='https://vi-tech.by/kontakty' target='_blank' rel="noreferrer" className='block underline'>
								vi-tech.by/kontakty
							</a>
						</div>

						<div className=''>
							<span className="text-primary font-semibold block">
								Адрес:
							</span>{' '}
							<a href="https://yandex.by/maps/-/CDBHfZYy" target="_blank">
								Минск, ул. К.Туровского, 8
							</a>
						</div>

						<div className=''>
							<span className="text-primary font-semibold block">
								Режим работы
							</span>{' '}
							<p className="">
								Пн-Вс 8:00-20:00
							</p>
						</div>
						<div className=''>
							<span className="text-primary font-semibold block">
								Почта
							</span>{' '}
							<p className="">
								info.contact.vitech@gmail.com
							</p>
						</div>
						<div className=''>
							<span className="text-primary font-semibold">
								Напишите нам:
							</span>{' '}
							<div className='flex mt-2'>

								<a href='https://t.me/Victor_developer' target='_blank' className=''>
									<Image src='/svg/telegram.svg' className="mx-2" alt='Телеграмм для связи' width={30} height={30} />
								</a>

								<a href='viber://chat?number=%2B375333511597' target="_blank" className="">
									<Image src='/svg/viber.svg' className="mx-2" alt='Вайбер для связи' width={30} height={30} />
								</a>
								<a href="https://www.instagram.com/webproduct_developer" target="_blank">
									<Image src='/svg/instagram.svg' className="mx-2" alt='Инстаграмм для связи' width={30} height={30} />
								</a>
							</div>
						</div>
					</div>


				</aside>


			</div>

			<aside className="pt-3 pb-3">
				<div className='container mx-auto text-center'>
					<aside className="border-t pt-2">
						<p className='text-gray-800 xs:text-xs xz:text-[10px] font-light leading-3' >

							Информация на сайте не является публичной офертой и предоставляется исключительно в информационных целях. {' '}
							Copyright © 2024 | Разработка
							<a href='https://vi-tech.by' target='_blank' rel="noreferrer" className='text-sky-500 underline'> VI:TECH</a>.
						</p>
					</aside>
				</div>
			</aside>
		</footer>
	)
}

export default Footer