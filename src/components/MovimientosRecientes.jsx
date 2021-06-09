import React from 'react';

function MovimientosRecientes() {
    return (
        <div className="w-full">
            <h1 className="text-bold text-2xl">Movimientos Recientes</h1>
            <br />
            <table className="shadow-md w-full text-center">
                <thead className="bg-green-200 text-green-900">
                    <tr>
                        <th className="font-bold p-3" colSpan="2">Archivo</th>
                        <th className="font-bold p-3">Fecha</th>
                        <th className="font-bold p-3">Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-gray-200">
                        <td className="p-3">x</td>
                        <td className="p-3">Resultados analíticos muestreo 2020.pdf</td>
                        <td className="p-3">12/03/2021, 15:40</td>
                        <td className="p-3">Juan Hernandez</td>
                    </tr>
                    <tr className="hover:bg-gray-200">
                        <td className="p-3">⇩</td>
                        <td className="p-3">Resultados analíticos muestreo 2019.pdf</td>
                        <td className="p-3">12/03/2020, 15:40</td>
                        <td className="p-3">Juan Hernandez</td>
                    </tr>
                    <tr className="hover:bg-gray-200">
                        <td className="p-3">x</td>
                        <td className="p-3">Informe Final PCP 2021</td>
                        <td className="p-3">12/08/2021, 15:40</td>
                        <td className="p-3">Blanca Hernandez</td>
                    </tr>
                    <tr className="hover:bg-gray-200">
                        <td className="p-3">x</td>
                        <td className="p-3">Resultados analíticos muestreo 2020.pdf</td>
                        <td className="p-3">12/03/2021, 15:40</td>
                        <td className="p-3">Juan Hernandez</td>
                    </tr>
                    <tr className="hover:bg-gray-200">
                        <td className="p-3">x</td>
                        <td className="p-3">Resultados analíticos muestreo 2020.pdf</td>
                        <td className="p-3">12/03/2021, 15:40</td>
                        <td className="p-3">Juan Hernandez</td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
    }
    
    export default MovimientosRecientes;
    