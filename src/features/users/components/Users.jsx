import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BannerDetalle from '../../../components/BannerDetalle';
import NewUser from './NewUser';
import { init } from '../../banner/bannerSlice';

function Users(props) {
    const { banner } = useSelector((state) => state.banner);
    const dispatch = useDispatch();

    const showBanner = (e) => {
        dispatch(init());
    }

    return (
        <div className="">
            <BannerDetalle banner={banner} title="Crear nuevo usuario" info={NewUser} />
            <div className="flex flex-row">
                <div className="flex-grow">
                <h1 className="font-bold text-3xl">Usuarios en tu organización</h1>
                </div>
                <div>
                    <button onClick={showBanner} className="bg-green-500 py-1 px-5 font-bold text-lg text-white hover:bg-green-600 rounded-lg">Nuevo (+)</button>
                </div>
            </div>
            <br />
            <div className="hover:bg-gray-100 p-5 font-light text-xl m-5 cursor-pointer border border-solid border-gray-200 rounded-md shadow-sm">
                Ing. Juan Carlos Pérez
            </div>
            <div className="hover:bg-gray-100 p-5 font-light text-xl m-5 cursor-pointer border border-solid border-gray-200 rounded-md shadow-sm">
                Lic. Javier Llamas Ramírez
            </div>
            <div className="hover:bg-gray-100 p-5 font-light text-xl m-5 cursor-pointer border border-solid border-gray-200 rounded-md shadow-sm">
                Ing. Carlos Daniel Cañedo 
            </div>
            <div className="hover:bg-gray-100 p-5 font-light text-xl m-5 cursor-pointer border border-solid border-gray-200 rounded-md shadow-sm">
                Lic. Yoselin García
            </div>
            <div className="hover:bg-gray-100 p-5 font-light text-xl m-5 cursor-pointer border border-solid border-gray-200 rounded-md shadow-sm">
                Ing. Juan Luis
            </div>
            <div className="hover:bg-gray-100 p-5 font-light text-xl m-5 cursor-pointer border border-solid border-gray-200 rounded-md shadow-sm">
                Lic. Samantha
            </div>
            <div className="hover:bg-gray-100 p-5 font-light text-xl m-5 cursor-pointer border border-solid border-gray-200 rounded-md shadow-sm">
                Ing. Alicia
            </div>
        </div>
    );
}

export default Users;