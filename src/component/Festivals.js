import React from 'react'
import img1 from "./Festival.jpg"
import img2 from "./festival1.jpg"
import img3 from "./festival2.jpg"
import img4 from "./festival3.jpg"
import img5 from "./festival4.jpg"
import img6 from "./festival5.jpg"



export default function Festivals() {
   return (
      <div>
         <section class="gallery min-vh-100">
            <div class="container-lg">
               <div class="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
                  <div class="col">
                     <img src={img1} class="gallery-item" alt="gallery" />
                     <div className="card-body">
                        <h5 class="card-title"> Festival 1</h5>
                        <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                     </div>
                  </div>
                  <div class="col">
                     <img src={img2} class="gallery-item" alt="gallery" />
                     <div className="card-body">
                        <h5 class="card-title">Festival 2</h5>
                        <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>


                     </div>
                  </div>
                  <div class="col">
                     <img src={img3} class="gallery-item" alt="gallery" />
                     <div className="card-body">
                        <h5 class="card-title">Festival 3</h5>
                        <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>


                     </div>
                  </div>
                  <div class="col">
                     <img src={img4} class="gallery-item" alt="gallery" />
                     <div className="card-body">
                        <h5 class="card-title">Festival 4</h5>
                        <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>


                     </div>
                  </div>
                  <div class="col">
                     <img src={img5} class="gallery-item" alt="gallery" />
                     <div className="card-body">
                        <h5 class="card-title">Festival 5</h5>
                        <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>


                     </div>
                  </div>
                  <div class="col">
                     <img src={img6} class="gallery-item" alt="gallery" />
                     <div className="card-body">
                        <h5 class="card-title">Festival 6</h5>
                        <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>


                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}
