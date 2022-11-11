/* eslint-disable global-require */
import './Style/home.css';

const Home = () => (
  <section className="home">
    <div className="home-data">
      <h1 className="home-title">I&#39;m Oscar Bermudez</h1>
      <h2 className="home-profession">I&#39;m a Software Developer</h2>
      <div className="home-description">
        <p className="home-paragraph">
          I can help you build a product , feature or website Look through some of my
          work and experience! If you like what you see and have a project you need coded,
          don&#39;t hesitate to contact me.
        </p>
        <div className="home-pic-border">
          <div className="home-pic-container">
            <img
              src={require('../../images/pic.gif')}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
