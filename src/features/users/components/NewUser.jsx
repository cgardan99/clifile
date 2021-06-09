
function NewUser() {

    return (
        <div className="flex-grow m-5 p-5 bg-gray-100 rounded-md">
            <form action="" className="w-full text-center">
                <div className="m-3">
                    <label className="font-bold" htmlFor="nombre">Nombre del usuario</label> <br />
                    <input type="text" name="nombre" placeholder="Nombre" className="p-2 rounded-md w-full" />
                </div>
                <div className="m-3">
                    <label className="font-bold" htmlFor="email">Correo electrónico del usuario</label> <br />
                    <input type="email" name="email" placeholder="Correo Electrónico" className="p-2 rounded-md w-full" />
                </div>
                <input type="submit" value="Enviar" className="py-1 px-3 cursor-pointer rounded-lg bg-green-500 hover:bg-green-600 font-bold text-white" />
            </form>
        </div>
    );
}

export default NewUser;