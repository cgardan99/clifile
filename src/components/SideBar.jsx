import React from 'react';
import { Link } from 'react-router-dom';
import { UsersIcon, BriefcaseIcon, FolderIcon, PencilAltIcon } from '@heroicons/react/solid';

function SideBar(props) {
    if(props.user != null ){
        return (
            <div>
                <div className="hidden fixed mt-20 md:flex h-screen">
                    <div className="p-6 border-r w-32 md:w-64 block border-gray-200">
                        <h6 className="font-bold mb-4">.</h6>
                        <ul className="font-light text-xl">
                            <li className="my-5 flex align-middle">
                                <UsersIcon className="h-6 w-6 text-green-600 m-auto"/>
                                <Link className="flex-grow ml-3" to="/users">Usuarios</Link>
                            </li>
                            <li className="my-5 flex align-middle">
                                <BriefcaseIcon className="h-6 w-6 text-green-600 m-auto"/>
                                <Link className="flex-grow ml-3" to="/corporativos">Corporativos</Link>
                            </li>
                            <li className="my-5 flex align-middle">
                                <FolderIcon className="h-6 w-6 text-green-600 m-auto"/>
                                <Link className="flex-grow ml-3" to="/explorador">Explorador</Link>
                            </li>
                            <li className="my-5 flex align-middle">
                                <PencilAltIcon className="h-6 w-6 text-green-600 m-auto"/>
                                <Link className="flex-grow ml-3" to="/">Bitácora</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:hidden fixed w-screen bottom-0 h-14 text-center bg-white border border-gray-200">
                    <div className="h-full gap-3 flex items-stretch">
                        <div className="flex-grow p-1 text-center">
                            <div className="flex flex-col items-center h-full">
                                <Link to="/users">
                                    <UsersIcon className="h-6 w-6 text-green-600 m-auto"/>
                                    Usuarios
                                </Link>
                            </div>
                        </div>
                        <div className="flex-grow p-1 text-center">
                            <div className="flex flex-col items-center h-full">
                                <Link to="/corporativos">
                                    <BriefcaseIcon className="h-6 w-6 text-green-600 m-auto"/>
                                    Corporativos
                                </Link>
                            </div>
                        </div>
                        <div className="flex-grow p-1 text-center">
                            <div className="flex flex-col items-center h-full">
                                <Link to="/">
                                    <FolderIcon className="h-6 w-6 text-green-600 m-auto"/>
                                    Explorador
                                </Link>
                            </div>
                        </div>
                        <div className="flex-grow p-1 text-center">
                            <div className="flex flex-col items-center h-full">
                                <Link to="/">
                                    <PencilAltIcon className="h-6 w-6 text-green-600 m-auto"/>
                                    Bitácora
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}
        
        export default SideBar;
        