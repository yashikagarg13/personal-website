import Q from "q";
import R from "ramda";
import React from "react";
import Slider from "react-slick";

import API from "../helpers/api";
import Constants from "../helpers/constants";

export default class Blog extends React.Component {
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
    .catch(() => {
      this.setState({loading: false});
    });
  }

  componentDidUpdate () {
    R.forEach(post => {
      let text = R.slice(0, 200, $(`#post-${post.id} .html-text`).text()).toString().replace(/ +/g, " ");
      $(`#post-${post.id} .post-content`).text(text + "...");
    }, this.state.posts);
  }

  render () {
    const settings = {
      adaptiveHeight: false,
      arrows: false,
      autoplay: true,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerMode: false,
    };

    return (
      <div id="blog" className="blog">
        <div className="container text-center">
          <i className="fa fa-rss-square margin-right-xs lg primary text" aria-hidden="true"></i>
          <span className="lg uppercase bold text">Blog</span>
          <div className="margin-top-lg">
            {this.state.loading
              ? <div>Loading..</div>
              : <div className="box-wrapper">
                <div className="box">
                  <Slider {...settings}>
                      {R.map(post =>
                        <div id={`post-${post.id}`} key={`post-${post.id}`} className="post">
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
                  </Slider>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}
