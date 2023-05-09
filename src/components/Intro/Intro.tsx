import {useTranslation} from "next-export-i18n";
import {SButton, SDescription, STitle, SWrapper} from "@/components/Intro/style";
import Image from "@/components/Image";
const Intro = () => {
    const { t } = useTranslation();
    return (
        <SWrapper
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <STitle>{t('intro.Maximize Your Crypto Earnings with Cryptonergy')}</STitle>
            <SDescription>{t('intro.Simple, Secure, and Profitable DeFi Investment Solutions')}</SDescription>
            <SButton href='#'>
                <Image size="md" name="lightning"/>{t('intro.Launch App')}
            </SButton>
        </SWrapper>
    )
}

export default Intro;