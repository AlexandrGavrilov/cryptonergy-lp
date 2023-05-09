import {useEffect} from 'react'
import {isMobile} from 'react-device-detect'

import {useHelperStore} from "@/store/helper";
import {useThemeStore} from "@/store/theme";
import {TTheme} from "@/store/theme/types";

export default function Device() {
    const {setIsMobile} = useHelperStore();
    const {setTheme} = useThemeStore();

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme) {
            setTheme(theme as TTheme);
        }
        setIsMobile(isMobile);
    }, []);

    return <></>
}