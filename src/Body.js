import 'bootstrap/dist/css/bootstrap.css';
import Dong from './assets/ShinDongMin.jpeg';

function Body() {
  return (
    <main>
      <section class="site-banner" id="intro">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <h3 class="title-text">Entrepreneur, Fund Manager, Visionary</h3>
              <h1 class="title-text">Dong Min "Daniel" Shin</h1>
                <div class="site-buttons">
                  <div class="d-flex flex-row flex-wrap">
                    <button type="button" class="btn btn-light btn-outline-primary me-4">My Portfolio</button>
                    <button type="button" class="btn btn-light btn-outline-primary">Contact</button>
                  </div>
                </div>
            </div>
            <div class="col-sm-6 d-flex justify-content-center mt-4 mt-sm-0">
              <img src={Dong} alt="SDM" class="img-fluid" id="face" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Body