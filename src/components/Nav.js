import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./topbar.css";


export default function TopBar() {
  return  (
  <div className='topbar'>
    <div className="topbarWrapper">
      <div className='topleft'>
      <i className="fas fa-home" herf = "#"></i>
      </div>
      
      <div className='topright'>Right</div>
    </div>
  </div>
  
  );
}
