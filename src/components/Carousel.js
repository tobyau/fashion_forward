import React from 'react';

const Carousel = () => {
  return(
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
<<<<<<< HEAD
        <div className="carousel-item active">
        <img className="d-block w-100" src="https://www.forever21.com/images/f21/us/en/web/20191004/0923_WGA_NightCollection_D_M.gif?1" alt="First slide"/>
=======
        <div class="carousel-item active">
        <img class="d-block w-100" src="https://www.forever21.com/images/f21/us/en/web/20191004/0923_WGA_NightCollection_D_M.gif?1" alt="First slide"/>
>>>>>>> 5d37b1fa882288c462092cbdf545b24d40533494
        </div>
        <div className="carousel-item">
        <img className="d-block w-100" src="https://www.forever21.com/images/f21/us/en/web/20191004/0923_WGA_UrbanYouth_D_M.gif?1" alt="Second slide"/>
        </div>
        <div className="carousel-item">
        <img className="d-block w-100" src="https://www.forever21.com/images/f21/us/en/web/20191005/0923_WGA_SoftStructured_D_M.jpg?1" alt="Third slide"/>
        </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
    </a>
    </div>
  );
}

export default Carousel; 