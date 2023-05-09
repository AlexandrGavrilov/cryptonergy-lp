export const blocks = [
    {
      title: 'Best risk/profit ratio',
      description: 'We strive to maintain a strong balance between risky and profitable investments to ensure maximum returns',
      img: 'benefitsB1',
    },
    {
      title: 'No minimum balance required!',
      description: 'You can start using service with almost zero balance without',
      img: 'benefitsB2',
    },
    {
      title: 'No lock-ins - withdraw anytime',
      description: 'You can easily withdraw your profit at any time with no penalty',
      img: 'benefitsB3',
    },
    {
      title: 'Rebalancing & Diversification',
      description: 'You\'ll to achieve the APY on the market by diversifying & rebalancing funds across trusted pools and DApps',
      img: 'benefitsB4',
    },
    {
      title: 'Deep analytics',
      description: 'We give you a detail overview of key performace indicators like APY, TVL, TVR, volume of vault',
      img: 'benefitsB5',
    },
    {
      title: 'Daily compound',
      description: 'We automatically sells all rewards and reinvests profits',
      img: 'benefitsB6',
    },
    {
      title: 'Cost optimization',
      description: 'We provide the best farming opportunities to everyone',
      img: 'benefitsB7',
    },
    {
      title: 'Simplicity & User-friendly',
      description: 'Cryptonergy makes earn easy to buy and sell crypto using our platform',
      img: 'benefitsB8',
    },
    {
      title: '24/7 Monitoring',
      description: 'Cryptonergy takes care of your positions 24/7, ensuring they are always optimized',
      img: 'benefitsB9',
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
    blocksWrapper: {
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
