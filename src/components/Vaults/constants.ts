export const blocks = [
    {
        title: 'Stable Vault',
        percent: 19,
        tokens: [
            {
                title: 'USDT',
                icon: 'tokenUSDT',
            },
            {
                title: 'USDC',
                icon: 'tokenUSDC'
            },
            {
                title: 'DAI',
                icon: 'tokenDAI'
            }
        ],
    },
    {
        title: 'Core Vault',
        percent: 21,
        tokens: [
            {
                title: 'ETH',
                icon: 'tokenETH',
            },
            {
                title: 'BTC',
                icon: 'tokenBTC'
            },
            {
                title: 'USDT',
                icon: 'tokenUSDT'
            }
        ],
    },
    {
        title: 'Boost Vault',
        percent: 45,
        tokens: [
            {
                title: 'ETH',
                icon: 'tokenETH',
            },
            {
                title: 'ARB',
                icon: 'tokenARB'
            },
            {
                title: 'BNB',
                icon: 'tokenBNB'
            },
            {
                title: 'OP',
                icon: 'tokenOP'
            },
            {
                title: 'AVAX',
                icon: 'tokenAVAX'
            },
            {
                title: 'MATIC',
                icon: 'tokenMATIC'
            },
            {
                title: 'FTM',
                icon: 'tokenFTM'
            },
            {
                title: 'BNB',
                icon: 'tokenATOM'
            },
        ],
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
            opacity: 0
        },
        visible: {
            opacity: 1,
        }
    },
    tokensItem: {
        hidden: {
            scale: 0,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
        }
    },
}