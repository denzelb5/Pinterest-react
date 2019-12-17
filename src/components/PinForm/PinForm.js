import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

class PinForm extends React.Component {
  static propTypes = {
    savePin: PropTypes.func,
    selectedBoardId: PropTypes.string,
  }

  state = {
    pinTitle: '',
    pinImageUrl: '',
  }

  savePinEvent = (e) => {
    const { savePin, selectedBoardId } = this.props;
    e.preventDefault();
    const newPin = {
      title: this.state.pinTitle,
      imageUrl: this.state.pinImageUrl,
      uid: authData.getUid(),
      boardId: selectedBoardId,
    };
    savePin(newPin);
  }

  titleChange = (e) => {
    e.preventDefault();
    this.setState({ pinTitle: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ pinImageUrl: e.target.value });
  }

  render() {
    const { pinTitle, pinImageUrl } = this.state;

    return (
      <form className='col-6 offset-3 PinForm'>
          <div className="form-group">
            <label htmlFor="pin-title">Pin Title:</label>
            <input
              type="text"
              className="form-control"
              id="pin-title"
              placeholder="Cat Pic"
              value={pinTitle}
              onChange={this.titleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pin-image-url">Pin Image Url:</label>
            <input
              type="text"
              className="form-control"
              id="pin-image-url"
              placeholder="https://www.google.com"
              value={pinImageUrl}
              onChange={this.imageChange}
            />
          </div>
          <button className="btn btn-secondary" onClick={this.savePinEvent}>Add Pin</button>
        </form>
    );
  }
}

export default PinForm;
