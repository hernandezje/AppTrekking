import FormContacto from "./FormContacto";

const SectionPPL = () => {
    return (
        <div class="row relative max-w-xl mx-auto responsive justify-content-center my-4 text-white">
            <div class="col-md-10">
                <div class="text-left">
                    <h4 class="text-base mb-4 font-semibold tracking-wider text-primary-light uppercase">CONTÁCTENOS</h4>
                    <h2 class="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">Forma parte de esta Página Web</h2>
                    <p class="mt-4 text-lg leading-6 text-text-secondary">Complete el formulario, un miembro de nuestro equipo se pondrá en contacto.</p>
                </div>
                <div class="mt-12">
                    <form class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Un Usuario
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Un Experto
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked />
                            <label class="form-check-label" for="flexRadioDefault3">
                                Una Marca
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SectionPPL;