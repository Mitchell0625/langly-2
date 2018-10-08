import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import Text from './Text/Text';
import './Upload.css';

class Upload extends Component {
  state = {
    accepted: [],
    rejected: []
  };
  onDrop = (accepted, rejected) => {
    this.setState({ accepted, rejected });
    console.log('These were accepted:', accepted);
    console.log('These were rejected:', rejected);
  };

  showText = () => {};

  render() {
    return (
      <div className="upload">
        <div className="upload__dropzone__div">
          <Dropzone
            className="dropzone"
            accept="application/pdf, application/msword"
            onDrop={this.onDrop}
          >
            <p>Drop files here or click to select files to upload</p>
            <p>Only .pdf and .docx files will be accepted</p>
          </Dropzone>
        </div>
        <Text file={this.state.accepted} />
        <button>Save for Translation</button>
      </div>
    );
  }
}

export default Upload;
