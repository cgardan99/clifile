import React from 'react';
import MovimientosRecientes from './MovimientosRecientes';
import TablaClientes from './TablaClientes';

function Interface() {
  return (
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 p-5 w-full">
        <MovimientosRecientes />
        <TablaClientes />
      </div>
  );
}

export default Interface;
