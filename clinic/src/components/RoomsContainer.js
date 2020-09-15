import React from 'react'
import RoomsFilter from './RoomFilter'
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
            <RoomsFilter services={services} />
            <RoomsList services={sortedServices} />
        </>
    );
}




export default withRoomConsumer(RoomContainer)

// export default function RoomsContainer() {
//     return (
//         <ServiceConsumer>
//             {
//                 (value) => {
//                     const { loading, sortedServices, services } = value

//             }
//         </ServiceConsumer>
//     )
// }
