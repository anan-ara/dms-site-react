import 'bootstrap/dist/css/bootstrap.css';
import Dong from './assets/ShinDongMin.jpeg';

function Main() {
  return (
    <main className="spacer">
      <section className="site-banner" id="intro">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h3 className="title-text">Entrepreneur, Fund Manager, Visionary</h3>
              <h1 className="title-text">Dong Min "Daniel" Shin</h1>
                <div className="site-buttons">
                  <div className="d-flex flex-row flex-wrap">
                    <button type="button" className="btn btn-light btn-outline-primary me-4">My Portfolio</button>
                    <button type="button" className="btn btn-light btn-outline-primary">Contact</button>
                  </div>
                </div>
            </div>
            <div className="col-sm-6 d-flex justify-content-center mt-4 mt-sm-0">
              <img src={Dong} alt="SDM" className="img-fluid" id="face" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;