import { useState } from "react";
import NavButton from "./navbutton";
import { FaGauge,FaUsers,FaGear} from "react-icons/fa6"; 


const Navbar = () => {
    const [active,setActive]=useState('dashboard')
    return (
        <section className="navbar flex item-center  px-0 py-2 
        bg-[var(--primary)] text-white lg:flex-col lg:items-start lg:h-full">

            <div className="items-center mt-6 mb-5 pt-2 px-4 lg:pt-0 lg:pb-4
           text-l lg:text-xl 
           font-bold border-b border-[var(--border-logo)] w-full text-center">
                <h1>Lending<span className="text-blue-500">Platform</span></h1>
            </div>


            <NavButton to="/" className={active === 'dashboard' ? 'active' : 'de-active'} 
            onClick={()=>setActive('dashboard')}>
               <div className="flex">
                <FaGauge className="mt-1 mr-3"/> Dashboard
               </div>
            </NavButton>
            <NavButton to="/" className={active === 'borrowers' ? 'active' : 'de-active'} 
            onClick={()=>setActive('borrowers')}>
           <div className="flex">
                <FaUsers className="mt-1 mr-3"/> Borrowers
               </div>
            </NavButton>
            <NavButton to="/" className={active === 'settings' ? 'active' : 'de-active'} 
            onClick={()=>setActive('settings')}>
           <div className="flex">
                <FaGear className="mt-1 mr-3"/> Settings
               </div>
            </NavButton>

        </section>
    )
}
export default Navbar;