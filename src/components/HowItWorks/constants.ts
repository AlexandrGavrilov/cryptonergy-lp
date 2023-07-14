export const blocks = [
    {
        title: 'Step 1',
        icon: 'howItWorksB1',
        description: 'Create a profile on Cryptonergy and connect your crypto wallet',
    },
    {
        title: 'Step 2',
        icon: 'howItWorksB2',
        description: 'Choose a suitable yield and riskiness and invest your token in the selected matched vault',

    },
    {
        title: 'Step 3',
        icon: 'howItWorksB3',
        description: 'Monitor the platform automatically managing your assets and delivering earnings with a high APY',
    },
    {
        title: 'Step 4',
        icon: 'howItWorksB4',
        description: 'Notice your interest being reinvested automatically to generate more income for you',
    },
    {
        title: 'Step 5',
        icon: 'howItWorksB5',
        description: 'Withdraw your earnings by token any time you want',
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