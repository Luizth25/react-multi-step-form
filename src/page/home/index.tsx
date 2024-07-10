import { useState } from "react";
import { TFormData } from "./types";

import FormInfo from "../../components/Forminfo";
import Input from "../../components/Forminfo/input";

import * as s from "./styles";

const Home = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<TFormData>({
    personalInfo: { firstName: "", lastName: "" },
    contactDetails: { email: "", phone: "" },
    accountDetails: { username: "", password: "" },
  });

  const handleChange = (
    section: keyof TFormData,
    field: string,
    value: string
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  return (
    <s.Container>
      {step === 1 && (
        <FormInfo
          title="Personal Info"
          secondButton={false}
          nextButton={nextStep}
        >
          <Input
            type="text"
            placeholder="First Name"
            value={formData.personalInfo.firstName}
            onChange={(e) =>
              handleChange("personalInfo", "firstName", e.target.value)
            }
          />
          <Input
            type="text"
            placeholder="Last Name"
            value={formData.personalInfo.lastName}
            onChange={(e) =>
              handleChange("personalInfo", "lastName", e.target.value)
            }
          />
        </FormInfo>
      )}
      {step === 2 && (
        <FormInfo
          title="Contact Details"
          secondButton
          nextButton={nextStep}
          backButton={prevStep}
        >
          <Input
            type="email"
            placeholder="Email"
            value={formData.contactDetails.email}
            onChange={(e) =>
              handleChange("contactDetails", "email", e.target.value)
            }
          />
          <Input
            type="text"
            placeholder="Phone"
            value={formData.contactDetails.phone}
            onChange={(e) =>
              handleChange("contactDetails", "phone", e.target.value)
            }
          />
        </FormInfo>
      )}
      {step === 3 && (
        <FormInfo
          title="Account Details"
          secondButton
          nextButton={nextStep}
          backButton={prevStep}
        >
          <Input
            type="text"
            placeholder="Username"
            value={formData.accountDetails.username}
            onChange={(e) =>
              handleChange("accountDetails", "username", e.target.value)
            }
          />
          <Input
            type="password"
            placeholder="Password"
            value={formData.accountDetails.password}
            onChange={(e) =>
              handleChange("accountDetails", "password", e.target.value)
            }
          />
        </FormInfo>
      )}
      {step === 4 && (
        <div>
          <h2>Confirm Details</h2>
          <p>
            <strong>First Name:</strong> {formData.personalInfo.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {formData.personalInfo.lastName}
          </p>
          <p>
            <strong>Email:</strong> {formData.contactDetails.email}
          </p>
          <p>
            <strong>Phone:</strong> {formData.contactDetails.phone}
          </p>
          <p>
            <strong>Username:</strong> {formData.accountDetails.username}
          </p>
          <button onClick={prevStep}>Back</button>
          <button onClick={() => alert("Form Submitted!")}>Confirm</button>
        </div>
      )}
    </s.Container>
  );
};

export default Home;
