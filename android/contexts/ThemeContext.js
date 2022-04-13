import React, {createContext, useEffect, useState} from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext();


export const ThemeProvider = ({children}) => {
const [theme, setTheme] = useState('light');
const [error, setError] = useState('')

useEffect(() => {
    const getTheme = async () => {
        try {
            const theme = await AsyncStorage.getItem('theme')
            const colorScheme = Appearance.getColorScheme();
            if(theme !== null)
            {
                setTheme(theme);
            }
            else {
                setTheme(colorScheme);
            }
        }
        catch (err)
        {
            console.log('err', err);
            setError(err)
        }
    }
    getTheme();
}, [])

const toggleTheme = async () => {
    if(theme==='light')
    {
        setTheme('dark');
        await AsyncStorage.setItem('theme', "dark")
    }
    else {
        setTheme('light');
        await AsyncStorage.setItem('theme', "light")
    }
}

return (
    <ThemeContext.Provider
    value={{
    theme,
    toggleTheme,
    error,
    }}>
        {children}
    </ThemeContext.Provider>
);

}
