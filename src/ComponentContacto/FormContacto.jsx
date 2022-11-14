
const FormContacto = () => {
    return (

        <div class="row relative max-w-xl mx-auto responsive justify-content-center my-4">
            <div class="col-md-5">
                <form action="">
                    <div class="form-group my-4 text-white">
                        <label for="formNombre">Nombre Completo:</label>
                        <input type="text" class="form-control my-2" id="formNombre" placeholder="" />
                    </div>
                    <div class="form-group my-4 text-white">
                        <label for="formEmail">Email:</label>
                        <input type="email" class="form-control my-2" id="formEmail" placeholder="" />
                    </div>
                    <div class="form-group my-4 text-white">
                        <label for="formTelefono">Teléfono:</label>
                        <input type="number" class="form-control my-2" id="formTelefono" placeholder="" />
                    </div>
                    <div class="form-group my-4 text-white">
                        <label for="formComentario">Comentario:</label>
                        <textarea class="form-control my-2" id="formComentario" rows="3"></textarea>
                    </div>
                    <br />
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button type="submit" class="btn btn-outline-success">  Enviar  </button>
                    </div>



                </form>
            </div>
        </div>

    )
}

export default FormContacto;
