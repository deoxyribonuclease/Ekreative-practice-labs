import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const ContactInfo = ({ nextStep, updateUserData, userData }) => {
    const [socials, setSocials] = useState(
        userData.contacts?.socials
    );

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: userData.contacts?.email || userData.email || '',
            phone: userData.contacts?.phone || userData.phone || ''
        }
    });

    const addMoreSocial = () => {
        setSocials([...socials, { platform: 'Skype', username: '' }]);
    };

    const updateSocial = (index, field, value) => {
        const updatedSocials = [...socials];
        updatedSocials[index][field] = value;
        setSocials(updatedSocials);
    };

    const removeSocial = (index) => {
        const updatedSocials = socials.filter((_, i) => i !== index);
        setSocials(updatedSocials);
    };

    const onSubmit = (data) => {
        const filteredSocials = socials.filter(social =>
            social.platform && social.username.trim() !== ''
        );

        updateUserData({
            contacts: {
                email: data.email,
                phone: data.phone,
                socials: filteredSocials
            }
        });
        nextStep();
    };

    const socialIcons = {
        'Skype': 'S',
        'Facebook': 'F',
        'Instagram': 'I',
        'Twitter': 'T',
        'Telegram': 'TG',
        'WhatsApp': 'W',
        'LinkedIn': 'L'
    };

    return (
        <div className="form-step">
            <h2 style={{fontSize:"32px"}}>Profile info</h2>
            <p className="form-description">
                Fill in the data for profile. It will take a couple of minutes.
                You only need a passport.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="contacts-section">
                    <div className="border-container">
                    <h3>Contacts</h3>
                    <p>These contacts are used to inform about orders</p>
                    <div className="form-group">
                        <div className="contact-input">
                            <span className="contact-icon">✉</span>
                            <input
                                type="email"
                                defaultValue={userData.email}
                                {...register("email", { required: "Email is required" })}
                            />
                        </div>
                        {errors.email && <span className="error">{errors.email.message}</span>}
                    </div>
                    <div className="form-group">
                        <div className="contact-input">
                            <span className="contact-icon">✆</span>
                            <input
                                type="tel"
                                defaultValue={userData.phone}
                                {...register("phone", { required: "Phone is required" })}
                            />
                        </div>
                        {errors.phone && <span className="error">{errors.phone.message}</span>}
                    </div>

                    <div className="social-networks">
                        <h3>Social network</h3>
                        <p>Indicate the desired communication method</p>

                        {socials.map((social, index) => (
                            <div className="social-input" key={index}>
                                <div className="platform-select">
                                    <span className="social-icon">
                                        {socialIcons[social.platform] || 'S'}
                                    </span>
                                    <select
                                        value={social.platform}
                                        onChange={(e) => updateSocial(index, 'platform', e.target.value)}
                                    >
                                        <option value="Skype">Skype</option>
                                        <option value="Facebook">Facebook</option>
                                        <option value="Instagram">Instagram</option>
                                        <option value="Twitter">Twitter</option>
                                        <option value="Telegram">Telegram</option>
                                        <option value="WhatsApp">WhatsApp</option>
                                        <option value="LinkedIn">LinkedIn</option>
                                    </select>
                                </div>
                                <input
                                    className="social-text-input"
                                    type="text"
                                    value={social.username}
                                    onChange={(e) => updateSocial(index, 'username', e.target.value)}
                                    placeholder="@username"
                                />
                                {socials.length > 1 && (
                                    <button
                                        type="button"
                                        className="remove-social-btn"
                                        onClick={() => removeSocial(index)}
                                    >
                                        ✖
                                    </button>
                                )}
                            </div>
                        ))}
                        <button type="button" className="add-more" onClick={addMoreSocial}>
                             Add More
                        </button>
                    </div>
                    </div>
                </div>

                <button type="submit" className="button primary" style={{marginTop:"20px"}}>Go Next →</button>
            </form>
        </div>
    );
};

export default ContactInfo;