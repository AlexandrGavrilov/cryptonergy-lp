//@ts-nocheck
import Select from 'react-select';

import Image from "@/components/Image";
import {
    SSelectWrapper,
    SSelect,
    SSelectBefore,
    SSelectOption,
    SSelectMenu,
    SOptionTokenWrapper, SSelectOptionWrapper, SOptionTokensWrapper
} from "@/components/Calculator/style";
import {ISelectProps} from "@/components/Calculator/types";
import {options, optionsData, variants} from "@/components/Calculator/constants";

const Option = ({children, data, selectOption, ...props}) => {
    console.log(props, 'option')
    const optionData = optionsData[data.value];

    return (
        <SSelectOptionWrapper>
            <SSelectOption onClick={() => selectOption(data)}>
                {children}
            </SSelectOption>
            <SOptionTokensWrapper
                initial="hidden"
                animate="visible"
                variants={variants.tokensWrapper}
                transition={{ staggerChildren: 0.2 }}
            >
                {optionData.tokens.map((name, idx) => (
                    <SOptionTokenWrapper
                        variants={variants.tokenItem}
                        transition={{ duration: 0.2}}
                        idx={idx}
                        key={`${optionData.percent}_${name}`}
                    >
                        <Image size="md" name={name}/>
                    </SOptionTokenWrapper>
                ))}
            </SOptionTokensWrapper>
        </SSelectOptionWrapper>

    )
}
const SelectC = ({onChange, value}: ISelectProps) => {
    return (
        <SSelectWrapper>
            <Select
                isSearchable={false}
                classNames={{
                    control: () => 'control',
                    singleValue: () => 'value',
                    menu: () => 'menu',
                }}
                components={{
                    Option,
                }}
                defaultValue={options[0]}
                value={value}
                onChange={onChange}
                name="APY"
                options={options}
                isClearable={false}
            />
            <SSelectBefore/>
        </SSelectWrapper>
    )
}

export default SelectC;