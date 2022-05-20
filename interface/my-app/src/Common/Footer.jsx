import React from "react";

const Footer = () => {
    const style = {
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        textAlign: "center"
    }
    return (
        <>
        <footer className="w-100 bg-light text-center" style={style}>
            <p>Ⓒ 2022 Let's Locate. All Rights Reserved | Terms and Condition Applied.</p>
        </footer>
        </>
    )
}

export default Footer;