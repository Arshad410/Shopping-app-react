import React, {useEffect, useState} from "react";

type Props = {
    themeChange:(theme:'light'|'dark')=>void;
};

const ThemeSwitch: React.FC<Props> =(props) => {

    let [theme,setTheme]= useState("light");

    useEffect(() => {
        console.log("USE EFFECT CALLED");
        document.body.className = "bg-" + theme;
    }, [theme]);
    
    const updateTheme = () => {
        let thm : "light" | "dark" = theme === "dark" ? "light" : "dark";
        setTheme(thm);
        props.themeChange(thm);
    };

    return (
        <button onClick={updateTheme}>{theme === "dark" ? "Light" : "Dark"}</button>
    );
};

export default ThemeSwitch;