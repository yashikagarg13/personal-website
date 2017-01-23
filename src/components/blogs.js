import Q from "q";
import R from "ramda";
import React from "react";

import API from "../helpers/api";
import Constants from "../helpers/constants";

export default class Blogs extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      posts: [],
      loading: true,
    };
  }

  componentDidMount () {
    return Q.all(
      R.map(blog => API.getPostsByBlogId(blog.id), Constants.blogs)
    ).then(dataSets => {

      let posts = R.reduce((posts, dataSet) => R.concat(posts, dataSet.items), [], dataSets);
      posts = R.map(post => {
        post.blog.title = R.prop("title", R.find(blog => blog.id == post.blog.id, Constants.blogs));
        return post;
      }, posts);

      this.setState({posts, loading: false});
    })
    .catch(error => {
      console.log(error);
      this.setState({loading: false});
    });
  }

  componentDidUpdate () {
    R.forEach(post => {
      let text = R.slice(0, 220, $(`#post-${post.id} .html-text`).text()).toString().replace(/ +/g, " ");
      $(`#post-${post.id} .post-content`).text(text + "...");
    }, this.state.posts);
  }

  render () {
    return (
      <div id="blogs" className="blogs">
        <div className="container text-center">
          <i className="fa fa-rss-square margin-right-xs lg primary text" aria-hidden="true"></i>
          <span className="lg uppercase bold text">Blogs</span>
          <div className="margin-top-lg">
            {this.state.loading
              ? <div>Loading..</div>
              : <div className="box-wrapper">
                <div className="box">
                      {R.map(post =>
                        <div id={`post-${post.id}`} key={`post-${post.id}`} className="item post">
                          <div className="padding-sm clearfix">
                            <a href={post.url} target="_blank" className="md bold text">{post.title}</a>
                            <div className="sm dark-vimp text margin-bottom-sm ">By {post.author.displayName} at
                              <span className="accent text"> {post.blog.title}</span></div>
                            <div className="sm dark-imp text margin-bottom-sm post-content"></div>
                            <div className="hidden html-text"
                              dangerouslySetInnerHTML={{ __html: post.content}}></div>
                          </div>
                        </div>,
                      this.state.posts)}
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}
