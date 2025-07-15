import React, { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import toastr from "toastr";
import "toastr/build/toastr.min.css";

toastr.options = {
    positionClass: "toast-top-right",
    timeOut: "3000",
    closeButton: true,
    progressBar: true,
    preventDuplicates: true,
    newestOnTop: true,
    showDuration: "300",
    hideDuration: "1000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut"
};

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                toastr.success("Correo enviado correctamente!");
                e.target.reset();
            })
            .catch((error) => {
                toastr.error("Error al enviar correo, intenta nuevamente.");
                console.error(error.text);
            });
    };

    return (
        <div className="container-form">
            <h3>Send me a message</h3>
            <p>Fill out the form and I'll get back to you as soon as possible.</p>
            <form ref={form} onSubmit={sendEmail}>
                <div className="container-inputs">
                    <div className="container-half-input">
                        <input className="half-input" type="text" name="from_name" placeholder="Your name" required />
                        <input className="half-input" type="email" name="from_email" placeholder="Your email" required />
                    </div>
                    <input className="input-subject" type="text" name="subject" placeholder="Subject" required />
                    <textarea name="message" placeholder="Your message" required></textarea>
                </div>
                <button type="submit"><FontAwesomeIcon icon={faPaperPlane} />Send Message</button>
            </form>
        </div>
    )
};

export default ContactMe;
