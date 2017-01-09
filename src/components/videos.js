import R from "ramda";
import React from "react";

import API from "../helpers/api";
import Constants from "../helpers/constants";

export default class Videos extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      videos: [],
      loading: true,
    };
  }

  componentDidMount () {
    return API.getVideos()
    .then(data => {
      let videos = R.slice(0, R.length(data.items) - 1, data.items);
      this.setState({videos, loading: false});
    })
    .catch(error => {
      console.log(error);
      this.setState({loading: false});
    });
  }

  render () {
    return (
      <div id="videos" className="videos">
        <div className="container text-center">
          <i className="fa fa-video-camera margin-right-xs lg primary text" aria-hidden="true"></i>
          <span className="lg uppercase bold text">Videos</span>
          <div className="margin-top-lg">
            {this.state.loading
              ? <div>Loading...</div>
              : <div className="box">
                {R.map(video =>
                  <div key={`video-${video.id.videoId}`} className="video">
                    <div className="media-wrapper">
                      <iframe title={video.snippet.title} height="250"
                        src={`${Constants.youtubeEmbedUrl}${video.id.videoId}`} frameBorder={0}
                        allowFullScreen></iframe>
                    </div>
                    <div className="padding-sm">
                      <a href={`${Constants.youtubeWatchUrl}${video.id.videoId}`} target="_blank" className="md text">
                        {video.snippet.title}</a>
                    </div>
                  </div>,
                this.state.videos)}
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}
