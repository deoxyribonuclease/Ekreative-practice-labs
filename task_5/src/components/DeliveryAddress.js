import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export const DeliveryAddress = ({ onSubmit, updateUserData, userData }) => {
    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
        defaultValues: {
            street: userData.address?.street || '',
            city: userData.address?.city || '',
            country: userData.address?.country || 'USA',
            zipCode: userData.address?.zipCode || '',
            optional: userData.address?.optional || ''
        }
    });

    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const watchCountry = watch('country');
    const [selectedCountry, setSelectedCountry] = useState(userData.address?.country || 'USA');

    useEffect(() => {
        fetch('https://countriesnow.space/api/v0.1/countries/positions')
            .then(response => response.json())
            .then(data => {
                if (data.data) {
                    setCountries(data.data);
                }
            })
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    useEffect(() => {
        if (watchCountry) {
            setSelectedCountry(watchCountry);
        }
    }, [watchCountry]);

    useEffect(() => {
        if (selectedCountry) {
            fetch('https://countriesnow.space/api/v0.1/countries/cities', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ country: selectedCountry }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.data) {
                        setCities(data.data);
                        if (userData.address?.city && userData.address?.country === selectedCountry) {
                            setValue('city', userData.address.city);
                        }
                    }
                })
                .catch(error => console.error('Error fetching cities:', error));
        }
    }, [selectedCountry, setValue, userData.address]);

    const handleCountryChange = (e) => {
        const country = e.target.value;
        setValue('country', country);
        setValue('city', '');
    };

    const submitForm = (data) => {
        userData.address = {
            street: data.street,
            city: data.city,
            country: data.country,
            zipCode: data.zipCode,
            optional: data.optional || ''
        };
        onSubmit();
        alert("Дані в консолі");
    };

    return (
        <div className="form-step">
            <h2 style={{ fontSize: "32px" }}>Profile info</h2>
            <p className="form-description">
                Fill in the data for profile. It will take a couple of minutes.
                You only need a passport.
            </p>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="address-section">
                    <div className="border-container">
                        <h3>Delivery address</h3>
                        <p>Used for shipping orders</p>

                        <div className="form-group">
                            <label>Address</label>
                            <input
                                type="text"
                                placeholder="Street address"
                                {...register("street", { required: "Address is required" })}
                            />
                            {errors.street && <span className="error">{errors.street.message}</span>}
                        </div>

                        <div className="form-group">
                            <label>City</label>
                            <select
                                {...register("city", { required: "City is required" })}
                            >
                                <option value="">Select city</option>
                                {cities.map((city, index) => (
                                    <option key={index} value={city}>{city}</option>
                                ))}
                            </select>
                            {errors.city && <span className="error">{errors.city.message}</span>}
                        </div>

                        <div className="country-zip">
                            <div className="form-group">
                                <label>Country</label>
                                <select
                                    {...register("country", { required: "Country is required" })}
                                    onChange={handleCountryChange}
                                >
                                    <option value="">Select country</option>
                                    {countries.map((country, index) => (
                                        <option key={index} value={country.name}>{country.name}</option>
                                    ))}
                                </select>
                                {errors.country && <span className="error">{errors.country.message}</span>}
                            </div>

                            <div className="form-group">
                                <label>Zip code</label>
                                <input
                                    type="text"
                                    placeholder="Zip code"
                                    {...register("zipCode", { required: "Zip code is required" })}
                                />
                                {errors.zipCode && <span className="error">{errors.zipCode.message}</span>}
                            </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: "0" }}>
                            <label>Optional</label>
                            <input
                                type="text"
                                placeholder="Apartment, suite, unit, etc. (optional)"
                                {...register("optional")}
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className="button primary" style={{ marginTop: "20px" }}>Save</button>
            </form>
        </div>
    );
};

export default DeliveryAddress;
