import React from 'react';
import { Link } from 'react-router-dom';

class Sucursales extends React.Component {
    render() {
        return (
            <div className="w-full">
                <h1 className="font-bold text-3xl">Sucursales</h1>
                <br />
                <div className="hover:bg-gray-100 p-5 font-light text-xl m-5 cursor-pointer border border-solid border-gray-200 rounded-md shadow-sm">
                    <Link to="../../sucursal/12">CANANEA</Link>
                </div>
                <div className="hover:bg-gray-100 p-5 font-light text-xl m-5 cursor-pointer border border-solid border-gray-200 rounded-md shadow-sm">
                    <Link to="../../sucursal/12">SLP IMMSA</Link>
                </div>
                <div className="hover:bg-gray-100 p-5 font-light text-xl m-5 cursor-pointer border border-solid border-gray-200 rounded-md shadow-sm">
                    <Link to="../../sucursal/12">Unidad Minera Santa Bárbara</Link>
                </div>
                <div className="hover:bg-gray-100 p-5 font-light text-xl m-5 cursor-pointer border border-solid border-gray-200 rounded-md shadow-sm">
                    <Link to="../../sucursal/12">Otros</Link>
                </div>
            </div>
        );
    }
}

export default Sucursales;
