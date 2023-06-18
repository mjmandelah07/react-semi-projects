import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import {
  FaHouseUser,
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaLock,
} from "react-icons/fa";

const Main = () => {
  const [selectedValues, setSelectedValues] = useState({
    gender: "",
    nationality: "",
  });

  // response data
  const [data, setData] = useState(null);

  // get the selected values when event is fired
  const handleSelectChange = useCallback((e) => {
    const { name, value } = e.target;
    setSelectedValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  // fetch the data from the api endpoint
  const fetchData = useCallback(async () => {
    try {
      // get the random data from the endpoint if no options are selected
      let apiUrl = "https://randomuser.me/api/";

      // Check if both select values are not empty
      if (selectedValues.gender && selectedValues.nationality) {
        apiUrl = `https://randomuser.me/api/?gender=${selectedValues.gender}&nat=${selectedValues.nationality}`;
      }

      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setData(jsonData.results[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [selectedValues]);

  // on submission fetch data
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      // Fetch data using useEffect
      fetchData();
    },
    [fetchData]
  );

  useEffect(() => {
    // Fetch data on initial load
    fetchData();
  }, [fetchData]);

  return (
    <main className="md:mx-12 sm:mx-12 mx-4 my-4">
      {/* alert section */}
      <section>
        <div className="my-4 p-4 alert-div rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6 inline mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <p className="inline">
            <strong>Click</strong> generate for random data{" "}
            <span className="text-pink-300"> Or </span> select below for the
            user data to be generated!.
          </p>
        </div>
      </section>

      {/* form section */}
      <section>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="">
              <label className="block font-bold" htmlFor="gender">
                Gender
              </label>
              <select
                className="select select-info w-full"
                name="gender"
                value={selectedValues.gender}
                onChange={handleSelectChange}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="">
              <label className="block font-bold" htmlFor="nationality">
                Nationality
              </label>
              <select
                className="select select-info w-full"
                name="nationality"
                value={selectedValues.nationality}
                onChange={handleSelectChange}
              >
                <option value="">Select a country</option>
                <option value="us">United States</option>
                <option value="au">Australia</option>
                <option value="fr">France</option>
                <option value="ca">Canada</option>
                <option value="br">Brazil</option>
              </select>
            </div>
          </div>
          <button className="btn w-full text-base mt-3 text-white normal-case bg-blue-500 hover:text-black">
            Generate
          </button>
        </form>
      </section>
      <hr className="my-4" />

      {/*  card section */}
      <section className="mb-2 ">
        {data && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* left card  */}
            <div className="card  bg-base-100 shadow-sm md:col-span-1 border-slate-200 border-2">
              <figure>
                <img src={data.picture.large} alt="Tech" className="w-full" />
              </figure>
              <div className="card-body ">
                <h2 className="card-title md:text-xl  text-xl ">
                  {data.name.title +
                    " " +
                    data.name.first +
                    " " +
                    data.name.last}
                </h2>
                <h3 className="md:text-2xl text-xl">{}</h3>
              </div>
            </div>
            {/* right card */}
            <div className="card w-full bg-base-100 shadow-sm  md:col-span-2 border-slate-200 border-2">
              <div className="card-body">
                <h3 className="">
                  <FaHouseUser className="md:text-2xl  text-xl  text-gray-400" />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="align-bottom md:text-lg text-base">
                    {`${data.location.street.number} ${data.location.street.name}, ${data.location.city}, ${data.location.postcode}, ${data.location.state}, ${data.location.country}`}
                  </span>
                </h3>
               
                <h3 className="mt-12">
                  <FaEnvelope className="md:text-2xl  text-xl text-gray-400" />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="align-bottom md:text-lg text-base">
                    {data.email}
                  </span>
                </h3>
                <h3 className="mt-12">
                  <FaPhone className="md:text-2xl text-xl text-gray-400" />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="align-bottom md:text-lg text-base">
                    {`${data.phone}, ${data.cell}`}
                  </span>
                </h3>
                <h3 className="mt-12">
                  <FaBirthdayCake className="md:text-2xl text-xl text-gray-400" />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="align-bottom md:text-lg text-base">
                    {data.dob.date}
                  </span>
                </h3>
                <h3 className="mt-12">
                  <FaLock className="md:text-2xl text-xl text-gray-400" />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="align-bottom md:text-lg text-base">
                    {data.login.password}
                  </span>
                </h3>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Main;
