import { useState } from 'react';
import type { ContactFormData } from '../types';

const ContactsPage = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Отправка на Formspree
        try {
            const response = await fetch('https://formspree.io/f/ТВОЙ_УНИКАЛЬНЫЙ_КОД', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus('idle'), 3000);
        }
    };

    return (
        <div className="contacts-page">
            <h1>Свяжитесь с нами</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Ваше имя *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="phone">Телефон</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="message">Сообщение *</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Отправка...' : 'Отправить'}
                </button>
                
                {submitStatus === 'success' && (
                    <div className="success-message">Сообщение отправлено! Мы свяжемся с вами.</div>
                )}
                {submitStatus === 'error' && (
                    <div className="error-message">Ошибка отправки. Попробуйте позже.</div>
                )}
            </form>
        </div>
    );
};

export default ContactsPage;