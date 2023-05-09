import {SChartLabel, SChartTextWrapper, SChartValue, SChartWrapper, SImage} from "@/components/Calculator/style";
import {variants} from "@/components/Calculator/constants";
import {useHelperStore} from "@/store/helper";
import {useThemeStore} from "@/store/theme";
import Counter from "@/components/Counter";
import {useEffect, useState} from "react";
import {useTranslation} from "next-i18next";

export const Chart = ({ value }: any) => {
    const [prevValue, setPrevValue] = useState(value);
    const {isMobile} = useHelperStore();
    const {theme} = useThemeStore();
    const {t} = useTranslation('calculator');

    useEffect(() => {
        setPrevValue(value);
    }, [value])

    return (
        <SChartWrapper
            variants={variants.text}
            initial="hidden"
            whileInView="visible"
            transition={{duration: 1}}
            viewport={{once: true, margin: isMobile ? '200px' : undefined}}
        >
            <SChartTextWrapper>
                <SChartLabel>
                    {t('In 36 months you will have')}
                </SChartLabel>
                <SChartValue>
                    $<Counter from={prevValue} to={value} fractionDigits={2}/>
                </SChartValue>
            </SChartTextWrapper>
            <SImage alt="chart" src={theme === 'dark' ? "/assets/img/chartDark.svg" : "/assets/img/chart.svg"}/>
        </SChartWrapper>
    )
}