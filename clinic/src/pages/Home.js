import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import OurServices from '../components/OurServices'
import FeaturedServices from "../components/FeaturedServices"

export const Home = () => {
    return (
        <>
            <Hero>
                <Banner
                    title="Our services"
                    subtitle="See our list of services">
                    <Link to="/services" className="btn-primary"
                    >
                        Our services
                </Link>
                </Banner>
            </Hero>
            <OurServices />
            <FeaturedServices />
        </>
    )
}

export default Home;