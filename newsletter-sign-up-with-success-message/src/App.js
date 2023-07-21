import React, { useState } from "react";
import "./App.css";
import Image from "./Image";
import successIcon from "./images/icon-success.svg";

function App() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setIsValidEmail(false);
    } else if (!validateEmail(email)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
      setIsSubmitted(true);
    }
  };

  const handleReturn = () => {
    setIsSubmitted(false);
    setEmail("");
    setIsValidEmail(true);
  };

  if (isSubmitted) {
    return (
      <div className="success-container flex flex-col justify-between px-7 pt-32 pb-4 mb-2  md:rounded-2xl md:p-7 ">
        <div className=" md:mt-0">
          <img src={successIcon} alt="success" className="success-icon md:my-4" />
          <h1 className="text-5xl font-bold leading-none my-8 md:text-3xl md:my-4 md:leading-none">
            Thanks for subscribing!
          </h1>
          <p className="">
            A confrimation email has been sent to{" "}
            <span className="font-bold">{email}</span>. Please open it and click
            the button inside to confirm your subscription
          </p>
        </div>

        <button onClick={handleReturn} className="w-full rounded-lg h-12 md:mt-10">
          Dismiss message
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col-reverse md:flex-row md:py-4 md:pl-4  md:rounded-3xl news-container">
      <div className="flex flex-col justify-between md:block  w-full py-7 px-7 md:p-7" >
        
        <h1 className="font-bold mb-3 md:mb-3">Stay updated!</h1>
        <p className="mb-5 md:mb-5">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="mb-4 md:mb-4">
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success </li>
          <li>And much more!</li>
        </ul>
       
        
        <form onSubmit={handleSubmit} className="mt-10 md:mt-10">
          <div className="flex justify-between mb-1">
            <label id="email" className="text-xs font-bold">
              Email address
            </label>
            {!isValidEmail && (
              <p className="text-xs error-msg">Valid email required</p>
            )}
          </div>

          <input
            type="text"
            id="email"
            name="email"
            value={email}
            placeholder="email@company.com"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 h-12 rounded-lg"
          />

          <button
            type="submit"
            className="mt-4 w-full h-12 rounded-lg text-xs text-center"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <Image />
    </div>
  );
}

export default App;
