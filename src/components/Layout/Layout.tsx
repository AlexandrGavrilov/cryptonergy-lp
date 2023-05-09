import {FC, PropsWithChildren} from "react";

import Header from "@/components/Layout/Header";
import {SWrapper} from "@/components/Layout/style";
import Footer from "@/components/Layout/Footer";

const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <SWrapper>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </SWrapper>
    );
}


export default Layout