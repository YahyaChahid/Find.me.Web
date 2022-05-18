import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Modal from '../elements/Modal';
import Image from "../elements/Image";
import {Link} from "react-router-dom";

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <span className="text-color-primary">Find.me</span> the magic marker
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Find.me is a tool that makes it easier to find addresses
                and contact information.
                </p>
              <div className="reveal-from-bottom mt-4" data-reveal-delay="600">
                <ButtonGroup>
                  <Link to="/signup">
                    <Button color="primary" wideMobile>
                      Get started
                    </Button>
                  </Link>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01 parent" data-reveal-value="20px" data-reveal-delay="800">
            <img
              className="has-shadow image1"
              src={require('./../../assets/images/map.jpg')}
              alt="Hero"
              width={896}
              height={504}
            />
            <img
              className="has-shadow image2"
              src={require('./../../assets/images/man.png')}
              alt="Hero"
              width={60}
              height={60}
            />
            <p className="textInsideImage px-2 py-1 bg-light text-black rounded-3">
              Dive in and see how easy it is!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
