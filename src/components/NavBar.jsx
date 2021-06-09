import React from 'react';

function NavBar(props) {
  if(props.user != null) {
    return (
        <div className="bg-white z-auto flex fixed w-full p-6 shadow-sm">
            <h6 className="flex-grow text-2xl font-bold">clifile</h6>
            <p>Usuario</p>
        </div>
    );
  } else {
    return (
      <div></div>
    );
  }
  
}

export default NavBar;
