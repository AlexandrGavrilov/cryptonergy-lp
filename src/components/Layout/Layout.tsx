import { FC, PropsWithChildren } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Layout: FC<PropsWithChildren> = ({ children, ...rest }) => {

    const { t } = useTranslation('common');
    return (
        <>
            {t('test')}
            <main>{children}</main>
            asdasdas
        </>
    );
}


export default Layout