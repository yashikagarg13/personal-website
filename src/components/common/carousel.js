import R from "ramda";
import React, {PropTypes} from "react";

export default class Carousel extends React.Component {
  componentDidMount() {
    $(`#${this.props.carouselId}`).carousel();
  }

  // state = current slide
  // add active class if given slide is current

  render () {
    return (
      <div id={this.props.carouselId} className="carousel slide">
        <div className="carousel-inner" role="listbox">
          {this.props.children}
        </div>

        <ol className="carousel-indicators">
          {R.map(index =>
            <li key={`index-${index}`} data-target={`#${this.props.carouselId}`} data-slide-to={index}></li>,
          R.range(0, R.length(this.props.children)))}
        </ol>
      </div>
    );
  }
}

Carousel.propTypes = {
  carouselId: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
