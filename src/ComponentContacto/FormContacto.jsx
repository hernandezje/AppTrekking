
const FormContacto = () => {
    return (

        <div className="row relative max-w-xl mx-auto responsive justify-content-center my-4">
            <div className="col-md-10">
                <form action="">
                    <div className="form-group my-4 text-white">
                        <label for="formNombre">Nombre Completo:</label>
                        <input type="text" className="form-control my-2" id="formNombre" placeholder="" />
                    </div>
                    <div className="form-group my-4 text-white">
                        <label for="formEmail">Email:</label>
                        <input type="email" className="form-control my-2" id="formEmail" placeholder="" />
                    </div>
                    <div className="form-group my-4 text-white">
                        <label for="formTelefono">Teléfono:</label>
                        <input type="number" className="form-control my-2" id="formTelefono" placeholder="" />
                    </div>
                    <div className="form-group my-4 text-white">
                        <label for="formComentario">Comentario:</label>
                        <textarea className="form-control my-2" id="formComentario" rows="3"></textarea>
                    </div>
                    <br />
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button type="submit" className="btn btn-outline-success">  Enviar  </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default FormContacto;
