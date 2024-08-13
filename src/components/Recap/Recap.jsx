import React from "react"
import { motion } from "framer-motion"
import move from "lodash-move"
import { FaArrowDown } from "react-icons/fa"

const CARD_COLORS = ["#fff", "#fff", "#fff"];
const CARD_IMAGES = ["/assets/recap/recap1.jpg", "/assets/recap/recap2.jpg", "/assets/recap/recap3.jpg"]
const CARD_TITLES = ["Event 1 | 28 feb 2022", "Event 2 | 30 juni 2022", "Event 3 | 28 feb 2022"]
const CARD_OFFSET = 10
const SCALE_FACTOR = 0.06

const Recap = () => {
    const initialCards = CARD_COLORS.map((color, index) => ({
        color,
        image: CARD_IMAGES[index],
        title: CARD_TITLES[index],
    }))
    const [cards, setCards] = React.useState(initialCards)

    const moveToEnd = from => {
        setCards(move(cards, from, cards.length - 1))
    }

    return (
        <div className="w-full ">
            <h1 className="section-tittle-light text-center mt-7 md:mt-20 lg:mt-32">Recap event 2022</h1>
            <div style={wrapperStyle} className="container">
                {/* <h1 className="section-tittle-light text-center">Recap event 2022</h1> */}
                <ul style={cardWrapStyle}>
                    {cards.map((card, index) => {
                        const canDrag = index === 0
                        return (
                            <motion.li
                                key={card.color}
                                style={{
                                    ...cardStyle,
                                    backgroundColor: card.color,
                                    height: '100%',
                                    cursor: canDrag ? "grab" : "auto"
                                }}
                                animate={{
                                    top: index * -CARD_OFFSET,
                                    scale: 1 - index * SCALE_FACTOR,
                                    zIndex: CARD_COLORS.length - index
                                }}
                                drag={canDrag ? "y" : false}
                                dragConstraints={{
                                    top: 0,
                                    bottom: 0
                                }}
                                onDragEnd={() => moveToEnd(index)}
                            >
                                <img src={card.image} alt={`Card Image ${index}`} className="w-full h-[85%] object-cover rounded-2xl" />
                                <p className="section-parag-light text-center mt-2 ">{card.title}</p>
                                <div className="w-full justify-center flex mt-2">
                                    <FaArrowDown className="animate-bounce w-5 h-4 text-gray-400" />
                                </div>
                            </motion.li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}
const isMobile = window.innerWidth < 991

const wrapperStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: isMobile ? "80vh" : "100vh"
}

const cardWrapStyle = {
    position: "relative",
    width: "100%",
    height: "500px"
}

const cardStyle = {
    position: "absolute",
    width: "100%",
    height: "500px",
    borderRadius: "30px",
    transformOrigin: "top center",
    listStyle: "none"
}

export default Recap