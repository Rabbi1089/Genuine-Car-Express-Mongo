import About from "../About/About";
import Service from "../About/Service/Service";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <Slider />
            <About />
            <Service />
        </div>
    );
};

export default Home;