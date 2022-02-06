import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./topbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Profile.css";

export default function Profile() {
  return  (
<div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
    <div className="card p-4">
        <div className=" image d-flex flex-column justify-content-center align-items-center"> <button className="btn btn-secondary"> <img src="https://thumbs.dreamstime.com/z/vector-illustration-doctor-icon-specialist-marketing-infographics-artwork-image-135697415.jpg" alt='a' height="100" width="100" /></button> <span className="name mt-3">Doctor Bid</span> <span className="idd">@Doc123</span>
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                 <i class="fas fa-graduation-cap"></i>
                 <span className="idd1">NRS Medical College</span> 
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center mt-3">
            <i class="fas fa-map-marker-alt"></i>
             <span className="number">Kolkata</span> 
             </div>
            <div className=" d-flex mt-2"> <button className="btn1 btn-dark">Edit Profile</button> </div>
            <div className="text mt-3"> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</span> </div>
            
        </div>
    </div>
</div>
  
  );
}
