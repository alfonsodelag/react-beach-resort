import React from 'react'
import Service from './Service'

export default function RoomList({ services }) {
    if (services.length === 0) {
        return (
            <div className="empty-search">
                <h3>Unfortunately, no rooms matched your search parameters</h3>
            </div>
        )
    }

    return <section className="roomslist">
        <div className="roomslist-center">
            {
                services.map(item => {
                    return <Service key={item.id} service={item} />
                })}
        </div>
    </section>
}
