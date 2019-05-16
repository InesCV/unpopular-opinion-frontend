import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import { toast } from 'react-toastify';

import {errorTypes} from "../constants/constants";

class FileUpload extends Component {
  state = {
    uploaded: 0,
  }

  handleFileChange (e) {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref(`${this.props.type}/${Date.now()}`);
    const task = storageRef.put(file);

    task.on('state_changed', 
      (snapshot) => {
        this.setState({
          uploaded: Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100),
        })
      }, 
      (error) => {
        toast.error(`Sorry. ${errorTypes.E600U}`, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }, 
      () => {
        task.snapshot.ref.getDownloadURL().then((newUrl) => {
          this.props.updateFunction(newUrl);
          this.setState({
            uploaded: 0,
            photo: newUrl,
          })
        })
      }
    )
  }

  render () {
    const {uploaded} = this.state.uploaded;
    return (
      <div>
        <label
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ backgroundImage: `url(${this.state.photo})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '50vh',
        }}>
          Upload Photo
          <input type="file" style={{display: 'none'}} onChange={this.handleFileChange.bind(this)} />
          { (uploaded < 100) && <progress value={uploaded} max='100' style={{backgroundColor: 'blue'}}>{uploaded} %</progress> }
        </label>
      </div>

    )
  }
}

export default FileUpload