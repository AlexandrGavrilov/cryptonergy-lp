import {useTranslation} from "next-export-i18n";

import Image from "@/components/Image";
import {useHelperStore} from "@/store/helper";

import {
    SWrapper,
    SViewWrapper,
    SViewItem,
    STitle,
    SDescription,
    SViewItemText,
    STextWrapper,
    SContentWrapper,
    SViewMainWrapper, SViewStarWrapper
} from './style';

import {variants, viewItems} from './constants';
import {useThemeStore} from "@/store/theme";
import {useWindowSize} from "@/hooks/useWindowSize";

const DeFi = () => {
    const {t} = useTranslation();

    const {isMobile} = useHelperStore();
    const {theme} = useThemeStore();
    const { width } = useWindowSize();

    const isSmallVariant = Boolean(isMobile || (width && width <= 1550));

    return (
        <SWrapper>
            <SContentWrapper>
                <SViewWrapper
                    initial="hidden"
                    whileInView="visible"
                    variants={variants.viewWrapper}
                    transition={{duration: 0.3}}
                    viewport={{once: true, margin: isMobile ? '150px' : undefined}}
                >
                    <SViewMainWrapper
                        variants={variants.viewMain}
                        transition={{duration: 1}}
                    >
                        <Image name={theme === 'dark' ? 'defiMainDark' : 'defiMain'}/>
                    </SViewMainWrapper>
                    <SViewStarWrapper
                        variants={variants.viewStar}
                        transition={{duration: 3}}
                    >
                        <Image name={isSmallVariant ? 'defiStarSmall' : "defiStar"}/>
                    </SViewStarWrapper>
                    {viewItems.map(({title, img, top, left}, idx) => (
                        <SViewItem
                            top={top(isSmallVariant)}
                            left={left(isSmallVariant)}
                            key={img}
                            variants={variants.viewItem}
                            transition={{duration: 0.2, delay: 1 + idx * 0.2}}
                        >
                            <Image size="lg" name={img}/>
                            {
                                !isSmallVariant && <SViewItemText>
                                    {title}
                                </SViewItemText>
                            }

                        </SViewItem>
                    ))}
                </SViewWrapper>
                <STextWrapper
                    variants={variants.text}
                    initial="hidden"
                    whileInView="visible"
                    transition={{duration: 0.3, staggerChildren: 0.3}}
                    viewport={{once: true, margin: isMobile ? '150px' : undefined}}
                >
                    <STitle
                        variants={variants.text}
                        transition={{duration: 0.3}}
                    >
                        {t('defi.Cryptonergy DeFi Ecosystem')}
                    </STitle>
                    <SDescription
                        variants={variants.text}
                        transition={{duration: 0.3}}
                    >
                        {t('defi.Platform offers a streamlined approach to investing in DeFi protocols, eliminating the need for complex research and allowing for maximum profits with proper risk management Our DeFi ecosystem supports both established and cutting-edge protocols, ensuring seamless connectivity and compatibility')}
                    </SDescription>
                </STextWrapper>
            </SContentWrapper>
        </SWrapper>
    )
}

export default DeFi;