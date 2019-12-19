import React from 'react';
import PropTypes from 'prop-types';
import boardShape from '../../helpers/propz/boardShape';

class Board extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
    setSingleBoard: PropTypes.func,
    setEditMode: PropTypes.func,
    setBoardToEdit: PropTypes.func,
  }

  setSelectedBoardId = (e) => {
    e.preventDefault();
    const { setSingleBoard, board } = this.props;
    setSingleBoard(board.id);
  }

  setEditMode = (e) => {
    e.preventDefault();
    this.props.setEditMode(true);
    this.props.setBoardToEdit(this.props.board);
  }


  render() {
    const { board } = this.props;
    return (
      <div className="Board col-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{board.name}</h5>
            <p className="card-text">{board.description}</p>
            <button className="btn btn-primary" onClick={this.setSelectedBoardId}>View Pins</button>
            <button className="btn btn-danger" onClick={this.setEditMode}>Edit Board</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
