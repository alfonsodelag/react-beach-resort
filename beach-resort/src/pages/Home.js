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
                    title="Our Rooms"
                    subtitle="See our list of rooms">
                    <Link to="/services" className="btn-primary"
                    >
                        Our Rooms
                    </Link>
                </Banner>
            </Hero>
            <OurServices />
            <FeaturedServices />
        </>
    )
}

export default Home;