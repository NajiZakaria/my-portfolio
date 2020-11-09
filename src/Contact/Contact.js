import React from 'react'
import "./Contact.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Contact() {
    return (
        <div className="contact">
            <h1>Contact</h1>
            <h2>Get In Touch</h2>
            {/* <p>I'm currently looking for any new opportunities</p> */}
            <a href="mailto:najizakaria27@gmail.com"><MailIcon/>Say Hello</a>
            <a href="https://github.com/NajiZakaria/"><GitHubIcon/>Check It</a>
            <a href="https://www.linkedin.com/in/najizakaria/"><LinkedInIcon/>Visit It</a> 
        </div>
    )
}

export default Contact
