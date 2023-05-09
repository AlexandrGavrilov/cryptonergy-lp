export interface IHelperStore {
    isMobile: boolean,
    detected: boolean,
    setIsMobile(isMobile: boolean): void;
}