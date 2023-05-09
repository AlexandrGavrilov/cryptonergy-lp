import { FC } from "react";
import { AppProps } from "next/app";
import { appWithTranslation } from 'next-i18next'
import Layout from "@/components/Layout/Layput";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    return <Layout><Component {...pageProps} /></Layout>;
}

export default appWithTranslation(MyApp);