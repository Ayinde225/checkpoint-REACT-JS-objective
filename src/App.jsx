import "./App.css";
import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "xxxxxxxxxx",
    lastName: "xxxxxxxxxx",
    email: "xxxxxx@xxxx.xxx",
    password: "",
    confirmPassword: "",
    dateOfBirth: "xx/xx/xx",
    gender: "male",
    country: "xxx",
    profilePicture: null, // Nouveau champ pour la photo de profil
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // Gérer les changements de champ de fichier pour la photo de profil
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez votre logique de soumission de formulaire ici
  };

  return (
    <form
      className="js-validate needs-validation"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="text-center">
        <div className="mb-5">
          <h1 className="display-5">Create your account</h1>
          <p>
            Already have an account?{" "}
            <a className="link" href="./authentication-login-cover.php">
              Sign in here
            </a>
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <label className="form-label" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6 mb-4">
          <label className="form-label" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            minLength="8"
            required
          />
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleTogglePassword}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="form-label" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <div className="input-group">
          <input
            type={showConfirmPassword ? "text" : "password"}
            className="form-control"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            minLength="8"
            required
          />
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleToggleConfirmPassword}
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <label className="form-label" htmlFor="dateOfBirth">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            name="dateOfBirth"
            id="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6 mb-4">
          <label className="form-label" htmlFor="gender">
            Gender
          </label>
          <select
            className="form-select"
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="form-label" htmlFor="country">
          Country
        </label>
        <input
          type="text"
          className="form-control"
          name="country"
          id="country"
          value={formData.country}
          onChange={handleChange}
        />
      </div>

      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="checkbox"
          name="termsAccepted"
          id="termsAccepted"
          checked={isTermsAccepted}
          onChange={() => setIsTermsAccepted(!isTermsAccepted)}
          required
        />
        <label className="form-check-label" htmlFor="termsAccepted">
          I accept the <a href="#">Terms and Conditions</a>
        </label>
      </div>

      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary btn-lg">
          Create an account
        </button>
      </div>
    </form>
  );
}

export default RegistrationForm;
