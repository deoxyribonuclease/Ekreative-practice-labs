import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const PersonalInfo = ({ nextStep, updateUserData, userData }) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: {
            firstName: userData.firstName || '',
            lastName: userData.lastName || '',
            dateOfBirth: userData.dateOfBirth || '',
            placeOfBirth: userData.placeOfBirth || '',
            itin: userData.itin || '123-45-678',
            termsAgreed: false
        }
    });

    useEffect(() => {
        setValue("itin", "123-45-678");
    }, [setValue]);

    const onSubmit = (data) => {
        const submittedData = {
            ...data,
            itin: "123-45-678"
        };

        updateUserData({
            firstName: submittedData.firstName,
            lastName: submittedData.lastName,
            dateOfBirth: submittedData.dateOfBirth,
            placeOfBirth: submittedData.placeOfBirth,
            itin: submittedData.itin
        });
        nextStep();
    };

    return (
        <div className="form-step">
            <h2 style={{fontSize:"32px"}}>Profile info</h2>
            <p className="form-description">
                Fill in the data for profile. It will take a couple of minutes.
                You only need a passport.
            </p>

            <div className="terms-agreement">
                <input
                    type="checkbox"
                    id="terms"
                    {...register("termsAgreed", { required: "You must agree to terms" })}
                />
                <label htmlFor="terms">I agree with <a href="/" className="terms-link">Terms of use</a></label>
                {errors.termsAgreed && <span className="error" style={{marginLeft:"20px"}}>{errors.termsAgreed.message}</span>}
            </div>


            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="border-container">
                    <div className="personal-data-section">
                        <h3>Personal data</h3>
                        <p>Specify exactly as in your passport</p>

                        <div className="form-group">
                            <label>First name</label>
                            <input
                                type="text"
                                placeholder="First name"
                                {...register("firstName", {required: "First name is required"})}
                            />
                            {errors.firstName && <span className="error">{errors.firstName.message}</span>}
                        </div>

                        <div className="form-group">
                            <label>Second name</label>
                            <input
                                type="text"
                                placeholder="Second name"
                                {...register("lastName", {required: "Last name is required"})}
                            />
                            {errors.lastName && <span className="error">{errors.lastName.message}</span>}
                        </div>

                        <div className="dob-pob">
                            <div className="form-group">
                                <label>Date of Birth</label>
                                <input
                                    type="date"
                                    {...register("dateOfBirth", {required: "Date of birth is required"})}
                                />
                                {errors.dateOfBirth && <span className="error">{errors.dateOfBirth.message}</span>}
                            </div>

                            <div className="form-group" >
                                <label>Place of Birth</label>
                                <select {...register("placeOfBirth", {required: "Place of birth is required"})}>
                                    <option value="">Select</option>
                                    <option value="Lviv, Ukraine">Lviv, Ukraine</option>
                                    <option value="Cherkasy, Ukraine">Cherkasy, Ukraine</option>
                                    <option value="Kyiv, Ukraine">Kyiv, Ukraine</option>
                                </select>
                                {errors.placeOfBirth && <span className="error">{errors.placeOfBirth.message}</span>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-container" style={{marginTop:"20px"}}>
                    <div className="form-group" style={{marginBottom: "0"}}>
                        <label>123-45-678</label>
                        <input
                            type="hidden"
                            {...register("itin")}
                        />
                        <p className="hint-text">Your ITIN</p>
                    </div>
                </div>
                <button type="submit" className="button primary" style={{marginTop: "20px"}}>Go Next →</button>
            </form>
        </div>
    );
};

export default PersonalInfo;