import {FC, useState} from "react";
import {useTranslation} from 'next-export-i18n'

import Switch from "react-switch";

import Image from "@/components/Image";
import Logo from "@/components/Layout/Logo";

import {SActionsWrapper, SButton, SSwitcherWrapper, SWrapper} from "./style";
import {useThemeStore} from "@/store/theme";

const Header: FC = () => {
    const { setTheme } = useThemeStore();

    const {t} = useTranslation();

    const [checked, setChecked] = useState(false);

    const onChange = (isChecked: boolean) => {
        setChecked(!checked);
        const theme = isChecked ? 'dark' : 'light';
        localStorage.setItem('theme', theme)
        setTheme(theme);
    }

    return (
        <SWrapper>
            <Logo/>
            <SActionsWrapper
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <SSwitcherWrapper checked={checked}>
                    <Switch
                        checkedIcon={false}
                        uncheckedIcon={false}
                        width={52}
                        height={26}
                        checkedHandleIcon={<Image name={"switcherDark"}/>}
                        uncheckedHandleIcon={<Image name={"switcherLight"}/>}
                        onColor="#232323"
                        offColor="#232323"
                        activeBoxShadow=""
                        onChange={onChange} checked={checked}
                    />
                </SSwitcherWrapper>
                <SButton href='#'>{t('header.Go to App')}</SButton>
            </SActionsWrapper>
        </SWrapper>
    );
}

export default Header