import "../styles/root/globals.scss";
import App from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import { ConfProvider } from "../context/ConfContext";
function MyApp({ Component, pageProps, user }) {
    const getLayout = Component.getLayout || ((page) => page);
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
            </ConfProvider>
        </>
    );
}

export default MyApp;