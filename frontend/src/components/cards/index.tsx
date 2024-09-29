// Components
import CardItems from "./components/card-items";
import ShineCard from "./components/shine-card";

const SpringCards = () => {
    return (
        <section className="relative w-full flex flex-col md:flex-row px-8 py-12 overflow-hidden">
            {/* Background Layers for Entire Section */}
            <div className="absolute inset-0 -z-10">
                {/* First Gradient Layer */}
                <div className="absolute w-full h-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-40 rotate-45"></div>
                
                {/* Second Gradient Layer */}
                <div className="absolute w-full h-full bg-gradient-to-r from-indigo-400 via-blue-400 to-green-400 opacity-50 rotate-12"></div>

                {/* Third Gradient Layer */}
                <div className="absolute w-full h-full bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-400 opacity-60 -rotate-12"></div>
            </div>

            <div className="w-full md:w-1/3 md:block hidden">
                <ShineCard />
            </div>

            <div className="w-full md:w-2/3 grid grid-cols-1 gap-6 sm:grid-cols-2 relative">
                <CardItems
                    title="Dynamic"
                    subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem doloremque vitae minima."
                />
                <CardItems
                    title="Data Driven"
                    subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem doloremque vitae minima."
                    className="bg-indigo-300 sm:-translate-y-6"
                />
                <CardItems
                    title="Dutiful"
                    subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem doloremque vitae minima."
                    className="bg-red-300"
                />
                <CardItems
                    title="Demure"
                    subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem doloremque vitae minima."
                    className="bg-yellow-300 sm:-translate-y-6"
                />
            </div>
        </section>
    );
};

export default SpringCards;
