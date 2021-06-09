import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { init } from '../features/banner/bannerSlice';
import BannerDetalle from './BannerDetalle';
import NewCorporativo from './NewCorporativo';

function Corporativos(props) {
    const { banner } = useSelector((state) => state.banner);
    const dispatch = useDispatch();

    const showBanner = (e) => {
        dispatch(init());
    }
    return (
        <div className="">
            <BannerDetalle banner={banner} title="Crear nuevo corporativo" info={NewCorporativo} />
            <div className="flex flex-row">
                <div className="flex-grow">
                    <h1 className="font-bold text-3xl">Corporativos de tu organización:</h1>
                </div>
                <div>
                    <button onClick={showBanner} className="bg-green-500 py-1 px-5 font-bold text-lg text-white hover:bg-green-600 rounded-lg">Nuevo (+)</button>
                </div>
            </div>
            <br />
            <div className="hover:bg-gray-100 p-5 font-light text-xl m-5 cursor-pointer border border-solid border-gray-200 rounded-md shadow-sm">
                <Link to="/corporativo/34">Grupo México SA de CV <p className="text-light font-bold">Sucursales: </p> 3</Link>
            </div>
            <div className="hover:bg-gray-100 p-5 font-light text-xl m-5 cursor-pointer border border-solid border-gray-200 rounded-md shadow-sm">
                <Link to="/corporativo/54">BAYER <p className="text-light font-bold">Sucursales: </p> 4</Link>
            </div>
            <div className="hover:bg-gray-100 p-5 font-light text-xl m-5 cursor-pointer border border-solid border-gray-200 rounded-md shadow-sm">
                <Link to="/corporativo/54">Capstone Gold <p className="text-light font-bold">Sucursales: </p> 12</Link>
            </div>
            <div className="hover:bg-gray-100 p-5 font-light text-xl m-5 cursor-pointer border border-solid border-gray-200 rounded-md shadow-sm">
                <Link to="/corporativo/23">Gobierno del Estado de Aguascalientes <p className="text-light font-bold">Sucursales: </p> 1</Link>
            </div>
        </div>
    );
}

export default Corporativos;