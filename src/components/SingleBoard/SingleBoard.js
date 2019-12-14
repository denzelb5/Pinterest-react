import React from 'react';
import PropTypes from 'prop-types';
import boardData from '../../helpers/data/boardData';

class SingleBoard extends React.Component {
  static propTypes = {
    selectedBoardId: PropTypes.string,
    setSingleBoard: PropTypes.func,
  }

  state = {
    board: {},
  }

  componentDidMount() {
    const { selectedBoardId } = this.props;
    boardData.getSingleBoard(selectedBoardId)
      .then((request) => {
        this.setState({ board: request.data });
      })
      .catch((error) => console.error(error));
  }

  removeSelectedBoardId = (e) => {
    e.preventDefault();
    const { setSingleBoard } = this.props;
    setSingleBoard(null);
  }

  render() {
    const { board } = this.state;
    return (
    <div>
      <button className="btn btn-info" onClick={this.removeSelectedBoardId}>x Close Board View</button>
      <div className="SingleBoard col-8 offset-2">
        <h2>{board.name}</h2>
        <p>{board.description}</p>
        <div className="d-flex flex-wrap">
          {/* all pins */}
        </div>
      </div>
    </div>);
  }
}

export default SingleBoard;
