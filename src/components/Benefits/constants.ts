export const blocks = [
    {
      title: 'Optimal Risk-Return Balance',
      description: 'Leverage the best-balanced indexes on the DeFi market and access maximum results with minimal worries',
      img: 'benefitsB1',
    },
    {
      title: 'No minimum balance required',
      description: 'With Cryptonergy, starting your crypto journey is simpler than ever, as any entry balance does not restrict you',
      img: 'benefitsB2',
    },
    {
      title: 'Withdraw Available Anytime',
      description: 'The platform allows withdrawing your earnings at any moment without penalty or any extra effort',
      img: 'benefitsB3',
    },
    {
      title: 'Rebalancing & Diversification',
      description: 'Enhance stability and growth with intelligent rebalancing and diversification tied into the core of Cryptonergy',
      img: 'benefitsB4',
    },
    {
      title: 'Deep analytics',
      description: 'Stay on top of your investment performance with a detailed analytics dashboard showing you with main industry KPIs',
      img: 'benefitsB5',
    },
    {
      title: 'Daily compound',
      description: 'Unlock exponential growth and amplify your earnings with daily compound, as we automatically sell and reinvest your rewards',
      img: 'benefitsB6',
    },
    {
      title: 'Cost optimization',
      description: 'Through a carefully chosen set of DeFi-specific tools, the platform helps you reduce expenses and still maximize returns',
      img: 'benefitsB7',
    },
    {
      title: 'Simplicity & User-friendly',
      description: 'Enjoy a first-class user experience and accelerate your results with an intuitive interface and comprehensible toolset',
      img: 'benefitsB8',
    },
    {
      title: '24/7 Monitoring',
      description: 'Cryptonergy guarantees around-clock position optimization to achieve the best possible result for your account',
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
