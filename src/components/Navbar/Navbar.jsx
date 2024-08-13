import React, { useState, useEffect } from 'react';
import Logo from '/assets/logo.png';
import { FaBars } from 'react-icons/fa6';
import { motion } from "framer-motion";
import "./Navbar.scss";
import { FaTimes } from 'react-icons/fa';

const NavLinks = [
    { id: 0, navTitle: "home", path: "#" },
    { id: 1, navTitle: "about", path: "/about" },
    { id: 2, navTitle: "event", path: "#" },
    { id: 3, navTitle: "resource", path: "#" },
    { id: 4, navTitle: "helpdesk", path: "#" }
];

const Navbar = () => {
    // show navbar when scroll up - hide when scroll down
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // mobileview
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    // scrolling nav change bg color
    const [isScrolled, setIsScrolled] = useState(false);

    const navbarVisibility = () => {
        if (window.scrollY > lastScrollY && window.scrollY > 0) {
            setShow(false);
            setIsScrolled(true);
        } else {
            setShow(true);
            setIsScrolled(false);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', navbarVisibility);
        return () => {
            window.removeEventListener('scroll', navbarVisibility);
        };
    }, [lastScrollY]);

    const hideNavItemsVariant = {
        opened: {
            opacity: 0,
            y: "-100%",
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        closed: {
            opacity: 1,
            y: "0%",
            transition: {
                delay: 1.1,
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    const mobileMenuVariant = {
        opened: {
            y: "0%",
            transition: {
                delay: 0.15,
                duration: 1.1,
                ease: [0.74, 0, 0.19, 1.02]
            }
        },
        closed: {
            y: "-100%",
            transition: {
                delay: 0.35,
                duration: 0.63,
                ease: [0.74, 0, 0.19, 1.02]
            }
        }
    };

    const fadeInVariant = {
        opened: {
            opacity: 1,
            transition: {
                delay: 0.5
            }
        },
        closed: { opacity: 0 }
    };

    const ulVariant = {
        opened: {
            transition: {
                delayChildren: 1,
                staggerChildren: 0.18
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.06,
                staggerDirection: -1
            }
        }
    };

    const liVariant = {
        opened: {
            opacity: 1,
            y: "0%",
            transition: {
                duration: 0.65,
                ease: "easeOut"
            }
        },
        closed: {
            opacity: 0,
            y: "100%",
            transition: {
                duration: 0.25,
                ease: "easeInOut"
            }
        }
    };

    const fadeInStart = { opacity: 0 };
    const fadeInEnd = { opacity: 1 };
    const fadeInTransition = { duration: 0.5 };

    return (
        <>
            <main className=''>
                <motion.nav
                    className={`px-6 md:px-8 lg:px-12 w-full top-0 left flex justify-between z-50 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'backdrop-blur-md bg-white/50' : 'backdrop-blur-md bg-white/50 shadow-md lg:h-fit'}`}
                    initial="closed"
                    animate={mobileNavOpen ? "opened" : "closed"}
                >
                    <div className="flex items-center justify-between p-4 w-full">
                        <motion.img variants={hideNavItemsVariant} src={Logo} alt="logo" />
                        <div className='hidden lg:flex justify-center gap-3'>
                            <ul className='flex gap-3'>
                                {NavLinks.map(NavLink => (
                                    <li key={NavLink.id} className='capitalize text-secondFont section-parag-light text-primaryColor hover:font-semibold px-2 py-1 rounded-md font-bold duration-200 cursor-pointer'>
                                        <a href={NavLink.path}>{NavLink.navTitle}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:hidden">
                            <motion.div
                                variants={hideNavItemsVariant}
                                onClick={() => setMobileNavOpen(true)}
                            >
                                <FaBars className='h-6 w-6' />
                            </motion.div>
                        </div>
                    </div>
                    <motion.div variants={mobileMenuVariant} className="mobile-menu fixed inset-0 bg-primaryColor flex flex-col items-center justify-center">
                        <motion.button
                            variants={fadeInVariant}
                            onClick={() => setMobileNavOpen(false)}
                            className="text-white mb-4"
                        >
                            <FaTimes className='w-6 h-6 mt-2' />
                        </motion.button>
                        <motion.ul variants={ulVariant} className="text-white text-center">
                            {NavLinks.map(NavLink => (
                                <motion.li key={NavLink.id} whileTap={{ scale: 0.95 }}>
                                    <motion.div variants={liVariant} className="my-2">
                                        {NavLink.navTitle}
                                    </motion.div>
                                </motion.li>
                            ))}
                        </motion.ul>
                        <motion.div variants={fadeInVariant} className="contact text-white mt-4">
                            <h5>+852 5650 2233</h5>
                            <h5>hi@designagency.com</h5>
                        </motion.div>
                    </motion.div>
                </motion.nav>

                <motion.div
                    initial={fadeInStart}
                    animate={fadeInEnd}
                    transition={fadeInTransition}
                    className="img-container">
                </motion.div>
            </main>
        </>
    );
}

export default Navbar;



