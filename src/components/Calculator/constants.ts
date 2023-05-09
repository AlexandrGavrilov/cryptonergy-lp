export const options: readonly { value: string, label: string }[] = [
    {
        value: '0',
        label: 'APY 19%',
    },
    {
        value: '1',
        label: 'APY 21%',
    },
    {
        value: '2',
        label: 'APY 45%',
    },
] as const;

export const optionsData = [
    {
        percent: 19,
        tokens: ['tokenUSDT', 'tokenUSDC', 'tokenDAI'],
    },
    {
        percent: 21,
        tokens: ['tokenETH', 'tokenBTC', "tokenUSDT"],
    },
    {
        percent: 45,
        tokens: ['tokenETH', 'tokenARB', "tokenBNB", 'tokenOP', 'tokenAVAX', 'tokenMATIC', 'tokenFTM', 'tokenATOM'],
    },
] as const;

export const variants = {
    text: {
        hidden: {
            y: 200,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
        }
    },
    blockWrapper: {
        hidden: {
            y: 200,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
        }
    },
    blockItem: {
        hidden: {
            scale: 0,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
        }
    },
    tokensWrapper: {
        hidden: {
            // scale: 0,
            // opacity: 0
        },
        visible: {
            // scale: 1,
            // opacity: 1,
        }
    },
    tokenItem: {
        hidden: {
            x: 100,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
        }
    },

}