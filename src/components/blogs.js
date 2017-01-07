import Q from "q";
import R from "ramda";
import React from "react";

import API from "../helpers/api";
import Constants from "../helpers/constants";

export default class Blogs extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      blogs: Constants.blogs,
      loading: true,
    };
  }

  componentDidMount () {
    return Q.all(
      R.map(blog => API.getPostsByBlogId(blog.id), Constants.blogs)
    ).then(dataSet => {
      let blogs = this.state.blogs;
      blogs = R.map(blog => {
        blog.posts = R.prop("items", R.find(data => data.items[0].blog.id == blog.id, dataSet));
        return blog;
      }, blogs);

      this.setState({blogs, loading: false});
    })
    .catch(error => {
      console.warn(error);
      this.setState({loading: false});
    });
  }

  componentDidUpdate () {
    R.forEach(blog => {
      R.forEach(post => {
        let text = R.slice(0, 220, $(`#post-${post.id} .html-text`).text()).toString().replace(/ +/g, " ");
        $(`#post-${post.id} .post-content`).text(text + "...");
      }, blog.posts)
    }, this.state.blogs)
  }

  render () {
    return (
      <div id="blogs" className="blogs">
        <div className="container text-center">
          <i className="fa fa-rss-square margin-right-xs lg primary text" aria-hidden="true"></i>
          <span className="lg uppercase bold text">Blogs</span>
          <div className="margin-top-lg">
            {this.state.loading
              ? <div></div>
              : <div>
                {R.map(blog =>
                  <div key={`blog-${blog.id}`} className="box clearfix">
                    {R.map(post =>
                      <div id={`post-${post.id}`} key={`post-${post.id}`} className="post">
                        <div className="padding-sm clearfix">
                          <a href={post.url} target="_blank" className="md bold text">{post.title}</a>
                          <div className="sm dark-vimp text margin-bottom-sm ">By {post.author.displayName} at
                            <span className="accent text"> {blog.title}</span></div>
                          <div className="sm dark-imp text margin-bottom-sm post-content"></div>
                          <div className="hidden html-text"
                            dangerouslySetInnerHTML={{ __html: post.content}}></div>
                        </div>
                      </div>,
                    blog.posts)}
                  </div>,
                this.state.blogs)}
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}
