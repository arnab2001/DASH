import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./topbar.css";


export default function List() {
  return  (
    <> <section className="vh-100"  >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">

        <div className="card" >
          <div className="card-body p-5">

            <h6 className="mb-3">Paitent Waiting List</h6>

            

            <ul className="list-group mb-0">
              <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                <div className="d-flex align-items-center">
                  <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                  Paitent 1
                </div>
                <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
                  <i className="fas fa-video"></i>
                </a>
              </li>
              

                
              <li className="list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                <div className="d-flex align-items-center">
                  <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                  Paitent 2
                </div>
                <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
                  <i className="fas fa-video"></i>
                </a>
              </li>
              <li className="list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                <div className="d-flex align-items-center">
                  <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                  Paitent 3
                </div>
                <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
                  <i className="fas fa-video"></i>
                </a>
              </li>

 
            </ul>

          </div>
        </div>

      </div>
    </div>
  </div>
</section> </>
  
  );
}
