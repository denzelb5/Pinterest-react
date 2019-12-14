import React from 'react';
import boardData from '../../helpers/data/boardData';
import authData from '../../helpers/data/authData';

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
    return (<div>{this.state.boards.map((board) => <h6>{board.name}</h6>)}</div>);
  }
}

export default BoardsContainer;
