import React from 'react';

class Class extends React.Component {
    constructor(props){
        super(props);
        this.state = {lat: null, error: null};

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat : position.coords.latitude}),
            (err) => this.setState({error : err.message})
        );
    }

    //content visible on the screen and good for data loading
    componentDidMount() {
    }

    //sit and waiting for the updates
    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    //sit and wait until component is no longer shown
    componentWillUnmount() {
    }

    render() {
        if(this.state.lat && !this.state.error) {
            return <div>
                Latitude: {this.state.lat}
            </div>
        }else if (!this.state.lat && this.state.error){
            return <div>
                Error: {this.state.error}
            </div>
        } else{
            return <div>
                Loading............
            </div>
        }
    }
}

export default Class;
