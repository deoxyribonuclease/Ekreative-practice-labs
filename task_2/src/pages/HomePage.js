import Home from "../components/homepage/Home";
import Services from "../components/homepage/Services";
import About from "../components/homepage/About";
import Portfolio from "../components/homepage/Portfolio";
import Testimony from "../components/homepage/Testimony";
import News from "../components/homepage/News";
import CTASection from "../components/homepage/CTASection";


function HomePage() {
    return (
        <div>
            <Home />
            <Services />
            <About />
            <Portfolio />
            <Testimony />
            <News />
            <CTASection />
        </div>
    );
}

export default HomePage;
