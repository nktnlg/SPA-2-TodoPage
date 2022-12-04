import React from "react";
import './MidFooter.css'
import '../Footer.css'

const MidFooter = ()=>{
    return (
    <div id="footer-mid" className="footer-mid">
        <div id="footer-mid-grid" className="footer-mid-grid">
            <div id="footer-mid-grid-about">
                <h5 id="footer-about-title" className="footer-title">Alex Nikitin</h5>
                <p id="footer-about-text">This web-site is an example of a web-application built using React.js framework on plain css.</p>
            </div>
            <div id="footer-mid-grid-portfolio">
                <h5 id="footer-portfolio-title" className="footer-title">Portfolio cases</h5>
                <div id="footer-portfolio-grid" className="footer-column-grid">        
                    <a id="footer-portfolio-1" href="https://fathomless-oasis-87358.herokuapp.com/" rel="noreferrer" target="_blank" className="link">MEAN Chat</a>
                    <a id="footer-portfolio-2" href="https://mern-chat-nktnlg.herokuapp.com/" rel="noreferrer" target="_blank" className="link">MERN Chat</a>
                    <a id="footer-portfolio-3" href="https://github.com/nktnlg/Project-2-JS-exercise-library" rel="noreferrer" target="_blank" className="link">JS Exercises</a>
                    <a id="footer-portfolio-4" href="https://page-draft.firebaseapp.com/" rel="noreferrer" target="_blank" className="link">Learning center</a>
                </div>
            </div>
            <div id="footer-mid-grid-useful">
                <h5 id="footer-useful-title" className="footer-title">Useful links</h5>
                <div id="footer-useful-grid" className="footer-column-grid">
                    <a id="footer-useful-1" href="/" rel="noreferrer" target="_blank" className="link">About me</a>
                    <a id="footer-useful-2" href="/" rel="noreferrer" target="_blank" className="link">Services pricing</a>
                    <a id="footer-useful-3" href="/" rel="noreferrer" target="_blank" className="link">Feedback</a>
                    <a id="footer-useful-4" href="/" rel="noreferrer" target="_blank" className="link">Help</a>
                </div>
            </div>
            <div id="footer-mid-grid-contacts">
                <h5 id="footer-contacts-title" className="footer-title">Contacts</h5>
                <p id="footer-contacts-email"  className="footer-contacts">
                    <svg id="footer-contacts-email-svg" className="footer-contacts-svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path id="footer-contacts-email-path" 
                            fill="#3f3f3f" 
                            d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">  
                            </path>
                    </svg>
                    2eleven94@gmail.com</p>
                <p id="footer-contacts-phone" className="footer-contacts">
                    <svg id="footer-contacts-phone-svg" className="footer-contacts-svg" 
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="phone"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                            <path id="footer-contacts-phone-path" fill="#3f3f3f"
                            d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
                            </path>
                    </svg>
                    + 7 965 33 4 666 4</p>
            </div>
        </div>
    </div>)
};

export default MidFooter;