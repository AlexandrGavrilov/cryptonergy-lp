import {FC,} from "react";

import Image from "@/components/Image";
import Logo from "@/components/Layout/Logo";

import {SWrapper, SLinksWrapper, SLinkItem, SSocialWrapper, SSocialItem} from "./style";

import { socials, links } from './consntants';
import {useThemeStore} from "@/store/theme";

const Footer: FC = () => {
    const {theme} = useThemeStore();
    return (
        <SWrapper>
            <Logo/>
            <SLinksWrapper>
                {links.map(({ to, text}) => (
                    <SLinkItem href={to} key={text}>
                        {text}
                    </SLinkItem>
                ))}
            </SLinksWrapper>
            <SSocialWrapper>
                {socials.map(({ to, img}) => (
                    <SSocialItem key={img} href={to}>
                        <Image name={theme === 'dark' ? `${img}Dark` : img}/>
                    </SSocialItem>
                ))}
            </SSocialWrapper>
        </SWrapper>
    );
}

export default Footer