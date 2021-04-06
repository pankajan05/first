import React from 'react';
import Season from './Season';
import LoaderExampleText from './Loader';

class Class extends React.Component {
    constructor(props){
        super(props);
        this.state = {lat: null, error: null};

    }

    //state initiliztion good practice
    state = {lat: null };

    //content visible on the screen and good for data loading
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat : position.coords.latitude}),
            (err) => this.setState({error : err.message})
        );
    }

    //sit and waiting for the updates
    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    //sit and wait until component is no longer shown
    componentWillUnmount() {
    }

    renderContent() {
        if(this.state.lat && !this.state.error) {
            return <div>
                <Season lat= {this.state.lat}/>
            </div>
        }else if (!this.state.lat && this.state.error){
            return <div>
                Error: {this.state.error}
            </div>
        } else{
            return <div>
                <LoaderExampleText/>
            </div>
        }
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

export default Class;
