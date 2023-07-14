import {useTranslation} from "next-export-i18n";
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

const Calculator = () => {
    const [selectValue, setSelectValue] = useState<typeof options[0]>(options[0]);
    const [inputValue, setInputValue] = useState(1000);
    const [profitValue, setProfitValue] = useState(1570);
    const {t} = useTranslation();
    const {isMobile} = useHelperStore();

    const optionData = optionsData[+selectValue.value];

    const onSelectChange = (value: typeof options[0]) => {
        const { percent } = optionsData[+value.value];
        const profit = inputValue * (percent / 100) * 3;
        setProfitValue(profit + inputValue);
        setSelectValue(value);
    }

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (isNaN(+event.target.value) || event.target.value.length > 9) return;

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
                    {t('calculator.Predict your future growth with Cryptonergy')}
                </STitle>
                <SDescription
                    variants={variants.text}
                    transition={{duration: 0.3}}
                >
                    {t('calculator.Calculate how your assets will multiply after making an investment with our platform')}
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
                            {t('calculator.Stablecoins Vault')}
                        </SInputLabel>
                        <Select onChange={onSelectChange} value={selectValue}/>
                    </SInputWrapper>
                    <SInputWrapper>
                        <SInputLabel>
                            {t('calculator.Top Up Amount')}
                        </SInputLabel>
                        <SInput value={inputValue} onChange={onInputChange} type="text"/>
                        <SInputBefore>$</SInputBefore>
                    </SInputWrapper>
                </SInputsWrapper>
                <SButton
                    variants={variants.text}
                    transition={{duration: 0.3}}
                >
                    {t('calculator.Sign up')}
                </SButton>
            </SCalculatorWrapper>
            <Chart value={profitValue}/>
        </SWrapper>
    )
}

export default Calculator;