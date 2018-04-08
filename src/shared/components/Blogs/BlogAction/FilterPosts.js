import React from 'react';

export default class FilterPosts extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };
    }

    handleChange = (e) => {
        this.props.filterBlogs(e.target.value);
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
                          onChange={this.handleChange}
                      />
              </div>
            </div>
            );
        }
    }
