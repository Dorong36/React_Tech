import React from 'react';
import styles from '../styles/CssModule.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const CssModule = () => {
    return (
        <div className={cx('wrapper', 'inverted')}>
            Hello, I'm <span className="something">CSS Module!!</span>
        </div>
    );
};

export default CssModule;