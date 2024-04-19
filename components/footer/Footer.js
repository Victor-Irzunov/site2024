import Image from "next/image"


const Footer = () => {
	return (
		<footer className="">
			<div className='flex sd:flex-row xz:flex-col'>
				<div className='sd:w-1/2 xz:w-full'>
					<Image src='/fon/fon10.webp' alt='Контакты компании по созданию сайтов' width={1376} height={1080} />
				</div>

				<aside className='pt-8 sd:pl-12 xz:pl-5 sd:pb-0 xz:pb-10'>
					<h4 className='font-semibold text-5xl'>
						Контакты
					</h4>
					<div className='sd:text-2xl xz:text-xl mt-8'>
						<div className=''>
							<span className="text-primary font-semibold">
								Телефон:
							</span>{' '}
							<a href="tel:80333511597">
								+375 33 351-15-97
							</a>
						</div>
					
					
						
						<div className='mt-6'>
							<span className="text-primary font-semibold">
								Наш основной сайт:
							</span>{' '}
							<a href='https://vi-tech.by' target='_blank' rel="noreferrer" className='block underline'>
								vi-tech.by
							</a>
						</div>
						<div className='mt-6 sd:hidden xz:block'>
							<span className="text-primary font-semibold">
								Портфолио:
							</span>{' '}
							<a href='https://vi-tech.by/portfolio' target='_blank' rel="noreferrer" className='block underline'>
								vi-tech.by/portfolio
							</a>
						</div>

						<div className='mt-6'>
							<span className="text-primary font-semibold">
								Адрес:
							</span>{' '}
							<a href="https://yandex.by/maps/-/CDBHfZYy" target="_blank">
								Минск, ул. К.Туровского, 8
							</a>
						</div>

						<div className='mt-6'>
							<span className="text-primary font-semibold">
								Режим работы:
							</span>{' '}
							<p className="">
								Пн-Вс 8:00-20:00
							</p>
						</div>
						<div className='mt-6'>
							<span className="text-primary font-semibold">
								Почта:
							</span>{' '}
							<p className="">
								info.contact.vitech@gmail.com
							</p>
						</div>
						<div className='mt-6'>
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
					<p className='text-gray-600 xz:text-xs sd:text-sm font-light' >
						Copyright © 2024 |
						{' '}Информация на сайте не является публичной офертой и предоставляется исключительно в информационных целях.
					</p>
				</div>
			</aside>
		</footer>
	)
}

export default Footer