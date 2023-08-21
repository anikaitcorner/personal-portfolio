"use client"

import { cn } from "@/lib/utils"

export const Container=({children,className}:React.PropsWithChildren&{
    className?:string
})=>{
    return(
        <div className={cn("w-full max-w-4xl m-auto md:px-12 px-6",className)}>
            {children}
        </div>
    )
}