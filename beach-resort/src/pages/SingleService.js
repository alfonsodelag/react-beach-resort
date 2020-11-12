import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { ServiceContext } from '../context'
import StyledHero from '../components/StyledHero'

export default class SingleService extends Component {

    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }

    static contextType = ServiceContext;

    render() {
        const { getService } = this.context;
        const service = getService(this.state.slug);
        if (!service) {
            return <div className="error">
                <h3>No such service could be found...</h3>
                <Link to="/services" className="btn-primary">
                    Back to Rooms
                </Link>
            </div>
        }

        const { name, description, capacity, size, price, extras, breakfast, pets, images } = service;


        const [mainImg, ...defaultImg] = images;
        console.log(defaultImg)

        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name} service`}>
                        <Link to="/services" className="btn-primary">
                            Back to Rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => {
                            return <img key={index} src={item} alt={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>price: ${price}</h6>
                            <h6>size: ${size} SQFT</h6>
                            <h6>max capacity : {
                                capacity > 1 ? `${capacity} people` : `{capacity} person`
                            }
                            </h6>
                            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                            <h6>{breakfast && "free"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
                </section>
            </>
        );
    }
}


