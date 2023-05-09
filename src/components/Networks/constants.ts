export const blocks = [
    {
        title: 'Ethereum',
        img: 'tokenETH',
    },
    {
        title: 'BNB Chain',
        img: 'tokenBNB',
    },
    {
        title: 'Polygon',
        img: 'tokenMATIC',
    },
    {
        title: 'Fantom',
        img: 'tokenFTM',
    },
    {
        title: 'Avalanche',
        img: 'tokenAVAX',
    },
    {
        title: 'Cosmos',
        img: 'tokenATOM',
    },
    {
        title: 'Arbitrum',
        img: 'tokenARB',
    },
    {
        title: 'Optimism',
        img: 'tokenOP',
    },
] as const

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
}