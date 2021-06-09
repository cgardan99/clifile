import React from 'react';
import FileBrowserExample from '../features/files/FileBrowserExample';

function Explorador(props) {
    return (
        <div>
            <h1 className="font-bold text-3xl">Explorador de archivos</h1><br />
            <FileBrowserExample />
        </div>
    );
}

export default Explorador;