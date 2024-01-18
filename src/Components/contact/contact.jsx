import './contact.scss';
import '../../App.scss';
import React from 'react';
import emailjs from '@emailjs/browser';

// CONSIDERING NOT HAVING, DON'T LIKE HOW IT LOOKS.

const Contact = (props) => {

    async function runPopup() {
        var notif = document.querySelector(".notif");
        notif.innerHTML = 'Email sent.'
        notif.style.display = "flex";
        await animateFadeIn(notif)
        await animateFadeOut(notif);
        notif.innerHTML = 'Copied to clipboard.'
      }
    
      
    function animateFadeIn(notif)
    {
    notif.animate([
        {opacity:0},
        {opacity:1}
    ], {
        duration: 1500
    });
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 2500, "done");
    });
    }

    function animateFadeOut(notif)
    {
    notif.animate([
        {opacity:1},
        {opacity:0}
    ], {
        duration: 1500
    });
    
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 2500, "done");
        notif.style.display = 'none';
    });
    }

    const sendEmail = (e) => {
        e.preventDefault();
        var email =  document.querySelector("#emailFrom")
        var message = document.querySelector("#message")

        if (email.value === null || email.value.match(/^ *$/) !== null 
            || message.value === null || message.value.match(/^ *$/) !== null) {
            alert('Please input a message and email to send.')
        } else {
            emailjs.sendForm('service_gbetzhg', 'template_143coud', e.target, 'MPu0I5sxHtoq-plVI');
            document.querySelector("#emailFrom").value = '';
            document.querySelector("#message").value = "";
            runPopup();
            
        }

        

        
    }

    return (
        <div className='container-row'>
            <div className='contact container-col'>
                <h2 className='text-head' style={{fontWeight: '500'}}>Send a Message</h2>
                <form className='contact-form' onSubmit={sendEmail}>
                    <label htmlFor='emailfrom' className='description contact-desc'>Your Email:</label>
                    <input type="text" name="emailfrom" id="emailFrom" className='input-field'></input>
                    <label htmlFor='message' className='description contact-desc'>Message:</label>
                    <textarea name="message" id="message" className='input-textarea'></textarea>
                    <div className='container-col' style={{display: 'block'}}>
                        <button type="submit" className='contact-btn'>Send Message</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;