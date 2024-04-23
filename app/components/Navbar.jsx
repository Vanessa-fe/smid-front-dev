"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo-smartphone-id.jpg";
import Hamburger from "./Hamburger.svg";
import Croix from "./xmark-solid.svg";
import {useState} from "react";

export default function Navbar() {
    const [isClick, setisClick] = useState(false);
    const toggleNavbar = () => {
        setisClick(!isClick);
    };
    return (
        <>
            <nav>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">

                            <div className="navLogo flex-shrink-0">
                                <Link href="/" aria-label="Page d'accueil du site">
                                    <Image
                                        src={Logo}
                                        alt=""
                                        width={200}
                                        href="/"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <div className="flex items-center space-x-4">
                                <Link className="p-2" href="https://www.smartphone-id.com/photos-identite-en-ligne/"
                                      target="_blank">Home</Link>

                                <Link className="p-2" href="https://www.smartphone-id.com/photo-identite-bebe/"
                                      target="_blank">Services</Link>

                                <Link className="p-2" href="https://www.smartphone-id.com/e-photo-permis-conduire/"
                                      target="_blank">About</Link>

                                <Link className="p-2" href="https://www.smartphone-id.com/code-ephoto-titre-de-sejour/"
                                      target="_blank">Contact</Link>
                            </div>
                        </div>

                        <div className="mobile-menu">
                            <button aria-label="toggle button" aria-expanded="false" id="menu-btn"
                                    className="btn-menu"
                                    onClick={toggleNavbar}>
                                {isClick ? (
                                    <Image
                                        src={Croix}
                                        alt=""
                                        className="h-6 w-6"
                                        width={32}
                                        height={32}
                                    />
                                ) : (
                                    <Image
                                        src={Hamburger}
                                        alt=""
                                        className="h-6 w-6"
                                    />
                                )}
                            </button>

                        </div>

                    </div>
                    {isClick && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link className="lien-mobile"
                                      href="https://www.smartphone-id.com/photos-identite-en-ligne/"
                                      target="_blank">Photo d'identité en
                                    ligne</Link>

                                <Link className="lien-mobile" href="https://www.smartphone-id.com/photo-identite-bebe/"
                                      target="_blank">Photo d'identité de
                                    bébé</Link>

                                <Link className="lien-mobile"
                                      href="https://www.smartphone-id.com/e-photo-permis-conduire/"
                                      target="_blank">ePhoto permis de
                                    conduire</Link>

                                <Link className="lien-mobile"
                                      href="https://www.smartphone-id.com/code-ephoto-titre-de-sejour/" target="_blank">ePhoto
                                    titre de
                                    séjour</Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}
