import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const PhoneRegistration = ({ nextStep, updateUserData, userData }) => {
    const [isPrivacyNoticeVisible, setPrivacyNoticeVisible] = useState(true);
    const countryCodes = [
        { code: "+380", country: "Ukraine" },
        { code: "+1", country: "USA" },
        { code: "+44", country: "UK" },
        { code: "+49", country: "Germany" },
        { code: "+33", country: "France" },
        { code: "+81", country: "Japan" },
        { code: "+61", country: "Australia" },
        { code: "+7", country: "Russia" },
        { code: "+86", country: "China" },
        { code: "+91", country: "India" }
    ];

    const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodes[0].code);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            phone: userData.phone || '',
        }
    });

    const onSubmit = (data) => {
        const formattedPhone = `${selectedCountryCode} ${data.phone}`;
        updateUserData({ phone: formattedPhone });
        nextStep();
    };

    const handleClosePrivacyNotice = () => {
        setPrivacyNoticeVisible(false);
    };

    const handleCountryCodeChange = (e) => {
        setSelectedCountryCode(e.target.value);
    };

    return (
        <div className="form-step">
            <h2 style={{fontSize:"32px"}}>Registration</h2>
            <p className="form-description">
                Fill in the registration data. It will take a couple of minutes. All you need is a phone number and e-mail
            </p>

            {isPrivacyNoticeVisible && (
                <div className="privacy-notice">
                    <div className="privacy-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                            <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.300781 20 6 21.300781 6 23 L 6 47 C 6 48.699219 7.300781 50 9 50 L 41 50 C 42.699219 50 44 48.699219 44 47 L 44 23 C 44 21.300781 42.699219 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 25 30 C 26.699219 30 28 31.300781 28 33 C 28 33.898438 27.601563 34.6875 27 35.1875 L 27 38 C 27 39.101563 26.101563 40 25 40 C 23.898438 40 23 39.101563 23 38 L 23 35.1875 C 22.398438 34.6875 22 33.898438 22 33 C 22 31.300781 23.300781 30 25 30 Z"></path>
                        </svg>
                    </div>
                    <div className="privacy-text">
                        We take privacy issues seriously. You can be sure that your personal data is securely protected.
                    </div>
                    <button className="close-notice" onClick={handleClosePrivacyNotice}>×</button>
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <div className="border-container">
                        <label>Enter your phone number</label>
                        <div className="phone-input">
                            <select
                                className="country-code"
                                value={selectedCountryCode}
                                onChange={handleCountryCodeChange}
                            >
                                {countryCodes.map((item, index) => (
                                    <option key={index} value={item.code}>
                                        {item.code} ({item.country})
                                    </option>
                                ))}
                            </select>

                            <input
                                type="tel"
                                placeholder="XXX XXX XXXX"
                                {...register("phone", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^[\d\s]+$/,
                                        message: "Please enter a valid phone number"
                                    }
                                })}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, '');
                                    let formattedValue = '';
                                    if (value.length <= 3) {
                                        formattedValue = value;
                                    } else if (value.length <= 6) {
                                        formattedValue = `${value.slice(0, 3)} ${value.slice(3)}`;
                                    } else {
                                        formattedValue = `${value.slice(0, 3)} ${value.slice(3, 6)} ${value.slice(6, 10)}`;
                                    }
                                    e.target.value = formattedValue;
                                }}
                            />
                        </div>
                        {errors.phone && <span className="error">{errors.phone.message}</span>}
                    </div>
                </div>

                <button type="submit" className="button primary">Send Code</button>
            </form>
        </div>
    );
};

export default PhoneRegistration;