import React from 'react';
import PropTypes from 'prop-types';
import boardData from '../../helpers/data/boardData';
import authData from '../../helpers/data/authData';
import Board from '../Board/Board';
import BoardForm from '../BoardForm/BoardForm';


class BoardsContainer extends React.Component {
  static propTypes = {
    setSingleBoard: PropTypes.func,

  }

  state = {
    boards: [],
    editMode: false,
    boardToEdit: {},
  }

  componentDidMount() {
    this.getBoards();
  }

  getBoards = () => {
    boardData.getBoardsByUid(authData.getUid())
      .then((boards) => {
        this.setState({ boards });
      })
      .catch((error) => console.error(error));
  }


  addBoard = (newBoard) => {
    boardData.saveBoard(newBoard)
      .then(() => {
        this.getBoards();
        this.setState({ showBoardForm: false });
      })
      .catch((error) => (error));
  }

  updateBoard = (boardId, updatedBoard) => {
    boardData.updateBoard(boardId, updatedBoard)
      .then(() => {
        this.getBoards();
        this.setState({ editMode: false, showBoardForm: false });
      })
      .catch((error) => console.error(error));
  }

  setEditMode = (editMode) => {
    this.setState({ editMode, showBoardForm: true });
  };

  setBoardToEdit = (board) => {
    this.setState({ boardToEdit: board });
  }

  setShowBoardForm = () => {
    this.setState({ showBoardForm: true });
  }

  render() {
    const { setSingleBoard } = this.props;
    return (<div>
      <button onClick={this.setShowBoardForm}>Add a new board</button>
    { this.state.showBoardForm && <BoardForm addBoard={this.addBoard} editMode={this.state.editMode} boardToEdit={this.state.boardToEdit} updateBoard={this.updateBoard} /> }
      {this.state.boards.map((board) => (<Board key={board.id} board={board} setSingleBoard={setSingleBoard} setEditMode={this.setEditMode} setBoardToEdit={this.setBoardToEdit} />))}</div>);
  }
}

export default BoardsContainer;
