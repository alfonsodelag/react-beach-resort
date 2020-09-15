import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa"
import Title from './Title'

export default class OurServices extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Best prices",
                info: 'We offer the lowest prices'
            },
            {
                icon: <FaHiking />,
                title: "Our customer service",
                info: 'We offer the best service possible for our clients'
            },
            {
                icon: <FaShuttleVan />,
                title: "Our technology",
                info: 'We use the latest technology for your needs'
            },
            {
                icon: <FaBeer />,
                title: "Customer Satisfaction",
                info: 'We believe in fulfilling your expectations'
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
