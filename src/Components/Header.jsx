import {useState, useEffect, useRef } from "react"
import { FramerSidebar, FramerSidebarPanel, SideBarBabies, StyledHeader, Toggleview, TopNavbabies } from "../Utils/styled/header/header.styled";
import enoverLogo from '../assets/enovLogo.svg'
import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "@uidotdev/usehooks";
import { MdClose as CloseIcon } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { PrimaryButton } from "../Utils/styled/Buttons";
import caret from "../assets/icon/caret.svg"
import { HashLink } from "react-router-hash-link";
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

  const [addlinks, setAddLinks]= useState(false)

  const handleLinks = ()=> setAddLinks(!addlinks)

  const toggle = ()=> setIsOpen(!isOpen)
  return(<StyledHeader bg={bg}>
    <NavLink to="/">
    <img src={enoverLogo} alt="EnoverLab Logo"/>
    </NavLink>

    <TopNavbabies>
      <div className="dropdown">
      Programs <img src={caret} alt="" />
        <div className="addLinks">
          <header>
            Standard
          </header>
          <main>
          {standard.map((links)=> <MenuItems2  link={links.linkto}>{links.linkName}</MenuItems2>)}
          </main>
          <header>
            Advanced
          </header>
          <main>
          {advanced.map((links)=> <MenuItems link={links.linkto}>{links.linkName}</MenuItems>)}
          </main>
          <header>
            International
          </header>
          <main>
          {international.map((links)=> <MenuItems link={links.linkto}>{links.linkName}</MenuItems>)}
          </main>
        </div>
      </div>
      {Menulist.map(menu => <MenuItems link={menu.linkto}>{menu.linkName}</MenuItems>)}
    </TopNavbabies>

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
      <SideBarBabies>
      <motion.span {...framerText(0)}>
      <div>
      <p onClick={handleLinks} className="dropdown">Programs <img src={caret} alt="" /></p>
        {addlinks && (<div className="addLinks">
          <header>
            Standard
          </header>
          <main>
          {standard.map((links)=> <MenuItems2 link={links.linkto}>{links.linkName}</MenuItems2>)}
          </main>
          <header>
            Advanced
          </header>
          <main>
          {advanced.map((links)=> <MenuItems link={links.linkto}>{links.linkName}</MenuItems>)}
          </main>
          <header>
            International
          </header>
          <main>
          {international.map((links)=> <MenuItems link={links.linkto}>{links.linkName}</MenuItems>)}
          </main>
        </div>)}
      </div>
      </motion.span>
      {Menulist.map((menu, index) => <MenuItems onClick={toggle} 
      link={menu.linkto}>
        {<motion.span {...framerText(index + 1)}>
        {menu.linkName}
        </motion.span>}
        </MenuItems>)}
      </SideBarBabies>
      <motion.span {...framerText(3)}>
      <PrimaryButton Text='Contact Us' handleClick={()=>window.open("tel:09063124595")}/>
      </motion.span>
    </FramerSidebarPanel>

    </>) }
    </AnimatePresence>
    
  </StyledHeader>)
}

export default Header

const MenuItems = ({link,children, onClick})=>{
  return(<NavLink onClick={onClick} to={link} style={({isActive})=>{return {
    fontWeight : isActive ? 700 : 400
  }}}>
    {children}
  </NavLink>)
}

const MenuItems2 = ({link,children})=>{
  return(<HashLink to={link} >
    {children}
  </HashLink>)
}


const MenuToggle = ({tog, open})=>{
  return(<Toggleview onClick={tog}>
     <MenuIcon size = "3rem"/>
  </Toggleview>)
}

const standard = [
  {
    linkName : 'Online Product Management',
    linkto : '/programs#online',
  },
  {
    linkName : 'Onsite Product Management',
    linkto : '/programs#onsite',
  },
]

const advanced = [
  {
    linkName : 'AI Product Management',
    linkto : '/aipmp',
  },
  {
    linkName : 'Growth Product Management',
    linkto : '/growthpm',
  },
  {
    linkName : 'Technical Product Management',
    linkto : '/technicalpm',
  },
]

const international = [
  {
    linkName : 'Diaspora Program',
    linkto : '/diaspora',
  },
  {
    linkName : 'Kenya Program',
    linkto : '/kenya',
  },
]


const Menulist = [
  {
    linkName : 'Blog',
    linkto : '/blog',
  },
  {
    linkName : 'Free Resources',
    linkto : '/resources',
  },
]



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