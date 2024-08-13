import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import { FaArrowCircleRight } from 'react-icons/fa';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Event() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function eventschedule() {
            const res = await fetch('/eventschedule.json')
            const data = await res.json()
            setEvents(data)
        }
        eventschedule()
    }, [])

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: false,
            mirror: true,
            anchorPlacement: 'top-bottom',
        })
    }, [])

    return (
        <div className="w-full">
            <div className="container w-full">
                <h1 className="section-tittle-light text-center mt-5">Event Schedule</h1>
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                    {events.map((item) => (
                        <div data-aos="fade-up" key={item.id} className="w-full p-2 bg-gray-100 rounded-2xl cursor-pointer hover:bg-gray-300 duration-150">
                            <img src={item.image} alt="" />
                            <div className='flex justify-between items-center'>
                                <h4 className='h4 text-gray-700'>{item.date}</h4>
                                <h4 className='h4 text-gray-700'>{item.time}</h4>
                            </div>
                            <h3 className='h3 text-black font-medium'>{item.title}</h3>
                            <div className='w-full flex justify-between items-center'>
                                <h4 className='h4 text-gray-700'>{item.location}</h4>
                                <FaArrowCircleRight className='text-primaryColor w-5 h-5' />
                            </div>
                        </div>
                    ))}
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='flex justify-center mt-5 w-full'>
                    <Button>View All</Button>
                </div>
            </div>
        </div>
    )
}