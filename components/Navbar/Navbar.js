import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./Navbar.scss";


function Navbar({ isSmall = false }) {
    const [navState, setNavState] = useState(false);
    const pathName = usePathname();
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [hash, setHash] = useState("");

    const handleLogout = async () => {
        await logout();
        console.log("Logged out ", user);
        window.location.reload();
    };

    useEffect(() => {
        setNavState(false);
    }, [pathName]);
    useEffect(() => {
        if (window.innerWidth <= 960) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }

        window.addEventListener("hashchange", () => {
            setHash(window.location.hash);
        });
        return () => {
            window.removeEventListener("hashchange", () => { });
        };
    });

    return (
        <nav
            className={`NavbarWrapper ${isSmallScreen ? "NavbarWrapper--small" : ""}`}
        >
            <div className="NavbarContainer">
                <div className="NavbarContainer__AlwaysOnTop">
                    <div className="NavbarContainer__Logo">
                        <Link href="/" aria-label="Go to Home Page">
                            <Image
                                src='/Images/TedX_logo.png'
                                alt="TedX Logo"
                                width={isSmall ? 50 : 250}
                                height={isSmall ? 40 : 40}
                                priority
                            />
                        </Link>
                    </div>
                    {isSmallScreen && (
                        <button
                            className="NavbarContainer__Hamburger"
                            aria-controls="Primary Navigation Menu"
                            aria-expanded={navState}
                            onClick={() => setNavState(!navState)}
                        >
                            <svg
                                stroke="red"
                                fill="none"
                                className="NavbarContainer__Hamburger--svg"
                                viewBox="-10 -10 120 120"
                                width="40"
                            >
                                <path
                                    className="NavbarContainer__Hamburger--line"
                                    style={{
                                        strokeWidth: "10",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                    }}
                                    d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
                                ></path>
                            </svg>
                        </button>
                    )}
                </div>
                <div className="NavbarContainer__Menu">
                    <ul
                        className={`NavbarContainer__Menu--list ${navState ? "NavbarContainer__Menu--list-open" : ""
                            }`}
                    >
                        <li
                            className={`${pathName === "/"
                                ? "NavbarContainer__Menu--list-activeItem-1"
                                : "NavbarContainer__Menu--list-item-1"
                                }`}
                        >
                            <Link style={{color : "white"}} href="/">Home</Link>
                        </li>
                        <li 
                            className={`${pathName === "/events"
                                ? "NavbarContainer__Menu--list-activeItem-2"
                                : "NavbarContainer__Menu--list-item-2"
                                }`}
                        >
                            <Link style={{color : "white"}} href="/">About Us</Link>
                        </li>
                        <li 
                            className={`${pathName === "/events"
                                ? "NavbarContainer__Menu--list-activeItem-3"
                                : "NavbarContainer__Menu--list-item-3"
                                }`}
                        >
                            <Link style={{color : "white"}} href="/">Our Speakers</Link>
                        </li>
                        <li
                            className={`${pathName === "/gallery"
                                ? "NavbarContainer__Menu--list-activeItem-4"
                                : "NavbarContainer__Menu--list-item-4"
                                }`}
                        >
                            <Link style={{color : "white"}} href="/">Sponsors</Link>
                        </li>
                        <li
                            className={`${pathName === "/events"
                                ? "NavbarContainer__Menu--list-activeItem-5"
                                : "NavbarContainer__Menu--list-item-5"
                                }`}
                        >
                            <Link style={{color : "white"}} href="/">Register</Link>
                        </li>

                        <li
                            className={`${pathName === "/contact"
                                ? "NavbarContainer__Menu--list-activeItem-6"
                                : "NavbarContainer__Menu--list-item-6"
                                }`}
                        >
                            <Link style={{color : "white"}} href="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="NavbarContainer__topRightLogo">
                    <Link href="/" aria-label="Go to Home Page">
                        <Image
                            src='/Images/kSmall.png'
                            alt="kSmall Logo"
                            width={isSmall ? 90 : 70}
                            height={isSmall ? 40 : 60}
                            priority
                        />
                    </Link>
                    </div>
            </div>
        </nav>
    );
}

export default Navbar;
