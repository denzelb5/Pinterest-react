import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';

class BoardForm extends React.Component {
  static propTypes = {
    addBoard: PropTypes.func,
  }

  state = {
    boardName: '',
    boardDescription: '',
  }

  saveBoardEvent = (e) => {
    const { addBoard } = this.props;
    e.preventDefault();
    const newBoard = {
      name: this.state.boardName,
      description: this.state.boardDescription,
      uid: authData.getUid(),
    };
    // capturing data from user form input
    addBoard(newBoard);
    this.setState({ boardName: '', boardDescription: '' });
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ boardName: e.target.value })
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ boardDescription: e.target.value });
  }

  render() {
    return (
      <form className='col-6 offset-3 BoardForm'>
  <div className="form-group">
    <label htmlFor="order-name">Board Name:</label>
    <input
      type="text"
      className="form-control"
      id="board-name"
      placeholder="Enter board name"
      value={this.state.boardName}
      onChange={this.nameChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="description-name">Board Description:</label>
    <input
      type="text"
      className="form-control"
      id="board-description"
      placeholder="Enter board description"
      value={this.state.boardDescription}
      onChange={this.descriptionChange}
    />
  </div>
  <button className="btn btn-secondary" onClick={this.saveBoardEvent}>Save Board</button>
</form>
    );
  }
}

export default BoardForm;
