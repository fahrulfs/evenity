import { FaTicket } from "react-icons/fa6";
import Button from "../Button/Button";
import React, { useRef } from "react";


export default function Banner() {

    return (
        <>

            <div className="w-full h-fit lg:h-dvh container">
                <div className="py-4 relative overflow-hidden container h-full lg:h-[500px] w-full mt-20 rounded-lg bg-[url('/assets/banner/banner.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center lg:justify-start">

                    <div className="flex flex-col z-10 lg:w-[70%]">
                        <div className="flex items-center  gap-2 lg:text-left ">
                            <p className="section-parag-dark">
                                Welcome to our ticketing website!
                            </p>
                            <FaTicket className="w-5 h-5 text-whiteColor" />
                        </div>
                        <h1 className="section-tittle-dark mt-5">
                            Where Your Event Dreams Come to Life!
                        </h1>
                        <p className="section-parag-dark mt-5">
                            Not only can you purchase tickets to the hottest events in town, but you can also create your own custom tickets with our easy-to-use platform. Say goodbye to generic tickets and hello to personalized and professional-looking ones that will make your event stand out from the rest.</p>
                        <div className="mt-5">
                            <Button>Explore Event</Button>
                            <FaTicket/>
                        </div>
                    </div>
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-[rgba(48,41,87,0.4)] via-[rgba(34,32,114,0.5)] to-[rgba(8,5,31,0.7)]"></div>
                </div>
            </div>
        </>
    )
}


