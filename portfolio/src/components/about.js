import portfolio from "../images/MOJ.jpg";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 description">
          <h1 className="mb-4">
            ABOUT ME
          </h1>
          <p className="mb-4">
            EXPERIENCED WEB DESIGNER PROFICIENT IN CREATING VISUALLY STUNNING
            AND USER-FRIENDLY WEBSITES. SKILLED IN HTML, CSS, AND JAVASCRIPT,
            WITH A STRONG EYE FOR DESIGN AESTHETICS AND A PASSION FOR DELIVERING
            EXCEPTIONAL USER EXPERIENCES. COMMITTED TO STAYING UP-TO-DATE WITH
            THE LATEST INDUSTRY TRENDS AND TECHNOLOGIES TO PROVIDE INNOVATIVE
            WEB SOLUTIONS.
          </p>
        </div>

        <div className="col-12 col-md-6 text-center img-back">
          <img src={portfolio} alt="portfolio" className="about-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
