import React from 'react';
import FileBrowserExample from '../features/files/FileBrowserExample';

function Sucursal(props) {
    return (
        <div className="">
            <h1 className="text-3xl md:text-5xl font-bold">San Luis Potosí IMMSA</h1>
            <br /><br />
            <FileBrowserExample />
        </div>
    );
}

export default Sucursal;