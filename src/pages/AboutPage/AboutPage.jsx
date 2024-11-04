import aboutImg from '../../assets/about-us.jpg'
import { Link } from 'react-router-dom'
const AboutPage = () => {
    return (
        <div className="my-4">
            <section className="hero-section bg-cover bg-center flex flex-col items-center justify-center rounded-xl py-10 sm:py-16 md:py-28 lg:py-36 px-4">
                <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
                <p className="mt-2 md:mt-4 text-lg md:text-2xl text-center max-w-2xl">Discover the story and vision behind our brand.</p>
            </section>
            <section className="brand-story px-4 md:px-16 py-8 md:py-16 flex flex-col md:flex-row items-center">
                <img src={aboutImg} alt="Brand story" className="w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0 md:mr-8" />
                <div className="text-content w-full md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Story</h2>
                    <p className="text-lg leading-relaxed text-gray-700 mb-4">From humble beginnings, our journey started with a passion for creating products that matter. Today, we are proud to deliver top-notch quality...</p>
                    <p className="text-lg leading-relaxed text-gray-700">Join us as we continue to innovate and create.</p>
                </div>
            </section>
            <section className="mission-values px-4 md:px-16 py-8 md:py-16 bg-gray-100 text-center rounded-xl">
                <h2 className="text-2xl md:text-3xl font-semibold mb-8">Our Mission & Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="value-item">
                        <div className="icon mb-4 text-3xl text-purple-700">🌍</div>
                        <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                        <p className="text-gray-700">We strive to make a positive impact on the environment with every product we create.</p>
                    </div>
                    <div className="value-item">
                        <div className="icon mb-4 text-3xl text-purple-700">💼</div>
                        <h3 className="text-xl font-semibold mb-2">Quality</h3>
                        <p className="text-gray-700">Dedicated to excellence in every product we offer.</p>
                    </div>
                    <div className="value-item">
                        <div className="icon mb-4 text-3xl text-purple-700">🤝</div>
                        <h3 className="text-xl font-semibold mb-2">Customer Care</h3>
                        <p className="text-gray-700">Ensuring every customer receives personalized and attentive service.</p>
                    </div>
                </div>
            </section>
            <section className="team px-4 md:px-16 py-8 md:py-16 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-8">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="team-member">
                        <img src="team1.jpg" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg"/>
                            <h3 className="text-lg font-bold">John Doe</h3>
                            <p className="text-purple-700">CEO & Founder</p>
                            <p className="text-gray-600 text-sm mt-2">Passionate about innovation and leading our brand to success.</p>
                            <div className="social-icons mt-3 flex justify-center gap-2">
                                <a href="#" className="text-gray-500 hover:text-purple-700">LinkedIn</a>
                                <a href="#" className="text-gray-500 hover:text-purple-700">Twitter</a>
                            </div>
                    </div>
                </div>
            </section>
            <section className="cta-section bg-purple-700 text-white text-center py-12 rounded-xl">
                <h2 className="text-3xl font-semibold mb-4">Join Our Journey</h2>
                <p className="text-lg mb-8 px-4">We’re constantly evolving and would love for you to be a part of our story.</p>
                <Link to="/" className="px-6 py-3 bg-white text-purple-700 font-bold rounded-full hover:bg-purple-100 transition">Shop Now</Link>
            </section>
        </div>
    )
}

export default AboutPage
