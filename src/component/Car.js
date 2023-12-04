import React from 'react'
import img1 from "./car.jpg"
import img2 from "./car1.jpg"
import img3 from "./car2.jpg"
import img4 from "./car3.jpg"
import img5 from "./car4.jpg"
import img6 from "./car5.jpg"


export default function Car() {
   return (
      <div>
         {/* <h1 className='text-center text-danger m-0 p-0 '> MY CARS COLLECTIONS</h1> */}
         <section class="gallery min-vh-100">
            <div class="container-lg">
               <div class="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
                  <div class="col">
                     <img src={img1} class="gallery-item" alt="gallery" />
                     <div className="card-body">
                        <h5 class="card-title fw-bold text-center">CAR 1</h5>
                        <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>


                     </div>
                  </div>
                  <div class="col">
                     <img src={img2} class="gallery-item" alt="gallery" />
                     <div className="card-body">
                        <h5 class="card-title fw-bold text-center">CAR 2</h5>
                        <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>


                     </div>
                  </div>
                  <div class="col">
                     <img src={img3} class="gallery-item" alt="gallery" />
                     <div className="card-body">
                        <h5 class="card-title fw-bold text-center">CAR 3</h5>
                        <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>


                     </div>
                  </div>
                  <div class="col">
                     <img src={img4} class="gallery-item" alt="gallery" />
                     <div className="card-body">
                        <h5 class="card-title fw-bold text-center">CAR 4</h5>
                        <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>


                     </div>
                  </div>
                  <div class="col">
                     <img src={img5} class="gallery-item" alt="gallery" />
                     <div className="card-body">
                        <h5 class="card-title fw-bold text-center">CAR 5</h5>
                        <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>


                     </div>
                  </div>
                  <div class="col">
                     <img src={img6} class="gallery-item" alt="gallery" />
                     <div className="card-body">
                        <h5 class="card-title fw-bold text-center">CAR 6</h5>
                        <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>


                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}
