import Axios from "axios";

import Constants from "./constants";

export default {
  getSelfBlogs() {
    return Axios.get(`${Constants.blogAPIBaseUrl}users/self/blogs?key=${Constants.googleAPIKey}`)
    .then(response => response.data)
    .catch(error => {
      console.warn(error);
    });
  },
  getPostsByBlogId(blogId) {
    return Axios.get(`${Constants.blogAPIBaseUrl}blogs/${blogId}/posts?key=${Constants.googleAPIKey}`)
    .then(response => response.data)
    .catch(error => {
      console.warn(error);
    });
  },
};