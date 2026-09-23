import "./Hero.css";

function Hero(){
    return (
        <section className="hero" id="home">
            <div className="container hero-inner">
                <div className="hero-text">
                    <p className="herro-greeting">Hi, I am</p>
                    <h1 className="hero-name">Himanshu pandey</h1>
                    <h2 className="hero-title">MERN full stack devloper</h2>
                    <p className="hero-tagline">
                        I build a simple, fast web apps with react and node.js - and I am 
                        looking for my first role as full stack devloper.
                    </p>
                    <div className="hero button">
                        <a href="#projects" className="btn btn primary">
                            see my projects
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact me 
                        </a>
                    </div>

                </div>

                <div className="hero-photo">
                    <img src="/profile.jpg" alt="Himansshu pandey"/>
                    

                </div>
            </div>

        </section>
    );
}

export default Hero;