import {useTranslation} from "next-export-i18n";
import {useHelperStore} from "@/store/helper";
import Image from "@/components/Image";
import {
    SWrapper,
    STextWrapper,
    STitle,
    SDescription,
    SBlocksWrapper,
    SBlockWrapper,
    SBlockTitle,
    SBlockDescription
} from './style'
import {blocks, variants} from "./constants";

const Benefits = () => {
    const {t} = useTranslation();
    const { isMobile } = useHelperStore();

    return (
        <SWrapper>
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
                    {t('benefits.Maximal yield at your fingertips')}
                </STitle>
                <SDescription
                    variants={variants.text}
                    transition={{duration: 0.3}}
                >
                    {t('benefits.Why Choose Cryptonergy for Crypto Investing?')}
                </SDescription>
            </STextWrapper>
            <SBlocksWrapper
                variants={variants.blocksWrapper}
                initial="hidden"
                whileInView="visible"
                transition={{duration: 0.3, staggerChildren: 0.3}}
                viewport={{once: true, margin: isMobile ? '150px' : undefined}}
            >
                {blocks.map(({ title, img, description}) => (
                    <SBlockWrapper
                        variants={variants.blockWrapper}
                        transition={{duration: 0.3,  staggerChildren: 0.3}}
                        key={img}
                    >
                        <Image
                            variants={variants.blockItem}
                            transition={{duration: 0.3}}
                            name={img}
                        />
                        <SBlockTitle
                            variants={variants.blockItem}
                            transition={{duration: 0.3}}
                        >
                            {t(title)}
                        </SBlockTitle>
                        <SBlockDescription
                            variants={variants.blockItem}
                            transition={{duration: 0.3}}
                        >
                            {t(`benefits.${description}`)}
                        </SBlockDescription>
                    </SBlockWrapper>
                ))}
            </SBlocksWrapper>
        </SWrapper>
    )
}

export default Benefits;