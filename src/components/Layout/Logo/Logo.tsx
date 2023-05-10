import Image from "@/components/Image";
import {useThemeStore} from "@/store/theme";

import {SLogoWrapper, SLogoTitleWrapper} from "./style";
import Link from "next/link";
import {useHelperStore} from "@/store/helper";

const Logo = () => {
    const {theme} = useThemeStore();

    const { isMobile } = useHelperStore()

    const scale = isMobile ? 0.8 : 1;
    const y = isMobile ? 5 : 0;
    const x = isMobile ? 20 : 0;
    return (
        <Link href='/'>
            <SLogoWrapper
                initial={{opacity: 0, x: -100 - x, scale, y}}
                animate={{opacity: 1, x: 0 - x, scale, y}}
                transition={{duration: 1}}
            >
                <SLogoTitleWrapper>
                    <Image name={theme === 'dark' ? 'logoDark' : 'logoLight'}/>
                </SLogoTitleWrapper>

                <Image name={theme === 'dark' ? 'logoTitleDark' : 'logoTitleLight'}/>
            </SLogoWrapper>
        </Link>
    )
}

export default Logo;