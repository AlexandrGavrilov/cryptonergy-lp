export const viewItems = [
    {
        title: 'GMX',
        img: 'lendingAndSwapProtocols2',
        top: (isMobile: boolean) => isMobile ? -60 : 30,
        left: (isMobile: boolean) => isMobile ? 145 : 287,
    },
    {
        title: 'Aave',
        img: 'lendingAndSwapProtocols4',
        top: (isMobile: boolean) => isMobile ? -20 : 90,
        left: (isMobile: boolean) => isMobile ? 240 : 445,
    },
    {
        title: 'Coinbase',
        img: 'liquidityFarming1',
        top: (isMobile: boolean) => isMobile ? 55 : 210,
        left: (isMobile: boolean) => isMobile ? 285 : 485,
    },
    {
        title: 'Yearn Finance',
        img: 'rewardCompounding1',
        top: (isMobile: boolean) => isMobile ? 150 : 355,
        left: (isMobile: boolean) => isMobile ? 265 : 440,
    },
    {
        title: 'UniSwap',
        img: 'liquidityFarming5',
        top: (isMobile: boolean) => isMobile ? 210 : 450,
        left: (isMobile: boolean) => isMobile ? 190 : 345,
    },
    {
        title: 'Osmosis',
        img: 'lendingAndSwapProtocols1',
        top: (isMobile: boolean) => isMobile ? 210 : 450,
        left: (isMobile: boolean) => isMobile ? 90 : 190,
    },
    {
        title: 'Lido',
        img: 'liquidityFarming4',
        top: (isMobile: boolean) => isMobile ? 150 : 355,
        left: (isMobile: boolean) => isMobile ? 20 : 90,
    },
    {
        title: 'Curve',
        img: 'liquidityFarming3',
        top: (isMobile: boolean) => isMobile ? 55 : 210,
        left: (isMobile: boolean) => isMobile ? 0 : 60,
    },
    {
        title: 'Balancer',
        img: 'lendingAndSwapProtocols6',
        top: (isMobile: boolean) => isMobile ? -20 : 90,
        left: (isMobile: boolean) => isMobile ? 50 : 110,
    },
] as const;

export const variants = {
    text: {
        hidden: {
            y: 100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
        }
    },
    viewWrapper: {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
        }
    },
    viewMain: {
        hidden: {
            scale: 0,
        },
        visible: {
            scale: 1,
        }
    },
    viewStar: {
        hidden: {
            scale: 0,
            rotate: 0,
        },
        visible: {
            scale: 1,
            rotate: 360 * 3,
        }
    },
    viewItem: {
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