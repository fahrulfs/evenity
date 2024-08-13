import { useEffect, useState } from "react"
import Button from '../Button/Button'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Partner() {

    const [Partners, setPartners] = useState([])

    useEffect(() => {
        async function partner() {
            const res = await fetch('/partner.json')
            const data = await res.json()
            setPartners(data)
        }
        partner()
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
            <div className="container w-full mt-20">
                <h1 className="section-tittle-light text-center mt-5">Our Partners</h1>
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-10 mt-5">
                    {Partners.map((item) => (
                        <div data-aos="fade-up" key={item.id} className="w-full flex justify-center shadow-md items-center p-5 bg-gray-100 rounded-2xl cursor-pointer hover:bg-gray-300 duration-150">
                        <img src={item.image} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}
