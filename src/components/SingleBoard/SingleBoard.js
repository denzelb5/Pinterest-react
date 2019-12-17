import React from 'react';
import PropTypes from 'prop-types';

import boardData from '../../helpers/data/boardData';
import pinData from '../../helpers/data/pinData';

import Pin from '../Pin/Pin';

class SingleBoard extends React.Component {
  static propTypes = {
    selectedBoardId: PropTypes.string,
    setSingleBoard: PropTypes.func,
  }

  state = {
    board: {},
    pins: [],
  }

  getPinData = (selectedBoardId) => {
    pinData.getPinsByBoardId(selectedBoardId)
      .then((pins) => {
        this.setState({ pins });
      })
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    const { selectedBoardId } = this.props;
    boardData.getSingleBoard(selectedBoardId)
      .then((request) => {
        this.setState({ board: request.data });
        this.getPinData(selectedBoardId);
      })
      .catch((errorFromGetPins) => console.error({ errorFromGetPins }));
  }

deleteSinglePin = (pinId) => {
  const { selectedBoardId } = this.props;
  pinData.deletePin(pinId)
    .then(() => {
      this.getPinData(selectedBoardId);
    })
    .catch((error) => console.error(error));
}

  removeSelectedBoardId = (e) => {
    e.preventDefault();
    const { setSingleBoard } = this.props;
    setSingleBoard(null);
  }

  render() {
    const { board, pins } = this.state;
    return (
      <div>
        <button className="btn btn-info" onClick={this.removeSelectedBoardId}>x Close Board View</button>
        <div className="SingleBoard col-8 offset-2">
          <h2>{board.name}</h2>
          <p>{board.description}</p>
          <div className="d-flex flex-wrap">
            { pins.map((pin) => <Pin pin={pin} key={pin.id} deleteSinglePin={this.deleteSinglePin} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBoard;
