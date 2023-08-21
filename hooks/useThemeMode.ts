import { create } from "zustand";

interface ThemeModeSwitcher{
    isDarkMode:boolean,
    setThemeMode:()=>void
}

export const useThemeMode=create<ThemeModeSwitcher>((set)=>({
    isDarkMode:false,
    setThemeMode:()=>set((mode)=>{
        if(mode.isDarkMode){
            mode.isDarkMode=false;
        }else{
            mode.isDarkMode=true
        }

        return {
            isDarkMode:mode.isDarkMode
        }
    })
}))