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
            <STitle>{t('intro.Crypto Investing Made Simple')}</STitle>
            <SDescription>{t('intro.Break into the world of crypto investing and secure your passive profits with an all-in-one DeFi platform')}</SDescription>
            <SButton href='#'>
                <Image size="md" name="lightning"/>{t('intro.Launch App')}
            </SButton>
        </SWrapper>
    )
}

export default Intro;