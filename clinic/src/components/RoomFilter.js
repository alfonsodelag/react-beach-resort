import React from 'react';
import { useContext } from 'react';
import { ServiceContext } from '../context'
import Title from '../components/Title'
// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({ services }) {
    const context = useContext(ServiceContext);
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
    } = context;

    // Get Unique types
    let types = getUnique(services, 'type');
    // Add all
    types = ['all', ...types];
    // Map to jsx
    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>{item}</option>
        );
    });

    let people = getUnique(services, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/* end select type */}
                {/* guest  */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {people}
                    </select>
                </div>
                {/* end guests */}
                {/* room price  */}
                <div className="form-group">
                    <label htmlFor="price">Room Price ${price}</label>
                    <input type="range" name="price" min={minPrice}
                        max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control">
                    </input>
                </div>
                {/* end room price */}
                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">Room Size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size"
                            value={minSize} className="size-input" onChange={handleChange} />
                        <input type="number" name="maxSize" id="size"
                            value={maxSize} className="size-input" onChange={handleChange} />
                    </div>
                </div>
                {/* end of size */}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast"
                            id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets"
                            id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end of extras */}
            </form>
        </section>
    )
}
