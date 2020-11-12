import React from 'react'
import RoomFilter from './RoomFilter'
import RoomsList from './RoomList'
import { withRoomConsumer } from '../context'
import Loading from './Loading'

function RoomContainer({ context }) {
    const { loading, sortedServices, services } = context;
    if (loading) {
        return <Loading />
    }
    return (
        <>
            <RoomFilter services={services} />
            <RoomsList services={sortedServices} />
        </>
    );
}

export default withRoomConsumer(RoomContainer)

