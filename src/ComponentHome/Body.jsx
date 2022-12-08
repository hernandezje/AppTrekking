import SectionPPL from "./SectionPPL";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const Body = () => {
    return (
        <main className="relative w-full mx-auto px-5 sm:px-7 lg:px-9 ">
            <SectionPPL />
            <hr className="featurette-divider text-white" />
            <h1 className="text-white mx-5">Niveles</h1>
            <Section2 />
            <hr class="featurette-divider text-white" />
            <h1 className="text-white mx-5">Expertos</h1>
            <Section3 />
            <hr className="featurette-divider text-white" />
            <h1 className="text-white mx-5">Senderos</h1>
            <Section4 />
        </main>
    )

}

export default Body;

