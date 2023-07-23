import "../styles/root/globals.scss";
import App from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Spons from "../components/Spons/Spons";
import SwiperCore, { Autoplay } from 'swiper';

import { ConfProvider } from "../context/ConfContext";
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
            </ConfProvider>
        </>
    );
}

export default MyApp;