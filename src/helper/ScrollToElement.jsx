import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

const ScrollToElement = () => {
    const location = useLocation()
    const lastHash = useRef('')

    useEffect(()=>{
        console.log(location)
        if(location.hash){
            lastHash.current = location.hash.slice(1)
        }
        if(lastHash.current && document.getElementById(lastHash.current)){
            setTimeout(()=>{
                document.getElementById(lastHash.current)?.scrollIntoView({behavior: 'smooth', block : "start"})
            },100)
            lastHash.current = '';
        }
    },[location])
}

export default ScrollToElement
