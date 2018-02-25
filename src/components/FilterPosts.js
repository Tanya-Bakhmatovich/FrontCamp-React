import React from 'react';

export default class FilterPosts extends React.Component {

  filter = () => {
    this.props.filterPosts();
  }

  render() {

    return (
      <div className='form-group'>
          <div className='col-auto'>
              <label> Filter by authors</label>
                  <input
                      id='id-input-filter'
                      type='text'
                      className='form-control'
                      onChange={this.filter}
                  />
          </div>
      </div>
    );
  }
}
