import {useTranslation} from "next-export-i18n";

import Image from "@/components/Image";
import {blocks, variants} from './constants';
import {SWrapper, SBlockWrapper, SBlocksWrapper, SBlockText, STitle} from './style';
import {useHelperStore} from "@/store/helper";

const Networks = () => {
    const {t} = useTranslation()
    const {isMobile} = useHelperStore();

    return (
        <SWrapper
            initial="hidden"
            whileInView="visible"
            variants={variants.text}
            transition={{duration: 0.3, staggerChildren: 0.3}}
            viewport={{once: true, margin: isMobile ? '150px' : undefined}}
        >
            <STitle
                variants={variants.text}
                transition={{duration: 0.3}}
            >
                {t('networks.Supported networks')}
            </STitle>
            <SBlocksWrapper
                variants={variants.blockWrapper}
                transition={{duration: 0.3, staggerChildren: 0.3}}
            >
                {
                    blocks.map(({ img, title }) => (
                        <SBlockWrapper
                            variants={variants.blockWrapper}
                            transition={{duration: 0.3, staggerChildren: 0.3}}
                            key={img}
                        >
                            <SBlockText
                                variants={variants.blockItem}
                                transition={{duration: 0.3}}
                            >
                                {title}
                            </SBlockText>
                            <Image
                                size="lg"
                                variants={variants.blockItem}
                                transition={{duration: 0.3}}
                                name={img}
                            />
                        </SBlockWrapper>
                    ))
                }
            </SBlocksWrapper>
        </SWrapper>
    )
}

export default Networks;