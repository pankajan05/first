import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const LoaderExampleText = (props) => (
    <div >
        <Segment style={{paddingTop:200}}>
            <Dimmer active >
                <Loader >{props.text}</Loader>
            </Dimmer>
        </Segment>
    </div>
);

LoaderExampleText.defaultProps = {text: "loading"};

export default LoaderExampleText
