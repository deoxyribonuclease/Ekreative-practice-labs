import React, { useState } from 'react';
import { PhoneRegistration } from './components/PhoneRegistration';
import { VerifyPhone } from './components/VerifyPhone';
import { EmailPassword } from './components/EmailPassword';
import { PersonalInfo } from './components/PersonalInfo';
import { ContactInfo } from './components/ContactInfo';
import { DeliveryAddress } from './components/DeliveryAddress';
import Header from './components/Header';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    phone: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    placeOfBirth: '',
    itin: '',
    contacts: {
      email: '',
      phone: '',
      socials: []
    },
    address: {
      street: '',
      city: '',
      country: '',
      zipCode: ''
    }
  });

  const updateUserData = (data) => {
    setUserData(prevData => ({ ...prevData, ...data }));
  };

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleFinalSubmit = () => {
    console.log('User registration data:', userData);
  };

  const calculateProgress = () => {
    if (step === 1) return 1;
    if (step === 2) return 1;
    if (step === 3) return 2;
    if (step === 4 || step === 5) return 3;
    if (step === 6) return 3;
    return 1;
  };

  return (
      <div className="app-container">
        <Header currentStep={calculateProgress()} totalSteps={3} />

        <div className="app">
          <div className="form-container">
            <div className="form-content">
              {step === 1 && (
                  <PhoneRegistration
                      nextStep={nextStep}
                      updateUserData={updateUserData}
                      userData={userData}
                  />
              )}
              {step === 2 && (
                  <VerifyPhone
                      nextStep={nextStep}
                      prevStep={prevStep}
                      phone={userData.phone}
                  />
              )}
              {step === 3 && (
                  <EmailPassword
                      nextStep={nextStep}
                      updateUserData={updateUserData}
                      userData={userData}
                  />
              )}
              {step === 4 && (
                  <PersonalInfo
                      nextStep={nextStep}
                      updateUserData={updateUserData}
                      userData={userData}
                  />
              )}
              {step === 5 && (
                  <ContactInfo
                      nextStep={nextStep}
                      updateUserData={updateUserData}
                      userData={userData}
                  />
              )}
              {step === 6 && (
                  <DeliveryAddress
                      onSubmit={handleFinalSubmit}
                      updateUserData={updateUserData}
                      userData={userData}
                  />
              )}
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;