import React from "react";

function Hero() {
  return (
    <div className="p-5" style={{backgroundColor:"#49aef2"}}>
      <div className="d-flex justify-content-between p-4 mx-5">
        <h1>Support Portal</h1>
        <button class="btn btn-outline-primary" type="button" >
          My tickets
        </button>
      </div>
      <div class="input-group mb-3 me-5" >
        <span class="input-group-text ms-5 bg-info text-white" id="basic-addon1">
         <h5>Search</h5> 
        </span>
        <input
          type="text"
          class="form-control me-5 py-3"
          placeholder="Eg:How do i open my account, How  do i activate F&O..."
          aria-describedby="basic-addon1"
          
        />
      </div>
    </div>
  );
}

export default Hero;
