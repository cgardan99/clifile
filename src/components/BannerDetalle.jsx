import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deInit } from '../features/banner/bannerSlice';

function BannerDetalle(props) {
    const Info = props.info;
    const dispatch = useDispatch();

    return (
        <div className={(props.banner ? '' : 'hidden ') + "h-screen w-screen fixed flex items-center left-0 top-0 z-10"}>
                <div className="w-full h-full rounded-xl bg-white shadow-md m-auto overflow-scroll p-10 md:p-20">
                    <h1 className="font-bold text-4xl md:text-7xl">{ props.title }</h1>
                    <p className="cursor-pointer flex flex-row font-bold text-green-700" onClick={() => dispatch(deInit())}>Cerrar</p>
                    {
                        Info == null ? 
                        <></> :
                        <Info></Info>
                    } 
                </div>
        </div>
    );
}

export default BannerDetalle;
