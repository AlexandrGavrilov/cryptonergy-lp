import {useTranslation} from "next-i18next";
import {SButton, SDescription, STitle, SWrapper} from "@/components/Intro/style";
import Image from "@/components/Image";
const Intro = () => {
    const { t } = useTranslation('intro');
    return (
        <SWrapper
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <STitle>{t('Maximize Your Crypto Earnings with Cryptonergy')}</STitle>
            <SDescription>{t('Simple, Secure, and Profitable DeFi Investment Solutions.')}</SDescription>
            <SButton href='#'>
                <Image size="md" name="lightning"/>{t('Launch App')}
            </SButton>
        </SWrapper>
    )
}

export default Intro;