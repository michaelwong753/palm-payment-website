"use client";

import {useRef, useState, useEffect} from "react"
import Link from "next/link"

function Navbar(){
    const dropdownRef = useRef(null)
    const buttonRef = useRef(null)
    const [dropdownOpen, setDropdownOpen] = useState(false); 

    useEffect(() => {
        if (!dropdownOpen) {
          document.activeElement.blur();
        } 
        else if (dropdownOpen && !dropdownRef.current.contains(document.activeElement)) {
          setDropdownOpen(false);
        }
      }, [dropdownOpen]);

    return (
        <div className="navbar bg-black text-neutral-content z-[100] relative">
            <div className="navbar-start invisible lg:visible">
                <Link href="/" className="btn btn-ghost normal-case text-xl">palmo.</Link>
            </div>
            
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link href="/" className="btn btn-ghost btn-sm rounded-btn">Home</Link>
                    <Link href="/signup" className="btn btn-ghost btn-sm rounded-btn">Sign Up</Link>
                </ul>
            </div>

            {/*<!-- Mobile menu button -->*/}
            <div className="navbar-center lg:hidden">
                <Link href="/" className="btn btn-ghost normal-case text-xl">palmo.</Link>
            </div>

            <div className="navbar-end lg:hidden">
                <div ref={dropdownRef} className="dropdown dropdown-bottom dropdown-end">
                    <label
                    ref={buttonRef}
                    tabIndex={0} 
                    onBlur={() => {
                        setDropdownOpen(false);
                      }}
                    onClick={() => {
                        setDropdownOpen(!dropdownOpen);
                    }}
                    className="btn btn-circle">
                        {dropdownOpen ?
                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg> 
                        : <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg> }
                    </label>
                    <ul 
                    tabIndex={0} 
                    className="dropdown-content menu-lg bg-black p-2 shadow rounded-box w-52"
                    onBlur={() => {
                        buttonRef.current.focus();
                      }}
                    onClick={() => {
                        setDropdownOpen(false);
                        buttonRef.current.focus();
                    }}
                    onFocus={() => {
                        setDropdownOpen(true);
                    }}
                    >
                        <li className="py-3"><Link href="/">Home</Link></li>
                        <li className="py-3"><Link href="/signup">Sign Up</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
