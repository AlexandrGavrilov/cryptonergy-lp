import {useTranslation} from "next-export-i18n";

import Image from "@/components/Image";
import {
    SWrapper,
    SAnimationWrapper,
    STitle,
    SDescription,
    SPyramidWrapper,
    SPyramidL1,
    SPyramidL2,
    SPyramidL3,
    SPyramidL4,
    STextWrapper, SIconWrapper, SText
} from "@/components/Description/style";
import {useThemeStore} from "@/store/theme";
import {useHelperStore} from "@/store/helper";

import { pyramidVariants } from './constants';

const Description = () => {
    const {t} = useTranslation();

    const {isMobile} = useHelperStore();
    const {theme} = useThemeStore();

    return (
        <SWrapper>
            <STextWrapper
                initial={{y: 200, opacity: 0}}
                whileInView={{y: 0, opacity: 1,}}
                transition={{duration: 0.5}}
                viewport={{once: true, margin: isMobile ? '200px' : undefined}}
            >
                <STitle>{t('description.The Most Convenient Solution for Crypto Investing')}</STitle>
                <SDescription>{t('description.Cryptonergy offers a revolutionary decentralized index platform for crypto investors It unites one-of-a-kind balanced indexes and optimized crypto investing toolsets for effortless profit multiplication and risk minimization With Cryptonergy, you don\'t need to constantly monitor the market, rebalance indexes or search for new opportunities to increase your profits — the platform will do it for you automatically')}</SDescription>
            </STextWrapper>
            <SPyramidWrapper
                initial="hidden"
                whileInView="visible"
                animate={{scale: isMobile ? 0.7 : 1}}
                variants={pyramidVariants.children}
                transition={{staggerChildren: 0.5}}
                viewport={{once: true, margin: isMobile ? '100px' : ''}}
            >
                {[
                    <SPyramidL1
                        key="l1"
                        variants={pyramidVariants.children}
                        transition={{duration: 0.5}}
                    >
                        <Image name={theme === 'dark' ? 'pyramidL1Dark' : 'pyramidL1'}/>
                        <SIconWrapper
                            variants={pyramidVariants.icon}
                            transition={{delay: 0.5, duration: 1}}
                            bottom={70}
                            left={0}
                        >
                            <Image name="yieldAggregatorLogo"/>
                        </SIconWrapper>
                        <SText
                            variants={pyramidVariants.icon}
                            transition={{delay: 0.5, duration: 1}}
                        >
                            {t('description.Yield Aggregator')}
                        </SText>
                    </SPyramidL1>,
                    <SPyramidL2
                        key="l2"
                        variants={pyramidVariants.children}
                        transition={{duration: 0.5}}
                    >
                        <Image name={theme === 'dark' ? 'pyramidL2Dark' : 'pyramidL2'}/>
                        <SIconWrapper
                            variants={pyramidVariants.icon}
                            transition={{delay: 1, duration: 1}}
                            bottom={60}
                            left={80}
                        >
                            <Image size="lg" name="rewardCompounding1"/>
                        </SIconWrapper>
                        <SIconWrapper
                            variants={pyramidVariants.icon}
                            transition={{delay: 1, duration: 1}}
                            bottom={60}
                            left={0}
                        >
                            <Image size="lg" name="rewardCompounding2"/>
                        </SIconWrapper>
                        <SIconWrapper
                            variants={pyramidVariants.icon}
                            transition={{delay: 1, duration: 1}}
                            bottom={60}
                            left={-80}
                        >
                            <Image size="lg" name="rewardCompounding3"/>
                        </SIconWrapper>
                        <SText
                            variants={pyramidVariants.icon}
                            transition={{delay: 0.5, duration: 1}}
                        >
                            {t('description.Reward Compounding')}
                        </SText>
                    </SPyramidL2>,
                    <SPyramidL3
                        key="l3"
                        variants={pyramidVariants.children}
                        transition={{duration: 0.5}}
                    >
                        <Image name={theme === 'dark' ? 'pyramidL3Dark' : 'pyramidL3'}/>
                        <SIconWrapper
                            variants={pyramidVariants.icon}
                            transition={{delay: 1.5, duration: 1}}
                            bottom={60}
                            left={150}
                        >
                            <Image size="lg" name="liquidityFarming1"/>
                        </SIconWrapper>
                        <SIconWrapper
                            variants={pyramidVariants.icon}
                            transition={{delay: 1.5, duration: 1}}
                            bottom={60}
                            left={75}
                        >
                            <Image size="lg" name="liquidityFarming2"/>
                        </SIconWrapper>
                        <SIconWrapper
                            variants={pyramidVariants.icon}
                            transition={{delay: 1.5, duration: 1}}
                            bottom={60}
                            left={0}
                        >
                            <Image size="lg" name="liquidityFarming3"/>
                        </SIconWrapper>
                        <SIconWrapper
                            variants={pyramidVariants.icon}
                            transition={{delay: 1.5, duration: 1}}
                            bottom={60}
                            left={-75}
                        >
                            <Image size="lg" name="liquidityFarming4"/>
                        </SIconWrapper>
                        <SIconWrapper
                            variants={pyramidVariants.icon}
                            transition={{delay: 1.5, duration: 1}}
                            bottom={60}
                            left={-150}
                        >
                            <Image size="lg" name="liquidityFarming5"/>
                        </SIconWrapper>
                        <SText
                            variants={pyramidVariants.icon}
                            transition={{delay: 0.5, duration: 1}}
                        >
                            {t('description.Liquidity Farming')}
                        </SText>
                    </SPyramidL3>,
                    <SPyramidL4
                        key="l4"
                        variants={pyramidVariants.children}
                        transition={{duration: 0.5}}
                    >
                        <Image name={theme === 'dark' ? 'pyramidL4Dark' : 'pyramidL4'}/>
                        <SIconWrapper
                            variants={pyramidVariants.icon}
                            transition={{delay: 2, duration: 1}}
                            bottom={60}
                            left={220}
                        >
                            <Image size="lg" name="lendingAndSwapProtocols1"/>
                        </SIconWrapper>
                        <SIconWrapper
                            variants={pyramidVariants.icon}
                            transition={{delay: 2, duration: 1}}
                            bottom={60}
                            left={130}
                        >
                            <Image size="lg" name="lendingAndSwapProtocols2"/>
                        </SIconWrapper>
                        <SIconWrapper
                            variants={pyramidVariants.icon}
                            transition={{delay: 2, duration: 1}}
                            bottom={60}
                            left={45}
                        >
                            <Image size="lg" name="lendingAndSwapProtocols3"/>
                        </SIconWrapper>
                        <SIconWrapper
                            variants={pyramidVariants.icon}
                            transition={{delay: 2, duration: 1}}
                            bottom={60}
                            left={-45}
                        >
                            <Image size="lg" name="lendingAndSwapProtocols4"/>
                        </SIconWrapper>
                        <SIconWrapper
                            variants={pyramidVariants.icon}
                            transition={{delay: 2, duration: 1}}
                            bottom={60}
                            left={-130}
                        >
                            <Image size="lg" name="lendingAndSwapProtocols5"/>
                        </SIconWrapper>
                        <SIconWrapper
                            variants={pyramidVariants.icon}
                            transition={{delay: 2, duration: 1}}
                            bottom={60}
                            left={-220}
                        >
                            <Image size="lg" name="lendingAndSwapProtocols6"/>
                        </SIconWrapper>
                        <SText
                            variants={pyramidVariants.icon}
                            transition={{delay: 0.5, duration: 1}}
                        >
                            {t('description.Lending and Swap Protocols')}
                        </SText>
                    </SPyramidL4>
                ]}
            </SPyramidWrapper>
        </SWrapper>

    )
}

export default Description;