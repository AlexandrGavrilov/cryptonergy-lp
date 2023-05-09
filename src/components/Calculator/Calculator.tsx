import {useTranslation} from "next-i18next";
import {ChangeEvent, useState} from "react";

import {useHelperStore} from "@/store/helper";

import {Chart} from "@/components/Calculator/Chart";
import Select from "@/components/Calculator/Select";
import {options, optionsData, variants} from "@/components/Calculator/constants";
import Image from "@/components/Image";

import {
    SWrapper,
    SCalculatorWrapper,
    STitle,
    SDescription,
    SInputsWrapper,
    SInputWrapper,
    SInputLabel,
    SInput,
    SButton,
    SInputBefore,
    SelectedOptionTokensWrapper,
    SOptionTokenWrapper
} from './style';
import {OnChangeValue} from "react-select";

const Calculator = () => {
    const [selectValue, setSelectValue] = useState<typeof options[0]>(options[0]);
    const [inputValue, setInputValue] = useState(1000);
    const [profitValue, setProfitValue] = useState(1570);
    const {t} = useTranslation('calculator');
    const {isMobile} = useHelperStore();

    const optionData = optionsData[+selectValue.value];

    const onSelectChange = (value: typeof options[0]) => {
        const { percent } = optionsData[+value.value];
        const profit = inputValue * (percent / 100) * 3;
        setProfitValue(profit + inputValue);
        setSelectValue(value);
    }

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { percent } = optionData;
        const value = +event.target.value;
        const profit = value * (percent / 100) * 3;
        setProfitValue(profit + value);
        setInputValue(value);
    }

    return (
        <SWrapper>
            <SCalculatorWrapper
                variants={variants.text}
                initial="hidden"
                whileInView="visible"
                transition={{duration: 0.3, staggerChildren: 0.3}}
                viewport={{once: true, margin: isMobile ? '200px' : undefined}}
            >
                <STitle
                    variants={variants.text}
                    transition={{duration: 0.3}}
                >
                    {t('Calculate your future returns')}
                </STitle>
                <SDescription
                    variants={variants.text}
                    transition={{duration: 0.3}}
                >
                    {t('Select an asset and enter an amount to see how much your holdings will be worth in the future!')}
                </SDescription>
                <SInputsWrapper
                    variants={variants.text}
                    transition={{duration: 0.3}}
                >
                    <SInputWrapper>
                        <SelectedOptionTokensWrapper
                            initial="hidden"
                            animate="visible"
                            variants={variants.tokensWrapper}
                            transition={{staggerChildren: 0.2}}
                        >
                            {optionData.tokens.map((name, idx) => (
                                <SOptionTokenWrapper
                                    variants={variants.tokenItem}
                                    transition={{delay: (idx + 1) * 0.2, duration: 0.2}}
                                    idx={idx}
                                    key={`${optionData.percent}_${name}`}
                                >
                                    <Image size="md" name={name}/>
                                </SOptionTokenWrapper>
                            ))}
                        </SelectedOptionTokensWrapper>
                        <SInputLabel>
                            {t('Stablecoins Vault')}
                        </SInputLabel>
                        <Select onChange={onSelectChange} value={selectValue}/>
                    </SInputWrapper>
                    <SInputWrapper>
                        <SInputLabel>
                            {t('Top Up Amount')}
                        </SInputLabel>
                        <SInput value={inputValue} onChange={onInputChange} type="number"/>
                        <SInputBefore>$</SInputBefore>
                    </SInputWrapper>
                </SInputsWrapper>
                <SButton
                    variants={variants.text}
                    transition={{duration: 0.3}}
                >
                    {t('Start Earning')}
                </SButton>
            </SCalculatorWrapper>
            <Chart value={profitValue}/>
        </SWrapper>
    )
}

export default Calculator;