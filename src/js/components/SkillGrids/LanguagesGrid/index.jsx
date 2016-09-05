import React from 'react';
import Slider from 'react-slick';
import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import IconButton from 'material-ui/IconButton';

import {
  CssIcon,
  HtmlIcon,
  JavaIcon,
  JsIcon,
} from '../../Icons';
import styles from '../styles.css';

const PrevButton = ({ onClick }) => ( // eslint-disable-line react/prop-types
  <IconButton
    onClick={onClick}
    tooltip="Previous"
  >
    <KeyboardArrowLeft />
  </IconButton>
);

const NextButton = ({ onClick }) => ( // eslint-disable-line react/prop-types
  <IconButton
    onClick={onClick}
    tooltip="Next"
  >
    <KeyboardArrowRight />
  </IconButton>
);


const settings = {
  accessability: true,
  adaptiveHeight: true,
  className: 'slides',
  dots: false,
  draggable: true,
  focusOnSelect: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipe: true,
  prevArrow: <PrevButton />,
  nextArrow: <NextButton />,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
    },
  },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }],
  variableWidth: true,
};

const LanguagesGrid = () => (
  <div className="container">
    <Slider {...settings}>
      <div className="box"><JsIcon /></div>
      <div className="box"><JavaIcon /></div>
      <div className="box"><HtmlIcon /></div>
      <div className="box"><CssIcon /></div>
    </Slider>
  </div>
);

export default LanguagesGrid
;