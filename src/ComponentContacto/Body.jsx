import SectionPPL from "./SectionPPL";
import FormContacto from "./FormContacto";

const Body = () => {
    return (
        <main className="panelContacto row relative max-w-xl mx-auto responsive justify-content-center">
            <div className="panelSusp my-5 col-md-5 shadow-lg p-3 mb-5 ">
                <SectionPPL />
                <hr className="featurette-divider text-white" />
                <FormContacto />
            </div>
        </main>
    )

}

export default Body;

