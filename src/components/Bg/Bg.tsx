import {useEffect, useState} from "react";

import {useThemeStore} from "@/store/theme";
import {useHelperStore} from "@/store/helper";

import {SBg} from "./style";

const bgs = {
    mobile: {
        light: '/assets/img/headerBgLightSm.png',
        dark: '/assets/img/headerBgDarkSm.png'
    },
    desktop: {
        light: '/assets/img/headerBgLight.png',
        dark: '/assets/img/headerBgDark.png'
    },
}

const Bg = () => {
    const {theme} = useThemeStore();
    const {isMobile} = useHelperStore();

    const [src, setSrc] = useState('');

    useEffect(() => {
        setSrc(bgs[isMobile ? 'mobile' : 'desktop'][theme])
    }, [isMobile, theme])

    return (
        <SBg
            initial={{
                x: 0,
            }}
            animate={{
                x: '-50vw',
            }}
            transition={{duration: 1}}
            src={src}
        />
    )
}

export default Bg;