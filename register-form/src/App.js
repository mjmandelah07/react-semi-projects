import './App.css';
import { useState } from 'react';


function App() {

  // state values
  const [form, setForm] = useState(
    {
      name: '',
      email: '',
      description: '',
      country: 'us',
      gender: '',
      agree: false
    }
  );


  // onchange function
  const handleChange = (e) => {
    const { value, type, checked, name } = e.target
    setForm((state) => ({
      ...state,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="wrapper">
      <div className='formImg'></div>
      <form>
        <div className='inputField'>
          <h1>REGISTER TO ORDER</h1>
          <div className="mb-3">
            <input type="text" onChange={handleChange} name='name' value={form.name} className="form-control textField" id="name" placeholder="Enter Your Name" />
          </div>
          <div className="mb-3">
            <input type="email" onChange={handleChange} name='email' value={form.email} className="form-control textField" id="email" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <input type="text" onChange={handleChange} name='description' value={form.description} className="form-control textField" id="description" placeholder="Enter A Description" />
          </div>
          <div className="mb-3">
            <select class="form-select textField" onChange={handleChange} name='country' value={form.country} aria-label="Default select example">
              <option selected>Select Your Country</option>
              <option value="nigeria">Nigeria</option>
              <option value="ghana">Ghana</option>
              <option value="us">United State</option>
              <option value="uk">United Kingdom</option>
              <option value="estonia">Estonia</option>
            </select>
          </div>
          <div className="mb-1">
            <div class="form-check form-check-inline genderLabel">
              <label class="form-check-label" for="gender">
                Gender:
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" onChange={handleChange} name="gender" id="male" value="male" checked={form.gender === "male"} />
              <label class="form-check-label" for="male">
                male
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" onChange={handleChange} name="gender" id="female" value="female" checked={form.gender === "female"} />
              <label class="form-check-label" for="female">
                female
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" onChange={handleChange} name="gender" id="other" value="other" checked={form.gender === "other"} />
              <label class="form-check-label" for="other">
                other
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label class="form-check-label" for="agree">
              Agree:
            </label>
            <input class="form-check-input mx-5" type="checkbox" id="agree" onChange={handleChange} name='agree' value={form.agree} />
          </div>
          <div className="buttonLabel ">
            <button type="submit" onClick={handleSubmit} className="btn btn-success">SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
