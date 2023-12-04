import React from 'react'
import img1 from "./bike1.jpg"
import img2 from "./bike2.jpg"
import img3 from "./bike3.jpg"
import img4 from "./bike4.jpg"
import img5 from "./bike5.jpg"
import img6 from "./bike6.jpg"


export default function Bike() {
   return (
      <div>
         {/* <h1 className='text-center text-danger'> MY BIKES COLLECTIONS</h1> */}
         <section class="gallery min-vh-100">
         
            <div class="container-lg">
               <div class="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
                  <div class="col">
                     <img src={img1} class="gallery-item" alt="gallery" />
                     <div className="card-body">
                        <h5 class="card-title fw-bold text-center">BIKE 1</h5>
                        <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>


                     </div>
                  </div>
                  <div class="col">
                     <img src={img2} class="gallery-item" alt="gallery" />
                     <div className="card-body">
                        <h5 class="card-title fw-bold text-center">BIKE 2</h5>
                        <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>


                     </div>
                  </div>
                  <div class="col">
                     <img src={img3} class="gallery-item" alt="gallery" />
                     <div className="card-body">
                        <h5 class="card-title fw-bold text-center">BIKE 3</h5>
                        <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>


                     </div>
                  </div>
                  <div class="col">
                     <img src={img4} class="gallery-item" alt="gallery" />
                     <div className="card-body">
                        <h5 class="card-title fw-bold text-center">BIKE 4</h5>
                        <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>


                     </div>
                  </div>
                  <div class="col img5">
                     <img src={img5} class="gallery-item" alt="gallery" />
                     <div className="card-body">
                        <h5 class="card-title fw-bold text-center">BIKE 5</h5>
                        <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>


                     </div>
                  </div>
                  <div class="col img6">
                     <img src={img6} class="gallery-item" alt="gallery" />
                     <div className="card-body">
                        <h5 class="card-title fw-bold text-center">BIKE 6</h5>
                        <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>


                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}
