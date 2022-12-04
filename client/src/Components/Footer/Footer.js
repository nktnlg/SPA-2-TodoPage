import React from "react";
import './Footer.css'
import MidFooter from "./MidFooter/MidFooter";
import TopFooter from "./TopFooter/TopFooter";
import BotFooter from "./BotFooter";

const Footer = ()=>{
    return (
    <div id="footer" className="footer">
    <TopFooter/>
    <MidFooter/>
    <BotFooter/>
    </div>
    )
};

export default Footer;
