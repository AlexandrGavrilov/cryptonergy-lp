import {useTranslation} from "next-export-i18n";

import Image from "@/components/Image";

import {
    SWrapper,
    STextWrapper,
    STitle,
    SBlockTitle,
    SBlockWrapper,
    SBlocksWrapper,
    SBlockDescription,
    SDescription
} from "./style";
import {useHelperStore} from "@/store/helper";

import { blocks, variants } from './constants';
const HowItWorks = () => {
    const {t} = useTranslation();

    const {isMobile} = useHelperStore();

    return (
        <SWrapper>
            <STextWrapper>
                <STitle
                    variants={variants.text}
                    initial="hidden"
                    whileInView="visible"
                    transition={{duration: 0.5}}
                    viewport={{once: true, margin: isMobile ? '150px' : undefined}}
                >
                    {t('howItWorks.how it works?')}
                </STitle>
                <SDescription
                    variants={variants.text}
                    initial="hidden"
                    whileInView="visible"
                    transition={{duration: 0.5}}
                    viewport={{once: true, margin: isMobile ? '150px' : undefined}}
                >
                    {t('howItWorks.Start Your Crypto Journey in a Few Clicks')}
                </SDescription>
            </STextWrapper>
            <SBlocksWrapper
                initial="hidden"
                whileInView="visible"
                transition={{  duration: 0.5, staggerChildren: 0.5}}
                viewport={{once: true, margin: isMobile ? '150px' : undefined}}
                variants={variants.blockWrapper}
            >
                {blocks.map(({title, description, icon}, i) => (
                    <SBlockWrapper
                        variants={variants.blockWrapper}
                        transition={{ duration: 0.5 }}
                        key={icon}
                    >
                        <Image
                            transition={{ delay: i * 0.5, duration: 0.5 }}
                            variants={variants.blockItem}
                            name={icon}
                        />
                        <SBlockTitle
                            transition={{ delay: i * 0.5, duration: 0.5 }}
                            variants={variants.blockItem}
                        >
                            {title}
                        </SBlockTitle>
                        <SBlockDescription
                            transition={{ delay: i * 0.5, duration: 0.5 }}
                            variants={variants.blockItem}
                        >
                            {description}
                        </SBlockDescription>
                    </SBlockWrapper>
                ))}
            </SBlocksWrapper>
        </SWrapper>
    )
}

export default HowItWorks;