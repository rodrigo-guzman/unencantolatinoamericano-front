import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contacto.module.css';
import ReCAPTCHA from 'react-google-recaptcha';

const Contacto = () => {
    function onChange() {
        console.log("Captcha value:");
    }
    const [formData, setFormData] = useState({
        user_name: '',
        user_last_name: '',
        user_email: '',
        user_message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const contacto = (e: React.FormEvent) => {
        e.preventDefault();
        const formElement = e.target as HTMLFormElement;

        emailjs
            .sendForm('service_v87e4gd', 'template_oeyei6v', formElement, '7gvuxjIozpnx56V-U')
            .then((response) => {
                console.log('Correo enviado con éxito:', response);
                setSubmitted(true);
            })
            .catch((error) => {
                console.error('Error al enviar el correo:', error);
            });
    };

    const handleCaptchaChange = (value: string | null) => {
        console.log('Captcha value:', value);
    };

    return (
        <div className={styles.divForm}>
            {!submitted ? (
                <form className={styles.formMail} onSubmit={contacto}>
                    <label>Nombre</label>
                    <input type="text" name="user_name" />
                    <label>Apellido</label>
                    <input type="text" name="user_last_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Mensaje</label>
                    <textarea name="user_message" cols={30} rows={10}></textarea>
                    <div className={styles.recaptcha}>
                        < ReCAPTCHA
                            sitekey="6Lf8YOUoAAAAALHV4dociq1rhRhggQ0YFQRF91Oz"
                            onChange={onChange}
                        />
                    </div>
                    <button>Enviar</button>

                </form>

            ) : (
                <p className="message">Gracias por comunicarte con nosotros!</p>
            )}
        </div>
    );
};

export default Contacto;



