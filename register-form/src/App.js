import "./App.css";
import { useState } from "react";

function App() {
  // state values
  const [form, setForm] = useState({
    name: "",
    email: "",
    description: "",
    country: "us",
    gender: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});

  // onchange function
  const handleChange = (e) => {
    const { value, type, checked, name } = e.target;
    setForm((state) => ({
      ...state,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    const newErrors = {};

    if (form.name === "") {
      newErrors.name = "Name is required.";
    }
    if (form.email === "") {
      newErrors.email = "Email is required.";
    } else if (!isValidEmail(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (form.gender === "") {
      newErrors.gender = "Gender is required.";
    }
    if (form.agree === false) {
      newErrors.agree = "You must agree to the terms and conditions.";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      setForm({
        name: "",
        email: "",
        description: "",
        country: "us",
        gender: "",
        agree: false,
      });
    }
  };

  const isValidEmail = (value) => {
    // Email format validation using a simple regular expression
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(value);
  };

  // {errorMessage && <div className="error"> {errorMessage} </div>}

  return (
    <div className="container d-flex">
      <div className="row g-0 row-repo">
        <div className="col-12 col-md-4">
          <div className="formImg"></div>
        </div>
        <div className="col-12 col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="inputField">
              <h1>REGISTER TO ORDER</h1>
              <div className="mb-3">
                <input
                  type="text"
                  onChange={handleChange}
                  name="name"
                  value={form.name}
                  className="form-control textField"
                  id="name"
                  placeholder="Enter Your Name"
                />
                {errors.name && <span>* {errors.name}</span>}
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  onChange={handleChange}
                  name="email"
                  value={form.email}
                  className="form-control textField"
                  id="email"
                  placeholder="name@example.com"
                />
                {errors.email && <span>* {errors.email}</span>}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  onChange={handleChange}
                  name="description"
                  value={form.description}
                  className="form-control textField"
                  id="description"
                  placeholder="Enter A Description"
                />
              </div>
              <div className="mb-3">
                <select
                  class="form-select textField"
                  onChange={handleChange}
                  name="country"
                  value={form.country}
                  aria-label="Default select example"
                >
                  <option selected>Select Your Country</option>
                  <option value="nigeria">Nigeria</option>
                  <option value="ghana">Ghana</option>
                  <option value="us">United State</option>
                  <option value="uk">United Kingdom</option>
                  <option value="estonia">Estonia</option>
                </select>
              </div>
              <div className="mb-1 radio-div">
                <div className="form-check form-check-inline genderLabel">
                  <label class="form-check-label" for="gender">
                    Gender:
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    onChange={handleChange}
                    name="gender"
                    id="male"
                    value="male"
                    checked={form.gender === "male"}
                  />
                  <label class="form-check-label" for="male">
                    male
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    onChange={handleChange}
                    name="gender"
                    id="female"
                    value="female"
                    checked={form.gender === "female"}
                  />
                  <label class="form-check-label" for="female">
                    female
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    onChange={handleChange}
                    name="gender"
                    id="other"
                    value="other"
                    checked={form.gender === "other"}
                  />
                  <label class="form-check-label" for="other">
                    other
                  </label>
                </div>
                {errors.gender && <span>* {errors.gender}</span>}
              </div>
              <div className="mb-3 agree-div">
                <label className="form-check-label" for="agree">
                  Agree:
                </label>
                <input
                  class="form-check-input mx-2"
                  type="checkbox"
                  id="agree"
                  onChange={handleChange}
                  name="agree"
                  value={form.agree}
                />
                {errors.agree && <span>* {errors.agree}</span>}
              </div>

              <div className="buttonLabel ">
                <button type="submit" className="btn btn-success">
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
