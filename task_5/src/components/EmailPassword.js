import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const EmailPassword = ({ nextStep, updateUserData, userData }) => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
            email: userData.email || '',
            password: userData.password || '',
        }
    });

    const password = watch("password", "");
    const passwordStrength = getPasswordStrength(password);

    function getPasswordStrength(password) {
        if (!password) return "";
        if (password.length < 6) return "weak";
        if (password.length < 10) return "medium";
        return "good";
    }

    const onSubmit = (data) => {
        updateUserData({ email: data.email, password: data.password });
        nextStep();
    };

    return (
        <div className="form-step">
            <h2 style={{fontSize:"32px"}}>Registration</h2>
            <p className="form-description">
                Fill in the registration data. It will take a couple of minutes.
                All you need is a phone number and e-mail
            </p>

            <div className="phone-confirmed">
                <p>+1 555 555-1234</p>
                <span className="check-icon">✓</span>
                <p className="status-text">Number confirmed</p>
            </div>


            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="border-container">
                    <div className="form-group">
                        <label>Enter your email</label>
                        <input
                            type="email"
                            placeholder="example@domain.com"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                        />
                        {errors.email && <span className="error">{errors.email.message}</span>}
                    </div>

                    <div className="form-group" style={{marginBottom:"0"}}>
                        <label>Set a password</label>
                        <div className="password-input">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters"
                                    }
                                })}
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                👁
                            </button>
                        </div>
                    </div>
                        {errors.password && <span className="error">{errors.password.message}</span>}
                        {password && (
                            <div className={`password-strength ${passwordStrength}`}>
                                <span className="check-icon">✓</span>
                                {passwordStrength === "good" && "Good password"}
                                {passwordStrength === "medium" && "Medium password"}
                                {passwordStrength === "weak" && "Weak password"}
                            </div>
                        )}
                </div>
                    <button type="submit" className="button primary" style={{marginTop:"20px"}}>Register Now</button>
            </form>
        </div>
);
};
export default EmailPassword;