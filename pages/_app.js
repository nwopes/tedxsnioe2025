import "../styles/root/globals.scss";
import App from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import SwiperCore, { Autoplay } from 'swiper';

import { ConfProvider } from "../context/ConfContext";
import Footer from "../components/Footer/Footer";
function MyApp({ Component, pageProps, user }) {
    const getLayout = Component.getLayout || ((page) => page);
    SwiperCore.use([Autoplay])
    return (
        <>
            <ConfProvider>
                <Head>
                    <title>TEDx ShivNadarIOE</title>
                    <meta
                        name="description"
                        content="TEDx Shiv Nadar Insitute of Eminence Annual Conference"
                    />
                </Head>
                <Navbar />
                <Component {...pageProps} />
                {/* <Spons /> */}
                <section className="FooterSection">
                    <Footer />
                </section>
            </ConfProvider>
        </>
    );
}

export default MyApp;