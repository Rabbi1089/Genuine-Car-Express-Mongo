import About from "../About/About";
import Service from "../About/Service/Service";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <Slider />
            <About />
            <Service />
            <h1 className=" text-6xl text-red-700">This is for testing purpose</h1>
        </div>
    );
};

export default Home;