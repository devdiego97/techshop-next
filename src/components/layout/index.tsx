import { ReactNode } from "react"
import { Header } from "../header"
import { Footer } from "../footer"

type Props={
    children:ReactNode
}
export const Layout=({children}:Props)=>{
    return <>
       <Header />
        <div className="bg-blue-950 h-dvh">
            {children}
        </div>
       <Footer/>
     </>
}