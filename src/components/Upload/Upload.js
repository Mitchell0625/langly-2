import React, { Component } from 'react';
import axios from 'axios';
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
    if (rejected.length > 1) {
      console.log(`${rejected[0]} was not accepted`);
    }
  };

  saveToAws = () => {
    const formData = new FormData();
    formData.append('file', this.state.accepted[0]);
    axios
      .post(`/api/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(() => {
        this.setState({ accepted: [] });
      })
      //   .then(() => window.URL.revokeObjectURL(this.state.accepted[0].preview))
      .catch(err => console.log(err));
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
        <button onClick={this.saveToAws}>Save for Translation</button>
      </div>
    );
  }
}

export default Upload;
