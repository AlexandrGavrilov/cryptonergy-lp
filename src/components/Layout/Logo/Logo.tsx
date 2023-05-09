import Image from "@/components/Image";
import {useThemeStore} from "@/store/theme";

import {SLogoWrapper, SLogoTitleWrapper} from "./style";
import Link from "next/link";

const Logo = () => {
    const {theme} = useThemeStore();
    return (
        <Link href='/'>
            <SLogoWrapper
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
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