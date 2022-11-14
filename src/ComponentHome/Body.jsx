import SectionPPL from "./SectionPPL";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const Body = () => {
    return (
        <main className="relative w-full mx-auto px-5 sm:px-7 lg:px-9 ">
            <SectionPPL />
            <Section2 />
            <hr class="featurette-divider text-white" />
            <Section3 />
            <hr class="featurette-divider text-white" />
            <Section4 />
        </main>
    )

}

export default Body;

