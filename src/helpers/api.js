import Axios from "axios";

import Constants from "./constants";

export default {
  getSelfBlogs() {
    return Axios.get(`${Constants.blogAPIBaseUrl}users/self/blogs?key=${Constants.googleAPIKey}`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });
  },
  getPostsByBlogId(blogId) {
    return Axios.get(`${Constants.blogAPIBaseUrl}blogs/${blogId}/posts?key=${Constants.googleAPIKey}`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });
  },
  getVideos() {
    return Axios.get(`${Constants.youtubeAPIBaseUrl}search?key=${Constants.googleAPIKey}&channelId=UC0WYdxxVf_WOFQP4c8J9kKg&part=snippet,id&order=date`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });
  }
};