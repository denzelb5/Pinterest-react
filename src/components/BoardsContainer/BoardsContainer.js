import React from 'react';
import PropTypes from 'prop-types';
import boardData from '../../helpers/data/boardData';
import authData from '../../helpers/data/authData';
import Board from '../Board/Board';


class BoardsContainer extends React.Component {
  static propTypes = {
    setSingleBoard: PropTypes.func,

  }

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
    const { setSingleBoard } = this.props;
    return (<div>{this.state.boards.map((board) => (<Board key={board.id} board={board} setSingleBoard={setSingleBoard} />))}</div>);
  }
}

export default BoardsContainer;
