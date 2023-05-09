export type TTheme = 'dark' | 'light';
export interface IThemeStore {
    theme: TTheme,
    setTheme(theme: TTheme): void;
}