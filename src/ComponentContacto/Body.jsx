import SectionPPL from "./SectionPPL";
import FormContacto from "./FormContacto";

const Body = () => {
    return (
        <main className="row relative max-w-xl mx-auto responsive justify-content-center my-4">
            <div className="panelSusp col-md-5 shadow-lg p-3 mb-5 bg-body rounded">
                <SectionPPL />
                <hr class="featurette-divider text-white" />
                <FormContacto />
            </div>
        </main>
    )

}

export default Body;

