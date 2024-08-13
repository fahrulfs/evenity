import { Link } from "react-router-dom";
import logo2 from "/assets/logo2.png";
import app1 from "/assets/app1.png";
import app2 from "/assets/app2.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full">
            {/* footer top */}
            <div className="w-full p-6">
                <div className="container py-4 bg-footerColor  rounded-2xl mt-10 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
                    {/* company info */}
                    <div className="md:w-[400px]">
                        <Link to="/">
                            <img src={logo2} alt="" />
                        </Link>
                        <p className="section-parag-dark my-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                        <div className="flex items-center gap-6">
                            <FaFacebookF className="w-5 h-5 cursor-pointer text-white" />
                            <FaTwitter className="w-5 h-5 cursor-pointer text-white" />
                            <FaLinkedinIn className="w-5 h-5 cursor-pointer text-white" />
                            <FaInstagram className="w-5 h-5 cursor-pointer text-white" />
                        </div>
                        <div className="flex flex-col items-start gap-2 mt-3">
                            <img src={app1} alt="" className="w-[120px] h-[30px]" />
                            <img src={app2} alt="" className="w-[120px] h-[30px]" />
                        </div>
                    </div>

                    {/* Catalog */}
                    <div className="text-white">
                        <h4 className="font-semibold mb-3">EVENTNITY</h4>
                        <div className="space-y-2 text-white">
                            <Link to="/" className="text-sm block ">
                                Start Fo Free
                            </Link>
                            <Link to="/" className="text-sm block ">
                                Login
                            </Link>
                            <Link to="/" className="text-sm block ">
                                Pricing
                            </Link>
                        </div>
                    </div>

                    {/* CUSTOMER SERVICES */}
                    <div className="text-white">
                        <h4 className="font-semibold mb-3">FEATURES</h4>
                        <div className="space-y-2">
                            <Link to="/" className="text-sm block ">
                                Payment Integration
                            </Link>
                            <Link to="/" className="text-sm block ">
                                Newstlatter
                            </Link>
                            <Link to="/" className="text-sm block ">
                                Email Marketing
                            </Link>
                            <Link to="/" className="text-sm block ">
                                QR Code Ticketing
                            </Link>
                            <Link to="/" className="text-sm block ">
                                Event Hosting
                            </Link>
                        </div>
                    </div>

                    {/* ABOUT US */}
                    <div className="text-white">
                        <h4 className="font-semibold mb-3">COMPANY</h4>
                        <div className="space-y-2">
                            <Link to="/" className="text-sm block ">
                                For Bussines
                            </Link>
                            <Link to="/" className="text-sm block ">
                                About Us
                            </Link>
                            <Link to="/" className="text-sm block ">
                                Blog
                            </Link>
                            <Link to="/" className="text-sm block ">
                                Careers
                            </Link>
                            <Link to="/" className="text-sm block ">
                                Event
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
