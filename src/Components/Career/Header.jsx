import {useState, useEffect, useRef } from "react"
import { FramerSidebar, FramerSidebarPanel, StyledHeader, Toggleview, 
 } from "../../Utils/styled/header/header.styled";
import enoverLogo from '../../assets/enovLogo.svg'
import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "@uidotdev/usehooks";
import { MdClose as CloseIcon } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { PrimaryButton } from "../../Utils/styled/Buttons"
import { useLocation } from "react-router-dom";

const Header = ({bg})=> {
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

  const [isOpen, setIsOpen] = useState(false)
  const ref = useClickAway(() => {
    setIsOpen(false);
  });



  const toggle = ()=> setIsOpen(!isOpen)
  return(<StyledHeader bg={bg}>
    <NavLink to="/">
    <img src={enoverLogo} alt="EnoverLab Logo"/>
    </NavLink>
    <Toggleview display>
      <PrimaryButton Text='Contact Us' handleClick={()=>window.open("tel:09063124595")}/>
    </Toggleview>

    <MenuToggle tog={toggle} open={isOpen}/>
    <AnimatePresence mode="wait" initial={false} >
    {isOpen && (<>
    <FramerSidebar  {...framerSidebarBackground}>
    </FramerSidebar>
    <FramerSidebarPanel {...framerSidebarPanel} ref={ref}>
      <CloseIcon size="3rem" onClick={toggle} />
      <motion.span {...framerText(3)}>
      <PrimaryButton Text='Contact Us' handleClick={()=>window.open("tel:09063124595")}/>
      </motion.span>
    </FramerSidebarPanel>

    </>) }
    </AnimatePresence>
    
  </StyledHeader>)
}

export default Header

const MenuToggle = ({tog, open})=>{
  return(<Toggleview onClick={tog}>
     <MenuIcon size = "3rem"/>
  </Toggleview>)
}



const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
}

const framerSidebarPanel = {
  initial: { x: '100%' },
  animate: { x: 0 },
  exit: { x: '100%' },
  transition: { duration: 0.3 },
}

const framerText = delay => {
  return {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.5 + delay / 10,
    },
  }
}