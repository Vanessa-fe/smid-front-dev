import FooterLogo from "./Logo.svg";
import AppStore from "./AppStore-vector.svg";
import PlayStore from "./Gstore-vector.svg";
import QRcodeApple from "./Layer_1.svg";
import QRcodeGoogle from "./Layer_1 (1).svg";
import Youtube from "./Icon_awesome-youtube.svg";
import Facebook from "./Icon_awesome-facebook-f.svg";
import Instagram from "./Icon_awesome-instagram.svg";
import LinkedIn from "./Icon_awesome-linkedin-in.svg"
import Link from "next/link";
import Image from "next/image";

export default function footer() {

    return (
        <>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-neutral-900">

                <div className="flex items-center">

                    <div className="w-full">

                        <div className="partie1 md:w-full md:grid md:grid-cols-2">
                            <div
                                className="footerLogo items-center justify-center md:flex md:col-span-2">
                                <Link className="grid md:grid p-2" href="/" aria-label="Page d'accueil du site">
                                    <Image
                                        className=""
                                        src={FooterLogo}
                                        alt=""
                                        width={200}
                                        href="/"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>
                            <div className="menuLangue md:col-end-7 md:col-span-2 ">
                                <button>
                                    Choisir la langue
                                </button>
                            </div>
                        </div>

                        <div className="partie2 md:h-21">

                            <div className="">
                                <div className="bouttonPhoto md:my-2">
                                    <button>
                                        Faire la photo
                                    </button>
                                </div>
                                <div className="reseauSociaux">
                                    <div className="logoReseaux md:my-2">
                                        <div className="ellipse">
                                            <Link href="/"
                                                  aria-label="Page de téléchargement Apple Store">
                                                <Image
                                                    src={Youtube}
                                                    alt=""
                                                    href="/"
                                                    aria-hidden="true"
                                                />
                                            </Link>
                                        </div>
                                        <div className="ellipse">
                                            <Link href="/" aria-label="Page de téléchargement Apple Store">
                                                <Image
                                                    src={Facebook}
                                                    alt=""
                                                    href="/"
                                                    aria-hidden="true"
                                                />
                                            </Link>
                                        </div>
                                        <div className="ellipse">
                                            <Link href="/" aria-label="Page de téléchargement Apple Store">
                                                <Image
                                                    src={Instagram}
                                                    alt=""
                                                    href="/"
                                                    aria-hidden="true"
                                                />
                                            </Link>
                                        </div>
                                        <div className="ellipse">
                                            <Link href="/" aria-label="Page de téléchargement Apple Store">
                                                <Image
                                                    src={LinkedIn}
                                                    alt=""
                                                    href="/"
                                                    aria-hidden="true"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <p className="m-4 md:text-center">
                                        Découvrez les dernières informations sur les documents d’identité et les visas.
                                    </p>
                                </div>
                            </div>

                            <div className="md:content-center ">
                                <div className="SiteMapList">
                                    <ul className="md:place-content-start">
                                        <li className="">
                                            <Link href="https://www.smartphone-id.com/photos-identite-en-ligne/"
                                                  target="_blank">Blog</Link>
                                        </li>
                                        <li className="">
                                            <Link href="https://www.smartphone-id.com/photo-identite-bebe/"
                                                  target="_blank">À propos de nous</Link>
                                        </li>
                                        <li className="">
                                            <Link href="https://www.smartphone-id.com/e-photo-permis-conduire/"
                                                  target="_blank m-0">FAQ</Link>
                                        </li>
                                        <li className="">
                                            <Link href="https://www.smartphone-id.com/code-ephoto-titre-de-sejour/"
                                                  target="_blank">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="md:grid md:grid-rows-2">
                                <div className="applis md:text-left md:content-center md:p-0">
                                    <h1 className="font-bold">Téléchargez l’application</h1>
                                    <p>
                                        Suivez vos commandes et profitez d’encore plus de fonctionnalités avec
                                        l’application
                                        Smartphone iD.
                                    </p>
                                </div>
                                <div className="md:grid md:grid-cols-3">
                                    <div className="logoStore">
                                        <Link href="/" aria-label="Page de téléchargement Apple Store">
                                            <Image
                                                src={AppStore}
                                                alt=""
                                                width={200}
                                                href="/"
                                                aria-hidden="true"
                                            />
                                        </Link>
                                        <Link href="/" aria-label="Page de téléchargement Google Store">
                                            <Image
                                                src={PlayStore}
                                                alt=""
                                                width={200}
                                                href="/"
                                                aria-hidden="true"
                                            />
                                        </Link>
                                    </div>
                                    <div className="hidden md:flex">
                                        <Image
                                            className="md:p-2"
                                            src={QRcodeApple}
                                            alt=""
                                            width={100}
                                            href="/"
                                            aria-hidden="true"
                                        />
                                        <Image
                                            className="md:p-2"
                                            src={QRcodeGoogle}
                                            alt=""
                                            width={100}
                                            href="/"
                                            aria-hidden="true"
                                        />
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="adresses ">
                            <ul className="md:py-4">
                                <li>
                                    <h1>Smartphone iD FRANCE</h1>
                                    <p>38 rue Servan,</p>
                                    <p>75011 Paris, France</p>
                                </li>
                                <li>
                                    <h1>Smartphone iD ESPAGNE</h1>
                                    <p>38 rue Servan,</p>
                                    <p>75011 Paris, Espagne</p>
                                </li>
                                <li>
                                    <h1>Smartphone iD IRLANDE</h1>
                                    <p>38 rue Servan,</p>
                                    <p>75011 Paris, Irlande</p>
                                </li>
                                <li>
                                    <h1>Smartphone iD AFRIQUE</h1>
                                    <p>38 rue Servan,</p>
                                    <p>75011 Paris, Afrique</p>
                                </li>
                            </ul>
                        </div>

                        <div className="separation border"></div>

                        <div className="mentions">
                            <ul className="md:grid md:grid-cols-5 md:w-full md:py-4">
                                <li className="md:justify-self-center">
                                    © 2023 Smartphone iD
                                </li>
                                <li className="md:justify-self-center">
                                    <Link href="https://www.smartphone-id.com/photos-identite-en-ligne/"
                                          target="_blank">Politique de confidentialité</Link>
                                </li>
                                <li className="md:justify-self-center">
                                    <Link href="https://www.smartphone-id.com/photo-identite-bebe/"
                                          target="_blank">Conditions générales d’utilisation</Link>
                                </li>
                                <li className="md:justify-self-center">
                                    <Link href="https://www.smartphone-id.com/e-photo-permis-conduire/"
                                          target="_blank m-0">Mentions légales</Link>
                                </li>
                                <li className="md:justify-self-center">
                                    <Link href="https://www.smartphone-id.com/code-ephoto-titre-de-sejour/"
                                          target="_blank">Cookies</Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
};