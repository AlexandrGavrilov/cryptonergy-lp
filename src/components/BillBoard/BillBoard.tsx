import {useTranslation} from "next-i18next";

import Image from "@/components/Image";
import {useThemeStore} from "@/store/theme";
import {useHelperStore} from "@/store/helper";

import {SWrapper, SButton, STitle, SDescription, SContentWrapper} from "./style";

import { variants } from './constants';
const BillBoard = () => {
    const {t} = useTranslation('billboard');
    const { theme } = useThemeStore();
    const { isMobile } = useHelperStore();

    const bgSrc = theme === 'dark' ? '/assets/img/bgBillboardDark.svg' : '/assets/img/bgBillboardLight.svg';

    return (
        <SWrapper>
            <SContentWrapper
                initial="hidden"
                whileInView="visible"
                variants={variants.text}
                transition={{duration: 0.3, staggerChildren: 0.3}}
                viewport={{once: true, margin: isMobile ? '150px' : undefined}}
                bgSrc={bgSrc}
            >
                <STitle
                    variants={variants.text}
                    transition={{duration: 0.3}}
                >
                    {t('Earn passive income with crypto')}
                </STitle>
                <SDescription
                    variants={variants.text}
                    transition={{duration: 0.3}}
                >
                    {t('Connect your wallet and make your fist deposit.')}
                </SDescription>
                <SButton
                    variants={variants.text}
                    transition={{duration: 0.3}}
                >
                    <Image size="md" name="lightning"/>{t('Launch App')}
                </SButton>
            </SContentWrapper>
        </SWrapper>
    )
}
export default BillBoard;