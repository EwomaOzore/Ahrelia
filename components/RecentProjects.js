'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import { images } from '@/lib/images'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export default function Page() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return (
        <section className='bg-[#D9D9D9]'>
            <div className='container p-10'>
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    slidesPerView={4}
                    thumbs={{
                        swiper:
                            thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
                    }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className='h-96 w-full rounded-lg'
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex h-full w-full items-center justify-center'>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    className='block h-full w-full object-contain'
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Thumbnail */}
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={12}
                    slidesPerView={8}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className='thumbs mt-3 h-32 w-full rounded-lg'
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <button className='flex h-full w-full items-center justify-center'>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    className='block h-full w-full object-cover'
                                />
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}