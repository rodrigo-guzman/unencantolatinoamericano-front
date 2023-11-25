"use client";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contacto.module.css';
import ReCAPTCHA from 'react-google-recaptcha';

const Contacto = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_last_name: '',
        user_email: '',
        user_message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!captchaValue) {
            console.error('Por favor, verifica el reCAPTCHA.');
            return;
        }

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
        setCaptchaValue(value);
    };

    return (
        <div className={styles.divForm}>
            {!submitted ? (
                <form className={styles.formMail} onSubmit={handleFormSubmit}>
                    <label>Nombre</label>
                    <input type="text" name="user_name" onChange={handleInputChange} />
                    <label>Apellido</label>
                    <input type="text" name="user_last_name" onChange={handleInputChange} />
                    <label>Email</label>
                    <input type="email" name="user_email" onChange={handleInputChange} />
                    <label>Mensaje</label>
                    <textarea name="user_message" cols={30} rows={10} onChange={handleInputChange}></textarea>
                    <div className={styles.recaptcha}>
                        <ReCAPTCHA
                            sitekey="6LekFhIpAAAAAPGX_BP61U0WIuhlsNfnbDR-gI62"
                            onChange={handleCaptchaChange}
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            ) : (
                <p className="message">¡Gracias por comunicarte con nosotros!</p>
            )}
        </div>
    );
};

export default Contacto;
