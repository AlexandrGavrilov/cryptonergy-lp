import {useTranslation} from "next-i18next";
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
    const {t} = useTranslation('benefits');
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
                    {t('Maximum yield at your fingertips')}
                </STitle>
                <SDescription
                    variants={variants.text}
                    transition={{duration: 0.3}}
                >
                    {t('Everything you need in one platform')}
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
                        transition={{duration: 0.5,  staggerChildren: 0.3}}
                        key={img}
                    >
                        <Image
                            variants={variants.blockItem}
                            transition={{duration: 0.6}}
                            name={img}
                        />
                        <SBlockTitle
                            variants={variants.blockItem}
                            transition={{duration: 0.4}}
                        >
                            {t(title)}
                        </SBlockTitle>
                        <SBlockDescription
                            variants={variants.blockItem}
                            transition={{duration: 0.4}}
                        >
                            {t(description)}
                        </SBlockDescription>
                    </SBlockWrapper>
                ))}
            </SBlocksWrapper>
        </SWrapper>
    )
}

export default Benefits;