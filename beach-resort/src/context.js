import React, { Component } from 'react'
import RoomsContainer from './components/RoomsContainer'
import Client from './Contentful'

const ServiceContext = React.createContext();
// 
class ServiceProvider extends Component {
    state = {
        services: [],
        sortedServices: [],
        featuredServices: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };

    getData = async () => {
        try {

            let response = await Client.getEntries({
                content_type: "beachResortRoom",
                // order: "-fields.price"
            });
            let services = this.formatData(response.items)
            let featuredServices = services.filter(service => service.featured === true);

            let maxPrice = Math.max(...services.map(item => item.price));
            let max = Math.max(...services.map(item => item.price));
            let maxSize = Math.max(...services.map(item => item.size))

            this.setState({
                services,
                featuredServices,
                sortedServices: services,
                loading: false,
                price: maxPrice,
                maxPrice,
                maxSize
            })

        } catch (error) {
            console.error(error)
        }
    }

    componentDidMount() {
        this.getData()
    }

    formatData(items) {

        let tempItems = items.map(item => {
            // debugger
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            let service = {
                ...item.fields,
                images,
                id
            }
            return service;
        })
        return tempItems
    }

    getService = (slug) => {
        let tempServices = [...this.state.services];
        const service = tempServices.find(service => service.slug === slug)
        return service;
    }

    handleChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = event.target.name;
        this.setState({
            [name]: value
        },
            this.filterServices)
    }

    filterServices = () => {
        let {
            services, type, capacity, price, minSize, maxSize, breakfast, pets
        } = this.state;

        // all the rooms
        let tempServices = [...services];
        // transform value
        capacity = parseInt(capacity)
        price = parseInt(price)

        // filtering by type
        if (type !== 'all') {
            tempServices = tempServices.filter(item => item.type === type)
        }

        // filtering by capacity
        if (capacity !== 1) {
            tempServices = tempServices.filter(service => service.capacity >= capacity)
        }

        // filtering by price
        tempServices = tempServices.filter(service => service.price <= price);
        tempServices = tempServices.filter(service => service.size >= minSize && service.size <= maxSize)

        // filter by breakfast
        if (breakfast) {
            tempServices = tempServices.filter(service => service.breakfast === true)
        }

        // filter by pets
        if (pets) {
            tempServices = tempServices.filter(service => service.pets === true)
        }

        // change state
        this.setState({
            sortedServices: tempServices
        })
    }

    render() {
        return (
            <ServiceContext.Provider
                value={{
                    ...this.state,
                    getService: this.getService,
                    handleChange: this.handleChange
                }}
            >
                {this.props.children}
            </ServiceContext.Provider>
        );
    }
}

const ServiceConsumer = ServiceContext.Consumer;

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <ServiceConsumer>
            {value => <Component {...props} context={value} />}
        </ServiceConsumer>
    }
}

export { ServiceProvider, ServiceConsumer, ServiceContext }