import React from 'react';

function DropDown({header,first,second}) {
    return ( 
        <div className="dropdown p-3 " >
        <button
          className="btn btn-light show-on-hover dropdown-toggle py-3"
          data-bs-toggle="dropdown"
          style={{ width: "100%",backgroundColor:"#dadde0" }}
          
        >
          {header}
        </button>

        <ul className="dropdown-menu shadow text-center" style={{ width: "95%" }}>
          <li>
            <a className="dropdown-item" href="#">
              {first}
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              {second}
            </a>
          </li>
        </ul>
      </div>
     );
}

export default DropDown;