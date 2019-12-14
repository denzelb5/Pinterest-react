import React from 'react';
import boardData from '../../helpers/data/boardData';
import authData from '../../helpers/data/authData';
import Board from '../Board/Board';

class BoardsContainer extends React.Component {
  state = {
    boards: [],
  }

  componentDidMount() {
    boardData.getBoardsByUid(authData.getUid())
      .then((boards) => {
        this.setState({ boards });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (<div>{this.state.boards.map((board) => (<Board key={board.id} board={board}/>))}</div>);
  }
}

export default BoardsContainer;
