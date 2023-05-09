import {useTranslation} from "next-i18next";
import {useState} from "react";

import Image from "@/components/Image";
import Counter from "@/components/Counter/Counter";
import {useThemeStore} from "@/store/theme";
import {useHelperStore} from "@/store/helper";

import {blocks, variants} from './constants';
import {
    SWrapper,
    STextWrapper,
    STitle,
    SDescription,
    SBlocksWrapper,
    SBlockWrapper,
    SBlockHeaderWrapper,
    SBlockTitleWrapper,
    SBlockTitle,
    SBlockTitleLabel,
    SBlockPercentLabel,
    SBlockPercentWrapper,
    SBlockPercent,
    STokensWrapper,
    STokenWrapper,
    STokenText,
    SButton, STokensTitle, SBodyWrapper, SContentWrapper,
} from './style';

const Vaults = () => {
    const {t} = useTranslation('vault');
    const [isAnimationComplete, setIsAnimationComplete] = useState<Record<string, boolean>>({});

    const {theme} = useThemeStore();
    const {isMobile} = useHelperStore();

    const onBlockAnimationComplete = (title: string) => () => {
        setIsAnimationComplete((data) => ({...data, [title]: true}))
        console.log('Complete')
    }

    return (
        <SWrapper isReverseBg={theme === 'dark'}>
            <STextWrapper>
                <STitle
                    variants={variants.text}
                    initial="hidden"
                    whileInView="visible"
                    transition={{duration: 0.3}}
                    viewport={{once: true, margin: isMobile ? '300px' : undefined}}
                >
                    {t('Current yield vaults')}
                </STitle>
                <SDescription
                    variants={variants.text}
                    initial="hidden"
                    whileInView="visible"
                    transition={{delay: 0.3, duration: 0.3}}
                    viewport={{once: true, margin: isMobile ? '300px' : undefined}}
                >
                    {t('Featured Vault')}
                </SDescription>
            </STextWrapper>
            <SBlocksWrapper
                initial="hidden"
                whileInView="visible"
                transition={{  duration: 0.5, staggerChildren: 0.5}}
                viewport={{once: true, margin: isMobile ? '300px' : undefined}}
                variants={variants.blockWrapper}
            >
                {blocks.map(({percent, tokens, title}) => (
                    <SBlockWrapper
                        onAnimationComplete={onBlockAnimationComplete(title)}
                        variants={variants.blockWrapper}
                        transition={{ duration: 0.5 }}
                        isLightTheme={theme === 'light'}
                        key={title}
                    >
                        <SContentWrapper>
                            <SBlockHeaderWrapper>
                                <SBlockTitleWrapper>
                                    <SBlockTitleLabel>
                                        {t('Vault')}
                                    </SBlockTitleLabel>
                                    <SBlockTitle>
                                        {title}
                                    </SBlockTitle>
                                </SBlockTitleWrapper>
                                <SBlockPercentWrapper>
                                    <SBlockPercentLabel>
                                        {t('ANY')}
                                    </SBlockPercentLabel>
                                    <SBlockPercent>
                                        {isAnimationComplete[title] ? <Counter start={isAnimationComplete[title]} to={percent}/> : 0}%
                                    </SBlockPercent>
                                </SBlockPercentWrapper>
                            </SBlockHeaderWrapper>
                            <SBodyWrapper>
                                <STokensTitle>
                                    Tokens
                                </STokensTitle>
                                <STokensWrapper
                                    transition={{ staggerChildren: 0.2}}
                                    viewport={{once: true, margin: isMobile ? '300px' : '200px'}}
                                    variants={variants.tokensWrapper}
                                >
                                    {tokens.map(({title, icon}) => (
                                        <STokenWrapper
                                            variants={variants.tokensItem}
                                            transition={{ duration: 0.2 }}
                                            key={title}
                                        >
                                            <Image size="md" name={icon}/>
                                            <STokenText>
                                                {title}
                                            </STokenText>
                                        </STokenWrapper>
                                    ))}
                                </STokensWrapper>
                            </SBodyWrapper>
                        </SContentWrapper>
                        <SButton layout href='#'>
                            {t('Make Deposit')}
                        </SButton>
                    </SBlockWrapper>
                ))}
            </SBlocksWrapper>
        </SWrapper>
    )
}

export default Vaults;