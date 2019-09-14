import React from 'react';

export default class Status extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  activeChangeStatus = () => {
    this.setState({
      editMode: true
    });
  };
  deactivateChangeStatus = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = e => {
    this.setState({
      status: e.target.value
    });
  };
  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.state.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  render() {
    const { editMode, status } = this.state;
    return (
      <>
        {editMode ? (
          <div>
            <input
              value={status}
              onBlur={this.deactivateChangeStatus}
              autoFocus={true}
              onChange={this.onStatusChange}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activeChangeStatus}>
              {status || 'Here your status'}
            </span>
          </div>
        )}
      </>
    );
  }
}
