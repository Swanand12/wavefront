import React from "react"
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Carousel(){
    return(

<>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="equity-img.png" class="d-block w-100" alt="equity-img"/>
    </div>
    <div class="carousel-item">
      <img src="loan-img.png" class="d-block w-100" alt="loan-img"/>
    </div>
    <div class="carousel-item">
      <img src="real_estate-img.png" class="d-block w-100" alt="real_estate-img"/>
    </div>
  </div>
</div>
</>
    );
}
export default Carousel;