import portfolio from '../images/about-me.png'

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 description">
          <h1 className="mb-4">
            I AM MOJI ARAMIDE <br /> A WEB DESIGNER
          </h1>
          <p className="mb-4">
            WELCOME TO MY WEB DESIGNER PORTFOLIO! I'M A CREATIVE AND EXPERIENCED
            WEB DESIGNER, CRAFTING ENGAGING DIGITAL EXPERIENCES WITH A FOCUS ON
            USER-CENTERED SOLUTIONS. LET'S BRING YOUR IDEAS TO LIFE WITH
            VISUALLY STUNNING WEBSITES. EXPLORE MY WORK AND LET'S CREATE
            SOMETHING MEMORABLE TOGETHER!
          </p>
          <button className="btn btn-lg btn-primary hire">HIRE ME</button>
          <button className="btn btn-lg view">VIEW PORTFOLIO</button>
        </div>

        <div className="col-12 col-md-6 text-center">
            <img src={portfolio} alt='portfolio' className='image'/>
        </div>
      </div>
    </div>
  );
};

export default Home;
