import React from 'react';

function TablaClientes() {
  return (
    <div className="w-full">
        <h1 className="text-bold text-2xl">Usuarios principales</h1>
        <br />
        <table className="shadow-md w-full text-center">
            <thead className="bg-green-200 text-green-900">
                <tr>
                    <th className="font-bold p-3">Usuario</th>
                    <th className="font-bold p-3">Empresa</th>
                </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-gray-200">
                    <td className="p-3">Juan Gabriel Lopez</td>
                    <td className="p-3">GMEXICO SLP IMMSA</td>
                </tr>
                <tr className="hover:bg-gray-200">
                    <td className="p-3">Ing. Rosario Mendez</td>
                    <td className="p-3">UMSB</td>
                </tr>
                <tr className="hover:bg-gray-200">
                    <td className="p-3">Lic. Miguel de la Madrid</td>
                    <td className="p-3">Ex Talleres de Ferrocarril</td>
                </tr>
                <tr className="hover:bg-gray-200">
                    <td className="p-3">Dr. Volker Hensel</td>
                    <td className="p-3">PROQUINA VER</td>
                </tr>
                <tr className="hover:bg-gray-200">
                    <td className="p-3">Daniela Soto Padilla</td>
                    <td className="p-3">GMEXICO Cananea</td>
                </tr>
            </tbody>
        </table>
    </div>
  );
}

export default TablaClientes;
