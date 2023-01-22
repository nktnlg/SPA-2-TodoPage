import React from "react";
import './Footer.scss'
import MidFooter from "./MidFooter";
import TopFooter from "./TopFooter";
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
