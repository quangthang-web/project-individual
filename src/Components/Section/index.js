import React, { useRef } from 'react';
import classNames from 'classnames/bind';

import styles from '../../scss/Section.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cx = classNames.bind(styles);

function Section() {
    const ref = useRef({});
    const next = () => {
        ref.current.slickNext();
    };

    const prev = () => {
        ref.current.slickPrev();
    };

    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className={cx('testimonial')}>
            <div className={cx('container')}>
                <div className={cx('row', 'justify-content-center')}>
                    <div className={cx('testimonial-btn')}>
                        <button className={cx('testimonial-btn-prev')} onClick={prev}>
                            &lsaquo;
                        </button>
                        <button className={cx('testimonial-btn-next')} onClick={next}>
                            &rsaquo;
                        </button>
                    </div>
                    <Slider ref={ref} {...settings}>
                        <div className={cx('testimonial-modal')}>
                            <h2 className={cx('testimonial-cap')}>Customer Testimonial</h2>
                            <p className={cx('testimonial-content')}>
                                Everybody is different, which is why we offer styles for every body. Laborum fuga
                                incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.
                            </p>
                        </div>
                        <div className={cx('testimonial-modal')}>
                            <h2 className={cx('testimonial-cap')}>Customer Testimonial</h2>
                            <p className={cx('testimonial-content')}>
                                Everybody is different, which is why we offer styles for every body. Laborum fuga
                                incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.
                            </p>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Section;
