import { ReactNode } from "react";

const Head =({head, children}:{head:string, children:ReactNode}) => {
    return <h1> {children}{head} </h1>
} 
export default Head;