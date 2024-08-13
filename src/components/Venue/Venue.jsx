import venue1 from "/assets/venue/venue1.png"
import venue2 from "/assets/venue/venue2.png"
import icon from "/assets/Icon.png"
import Button from "../Button/Button"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

export default function Venue() {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: false,
            mirror: true,
            anchorPlacement: 'top-bottom',
        })
    }, [])

    return (
        <div className="w-full mt-5 lg:mt-32">
            <div className="mt-5 container w-full flex flex-col md:flex-row lg:flex-row">
                <div className="flex justify-start w-full relative">
                    <div>
                        <h1 className="section-tittle-light">
                            Explore Beautiful Venues
                        </h1>
                        <img data-aos="fade-right" src={venue1} alt="" className="mt-5 h-[85%] w-[230px] lg:w-[450px]" />
                    </div>
                    <div data-aos="fade-left" className='absolute bottom-[20%] left-[100px] lg:left-[300px] bg-white p-4 w-fit rounded-2xl'>
                        <div className='flex flex-col text-left'>
                            <p className="text-gray-500">Venue : 1</p>
                            <p className='text-[20px] lg:text-[24px] font-semibold'>KEMPINSKI HOTEL INDONESIA</p>
                            <div className="flex gap-2 items-center">
                                <p className='text-[12px] lg:text-base font-medium text-gray-600'>Jakarta, Indonesia</p>
                                <img src={icon} alt="" width={25} height={25} className="bg-primaryColor rounded-full p-1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end w-full relative justify-end">
                    <img data-aos="fade-left" src={venue2} alt="" className="w-[230px] lg:w-[450px] h-full" />
                    <div data-aos="fade-right" className='absolute bottom-[40%] lg:top-[30%] right-[100px] lg:right-[250px] bg-white p-4 w-fit rounded-2xl h-fit'>
                        <div className='flex flex-col text-left'>
                            <p className="text-gray-500">Venue : 2</p>
                            <p className='text-[20px] lg:text-[24px] font-semibold'>REGAELE CONVENTION HALL</p>
                            <div className="flex gap-2 items-center">
                                <p className='text-[12px] lg:text-base font-medium text-gray-600'>Jakarta, Indonesia</p>
                                <img src={icon} alt="" width={25} height={25} className="bg-primaryColor rounded-full p-1" />
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="mt-5 w-[65%] lg:w-[75%] text-left h-fit">
                        <p className="section-parag-light">Explore new ideas at astoundingly beautiful venues. Attend Tech Startup Conferences and meet new brilliant minds from all over the world.</p>
                    </div>
                </div>

            </div>
        </div>
    )

}