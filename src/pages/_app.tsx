import {FC} from "react";
import {AppProps} from "next/app";
import {appWithTranslation} from 'next-i18next'
import {ThemeProvider} from "styled-components";
import {AnimatePresence} from "framer-motion";

import {useThemeStore} from "@/store/theme";
import Layout from "@/components/Layout";
import {useHelperStore} from "@/store/helper";
import DetectDevice from "@/components/DetectDevice";
import Head from "next/head";

import themes from '../theme';
import {SWrapper} from "../style/main";
import './globals.css';

const MyApp: FC<AppProps & { isMobile: boolean }> = ({Component, pageProps}) => {
    const {theme} = useThemeStore();
    const {detected} = useHelperStore();

    return (
        <SWrapper>
            <Head>
                <title>
                    Miximize your crypto earnings with Cryptonergy
                </title>
                <meta
                    name="description"
                    content="Simple, Secure and Profitable DeFi Investment solutions that helps you miximize your earnings."
                    key="desc"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500;600&family=Unbounded:wght@400;600&display=swap" rel="stylesheet" />

                <link rel="preload" href="/assets/img/headerBgLightSm.png" as="image"/>
                <link rel="preload" href="/assets/img/headerBgDarkSm.png" as="image"/>
                <link rel="preload" href="/assets/img/headerBgLight.png" as="image"/>
                <link rel="preload" href="/assets/img/headerBgDark.png" as="image"/>
                <link rel="preload" href="/assets/img/logoLight.svg" as="image"/>
                <link rel="preload" href="/assets/img/logoTitleLight.svg" as="image"/>
                <link rel="preload" href="/assets/img/logoTitleDark.svg" as="image"/>

                <link rel="shortcut icon" href="/public/assets/img/favicon.ico" />
            </Head>
            <DetectDevice/>
            <ThemeProvider theme={themes[theme]}>
                <AnimatePresence>
                    {detected && (
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>)
                    }
                </AnimatePresence>
            </ThemeProvider>
        </SWrapper>
    );
}

export default appWithTranslation(MyApp);