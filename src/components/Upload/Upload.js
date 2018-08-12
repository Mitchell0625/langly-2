import React, { Component } from 'react';
import Dropzone from 'react-dropzone';


class Upload extends Component {
    state = {
        accepted: [],
        rejected: []
    }
    onDrop = (accepted, rejected) => {
        this.setState({ accepted, rejected });
        console.log('These were accepted:', accepted);
        console.log('These were rejected:', rejected);
    }

    render() {
        return (
            <div className='upload'>
                <Dropzone accept='application/pdf' onDrop={this.onDrop}>
                    <p>Drop pdf here or click to select files to upload</p>
                </Dropzone>
            </div>
        )
    }
}

export default Upload;