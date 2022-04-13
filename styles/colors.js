
const obj = {
    transparent: 'rgba(0,0,0,0)',
    white: '#ffffff',
    textPrimary: '#171717',
    textGray: '#333333',
    textSecondary: '#ffffff',
    black: '#171717',
    blackSecondary:"#1f1f1f",
    primary: '#b41421',
    primaryLight: '#DFF0F7',
    secondary: '#ffffff',
    favorite: '#FBD428',
    success: '#28a745',
    link: '#69c8ff',
    error: '#EB5757',
    lightGray: '#F0F0F0',
    gray: '#A5A5A5',
    background: '#F7FAFF',
    darkGray: '#222222',
    textLightGray:'#C4C4C4',
    figmaGrey:'#CCCCCC'
}
export const COLORS = {
    'dark' : {
       ...obj,
       secondary: '#222222',
       textPrimary: '#ffffff',
       textSecondary: '#000000',
    },
    'light' : {
        ...obj,
        secondary: '#ffffff',
        textPrimary: '#000000',
        textSecondary: '#ffffff',
    },
    'aqua' : {
        ...obj,
        primary: '#3399ff',
        textPrimary: '#000000',
        textSecondary: '#ffffff',
    }
  };
