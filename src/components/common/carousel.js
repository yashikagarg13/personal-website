import R from "ramda";
import React, {PropTypes} from "react";

class Carousel extends React.Component {
  componentDidMount() {
    $(`#${this.props.carouselId}`).carousel();
  }

  // state = current slide
  // add active class if given slide is current

  render () {
    return (
      <div id={this.props.carouselId} className="carousel slide">
        <div className="carousel-inner" role="listbox">
          {R.map(index =>
            <div key={`data-${index}`} className={`item ${index == 0 ? "active" : ""}`}>

              <img className="img" src={`/public/${this.props.data[index]}`} alt=""></img>
            </div>,
          R.range(0, R.length(this.props.data)))}
        </div>

        <ol className="carousel-indicators">
          {R.map(index =>
            <li key={`index-${index}`} data-target={`#${this.props.carouselId}`} data-slide-to={index}></li>,
          R.range(0, R.length(this.props.data)))}
        </ol>
      </div>
    );
  }
}
Carousel.propTypes = {
  carouselId: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

class CarouselMultiple extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      activeSlide: 1,
    };
    this.moveToNextSlide = this.moveToNextSlide.bind(this);
  }
  componentDidMount() {
    $(`#${this.props.carouselId}`).carousel();
    this.supportMultipleCards();
  }
  componentDidUpdate() {
    this.supportMultipleCards();
  }

  supportMultipleCards() {
    const margin = 25;

    let carouselWidth = $(".box").width(); //$(`#${this.props.carouselId} .carousel-inner`).width();
    let itemWidth = (carouselWidth - (margin * 2))/this.props.numberOfCards;

    let self = this;
    $(`#${this.props.carouselId} .carousel-inner .item`).each(function (i) {
      self.setActiveCards($(this), i, self.state.activeSlide, self.props.numberOfCards);
      $(this).width(itemWidth);
    });

    $(`#${this.props.carouselId}`).on("slide.bs.carousel", function (event) {
      $(`#${self.props.carouselId} .carousel-inner .item`).each(function (i) {
        self.setActiveCards($(this), i, self.state.activeSlide, self.props.numberOfCards);
      });
    });
  }

  moveToNextSlide(index) {
    this.setState({
      activeSlide: index,
    });
  }

  setActiveCards($card, index, activeSlide, numberOfCards) {
    console.log('index, activeSlide, numberOfCards', index, activeSlide, numberOfCards);
    if (index >= ((activeSlide - 1) * numberOfCards) &&
          index < (activeSlide * numberOfCards)) {
      $card.addClass("active");
    } else {
      $card.removeClass("active");
    }
  }

  render () {
    return (
      <div id={this.props.carouselId} className="carousel slide">
        <div className="carousel-inner" role="listbox">
          {this.props.children}
        </div>

        <ol className="carousel-indicators">
          {R.map(index =>
            <li key={`index-${index}`} data-target={`#${this.props.carouselId}`}
              data-slide-to={(index-1) * this.props.numberOfCards}
              onClick={this.moveToNextSlide.bind(this, index)}></li>,
          R.range(1, Math.ceil(R.length(this.props.children) / this.props.numberOfCards) + 1))}
        </ol>
      </div>
    );
  }
}

// data slide to
// active class for cards and pagination both

CarouselMultiple.propTypes = {
  carouselId: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  numberOfCards: PropTypes.number,
};


export {Carousel, CarouselMultiple};