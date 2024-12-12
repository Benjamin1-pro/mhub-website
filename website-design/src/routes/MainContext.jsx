import React, { createContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const MainContext = createContext({
    loader: false,
    language: 'en',
    isMenuOpen: false
})

const MainProvider = ({ children }) => {
    const [loader, setLoader] = useState(false)
    const [language, setLanguage] = useState('en');
    const [cookies, setCookie, removeCookie] = useCookies("lang");
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.classList.toggle('on-side');
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
        document.body.classList.remove('on-side');
    };

    useEffect(() => {
        setLanguage(cookies["lang"] ? cookies["lang"] : 'en')
    }, [])

    return (
        <MainContext.Provider value={{ loader, setLoader, language, setLanguage, isMenuOpen, handleMenuToggle, handleCloseMenu }}>
            {children}
        </MainContext.Provider>
    )
}

export { MainContext, MainProvider };