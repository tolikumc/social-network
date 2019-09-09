import React from 'react';

export default class Status extends React.Component {
  state = {
    editMode: false
  };

  activeChangeStatus = () => {
    this.setState({
      editMode: true
    });
  };
  deactivateChangeStatus = () => {
    this.setState({
      editMode: true
    });
  };

  render() {
    const { editMode } = this.state;
    return (
      <>
        {editMode ? (
          <div>
            <input
              value={this.props.status}
              onBlur={this.deactivateChangeStatus}
              autoFocus={true}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activeChangeStatus}>
              {this.props.status}
            </span>
          </div>
        )}
      </>
    );
  }
}
