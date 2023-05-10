import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import Intro from "@/components/Intro";
import Description from "@/components/Description";
import HowItWorks from "@/components/HowItWorks";
import Vaults from "@/components/Vaults";
import Calculator from "@/components/Calculator";
import Benefits from "@/components/Benefits";
import BillBoard from "@/components/BillBoard";
import DeFi from "@/components/Defi";
import Networks from "@/components/Networks";
import Bg from "@/components/Bg";

import {SMain} from "@/style/main";

export default function Home() {
    return (
        <SMain>
            <Bg/>
            <Intro/>
            <Description/>
            <HowItWorks/>
            <Vaults/>
            <Calculator/>
            <Benefits/>
            <BillBoard/>
            <DeFi/>
            <Networks/>
        </SMain>
    )
}
