import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h3 className="m-0">
        <Link to="/">
          <div className="d-flex gap-3 align-items-center">
            <img
                src={require('./../../../assets/images/logo.png')}
                width={32}
                height={32}
            />
          </div>
        </Link>
      </h3>
    </div>
  );
}

export default Logo;