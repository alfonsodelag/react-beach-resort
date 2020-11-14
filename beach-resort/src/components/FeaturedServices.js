import React, { Component } from 'react'
import { ServiceContext } from '../context';
import Loading from './Loading'
import Service from './Service'
import Title from './Title'

export default class FeaturedServices extends Component {

    static contextType = ServiceContext;
    render() {
        let { loading, featuredServices: services } = this.context;
        services = services.map(service => {
            return <Service key={service.id} service={service} />
        })

        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : services}
                </div>
            </section>
        )
    }
}
