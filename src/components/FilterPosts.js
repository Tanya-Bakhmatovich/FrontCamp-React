import React from 'react';

export default class FilterPosts extends React.Component {

  filter = () => {
    const { posts } = this.props;
    const value = document.getElementById('id-input-filter').value;

    const newPosts = posts.filter(({ author }) => author.indexOf(value) > -1);

    this.props.filterPosts(newPosts);
  }

  render() {

    return (
      <div className={`form-group`}>
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
};
