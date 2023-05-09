export type TImage =
    'logoLight' |
    'logoDark' |
    'pyramidL1' |
    'pyramidL1Dark' |
    'pyramidL2' |
    'pyramidL2Dark' |
    'pyramidL3' |
    'pyramidL3Dark' |
    'pyramidL4' |
    'pyramidL4Dark' |
    'yieldAggregatorLogo' |
    'rewardCompounding1' |
    'rewardCompounding2' |
    'rewardCompounding3' |
    'liquidityFarming1' |
    'liquidityFarming2' |
    'liquidityFarming3' |
    'liquidityFarming4' |
    'liquidityFarming5' |
    'lendingAndSwapProtocols1' |
    'lendingAndSwapProtocols2' |
    'lendingAndSwapProtocols3' |
    'lendingAndSwapProtocols4' |
    'lendingAndSwapProtocols5' |
    'lendingAndSwapProtocols6' |
    'howItWorksB1' |
    'howItWorksB2' |
    'howItWorksB3' |
    'howItWorksB4' |
    'howItWorksB5' |
    'lightning' |
    'logoTitleDark' |
    'logoTitleLight' |
    'switcherLight' |
    'switcherDark' |
    'tokenARB' |
    'tokenATOM' |
    'tokenAVAX' |
    'tokenBNB' |
    'tokenBTC' |
    'tokenDAI' |
    'tokenETH' |
    'tokenFTM' |
    'tokenMATIC' |
    'tokenOP' |
    'tokenUSDC' |
    'tokenUSDT' |
    'benefitsB1' |
    'benefitsB2' |
    'benefitsB3' |
    'benefitsB4' |
    'benefitsB5' |
    'benefitsB6' |
    'benefitsB7' |
    'benefitsB8' |
    'benefitsB9' |
    'bgBillboardLight' |
    'bgBillboardDark' |
    'defiStar' |
    'defiStarSmall' |
    'defiMainDark' |
    'defiMain' |
    'twitter' |
    'telegram' |
    'medium' |
    'discord'|
    'twitterDark' |
    'telegramDark' |
    'mediumDark' |
    'discordDark';

export type TImageSize = 'lg' | 'md' | 'sm' | 'auto' | 'xl';

export interface IImageProps {
    name: TImage;
    size?: TImageSize;
}