export const blocks = [
    {
        title: 'Step 1',
        icon: 'howItWorksB1',
        description: 'Register on Cryptonergy and connect the crypto wallet that you use.',
    },
    {
        title: 'Step 2',
        icon: 'howItWorksB2',
        description: 'Invest your token in select matched vault with the right yield and riskiness.',

    },
    {
        title: 'Step 3',
        icon: 'howItWorksB3',
        description: 'Automatically begin earning with highest APY on the market. Enjoy!',
    },
    {
        title: 'Step 4',
        icon: 'howItWorksB4',
        description: 'Your interest is used to purchase more of the asset and reinvested automatically.',
    },
    {
        title: 'Step 5',
        icon: 'howItWorksB5',
        description: 'Withdraw your earn by token at any time.',
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
}