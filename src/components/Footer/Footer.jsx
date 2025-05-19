import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className=" p-10 bg-base-200 text-base-content">
            <div className="footer max-w-6xl mx-auto">
                <aside>
                    <h2 className="text-3xl">CareerHub</h2>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                    <div className="flex gap-3">
                        <FaFacebook className="text-3xl"></FaFacebook>
                        <FaTwitter className="text-3xl"></FaTwitter>
                        <FaSquareInstagram className="text-3xl"></FaSquareInstagram>
                    </div>
                </aside>
                <nav>
                    <header className="footer-title">Product</header>
                    <a className="link link-hover">Prototype</a>
                    <a className="link link-hover">Plans & Pricing</a>
                    <a className="link link-hover">Customers</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Work</a>
                    <a className="link link-hover">Latest News</a>
                    <a className="link link-hover">Careers</a>
                </nav>
                <nav>
                    <header className="footer-title">Support</header>
                    <a className="link link-hover">Help Desk</a>
                    <a className="link link-hover">Sales</a>
                    <a className="link link-hover">Become a Partner</a>
                    <a className="link link-hover">Developers</a>
                </nav>
                <nav>
                    <header className="footer-title">Contact</header>
                    <a className="link link-hover">524 Broadway , NYC</a>
                    <a className="link link-hover">+1 777 - 978 - 5570</a>

                </nav>
            </div>
            <div className="border-b-2 mt-6 mb-8"></div>
            <section className="flex justify-between">
                <p>@2023 CareerHub. All Rights Reserved</p>
                <p>Powered by CareerHub</p>
            </section>
        </footer>
    );
};

export default Footer;