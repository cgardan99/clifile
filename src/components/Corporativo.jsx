import React from 'react';
import Users from '../features/users/components/Users';
import Sucursales from './Sucursales';

function Corporativo() {
  return (
    <div className="">
        <h1 className="font-bold text-4xl md:text-7xl">Grupo México</h1>
        <br />
        <table>
            <tbody>
                <tr>
                    <td className="p-4">Razón Social:</td>
                    <td className="p-4">
                        <b>GRUPO MEXICO, S.A. DE C.V.</b>
                    </td>
                </tr>
            </tbody>
        </table>
        <br />
        <Sucursales />
        <br />
        <Users />
    </div>
  );
}

export default Corporativo;
