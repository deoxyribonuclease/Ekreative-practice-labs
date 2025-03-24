import React from 'react';
import { useForm } from 'react-hook-form';

export const VerifyPhone = ({ nextStep, prevStep, phone }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const verificationCode = "1234";

    const onSubmit = (data) => {
        if (data.code === verificationCode) {
            nextStep();
        } else {
            alert("1234");
        }
    };

    return (
        <div className="form-step">
            <h2 style={{fontSize:"32px"}}>Registration</h2>
            <p className="form-description">
                Fill in the registration data. It will take a couple of minutes.
                All you need is a phone number and e-mail
            </p>

            <div className="phone-display">
                <p>{phone}</p>
                <p className="status-text">Number not confirmed yet</p>
                <button className="edit-button" onClick={prevStep}><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path fill="#2684ff" d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z"/>
                    </g>
                </svg>
                </button>
            </div>


            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Confirmation code</label>
                    <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                        <input
                            className="conf-code"
                            type="text"
                            placeholder="————"
                            max={4}
                            maxLength={4}
                            style={{ flex: '1' }}
                            {...register("code", {
                                required: "Verification code is required"
                            })}
                        />
                        <button
                            type="button"
                            className="button link"
                            onClick={() => alert("Код 1234")}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50" style={{paddingTop:'13px'}}>
                                <path fill="#2684ff" d="M 25 2 A 2.0002 2.0002 0 1 0 25 6 C 35.517124 6 44 14.482876 44 25 C 44 35.517124 35.517124 44 25 44 C 14.482876 44 6 35.517124 6 25 C 6 19.524201 8.3080175 14.608106 12 11.144531 L 12 15 A 2.0002 2.0002 0 1 0 16 15 L 16 4 L 5 4 A 2.0002 2.0002 0 1 0 5 8 L 9.5253906 8 C 4.9067015 12.20948 2 18.272325 2 25 C 2 37.678876 12.321124 48 25 48 C 37.678876 48 48 37.678876 48 25 C 48 12.321124 37.678876 2 25 2 z"></path>
                            </svg>

                            Send again
                        </button>
                    </div>
                    {errors.code && <span className="error">{errors.code.message}</span>}
                    <p className="hint-text">Confirm phone number with code from sms message</p>
                </div>

                <div className="action-buttons" style={{justifyContent: 'flex-start'}}>
                    <button type="submit" className="button primary">Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default VerifyPhone;