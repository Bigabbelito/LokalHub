import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect (() => {
        const handleScroll = () => {
            if(window.scrollY > 100) {
                setIsSticky(true); 
            }
            else {
                setIsSticky(false);
            }
        };
        
    })
    return (
        <>
        <h1>Navbar</h1>
        </>
    )
}

export default Navbar;