import React, { Component } from 'react';
export default class FooterMenu extends Component{

  state = {
    activeFilter: 'all',
  };
  //state - 自分自身を再描画する(更新する)ためにあるもの

  handleFilter = (filter) => {
    this.setState({
      activeFilter: filter,
    });
    //hanlefilterでactiveFilterの状態を更新する(条件分岐する)

    //todo - add action here

  }

  render(){

    const { activeFilter } = this.state;

    return(
      <div>
        <span>Show : {activeFilter}</span>

        {
          //show status by adding {activeFilter}
        }
        <button disabled={activeFilter === 'all'} onClick={() => this.handleFilter('all')}>
          All
        </button>
        <button disabled={activeFilter === 'active'} onClick={() => this.handleFilter('active')}>
          Active
        </button>
        <button disabled={activeFilter === 'completed'} onClick={() => this.handleFilter('completed')}>
          Completed
        </button>
      </div>
    )
  }
}
