import SectionPPL from "./SectionPPL";
import FormContacto from "./FormContacto";

const Body = () => {
    return (
        <main className="relative w-full mx-auto px-5 sm:px-7 lg:px-9 ">
                <SectionPPL />
                <hr class="featurette-divider text-white" />
                <FormContacto />
        </main>
    )

}

export default Body;

