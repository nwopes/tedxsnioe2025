import "../styles/root/globals.scss";
import App from "next/app";
import Head from "next/head";
import DemoComponent from "../components/Demo/DemoComponent";

function MyApp({ Component, pageProps, user }) {
    const getLayout = Component.getLayout || ((page) => page);
    return (
        <>
            <Head>
                <title>TEDx ShivNadarIOE</title>
                <meta
                    name="description"
                    content="TEDx Shiv Nadar Insitute of Eminence Annual Conference"
                />
            </Head>
            <DemoComponent />
        </>
    );
}

export default MyApp;