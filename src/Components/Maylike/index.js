import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';

import {maylike} from '../../ApiFake';
import styles from '../../scss/Tab.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const cx = classNames.bind(styles);

function Sliders() {
    const ref = useRef({});
    const next = () => {
        ref.current.slickNext();
    };

    const prev = () => {
        ref.current.slickPrev();
    };

    const setting = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1198,
                setting: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                setting: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <h1 className={cx('slider-title')}>You May Like</h1>
            <div className={cx('latest-bottom-items-btn')}>
                <button className={cx('latest-bottom-items-btn-prev')} onClick={prev}>
                    &lsaquo;
                </button>
                <button className={cx('latest-bottom-items-btn-next')} onClick={next}>
                    &rsaquo;
                </button>
            </div>

            <div className={cx('latest-bottom-img')}>
                <Slider ref={ref} {...setting}>
                    {maylike.map((maylike, index) => (
                        <div className={cx('latest-bottom-img-box')} key={index}>
                            <div className={cx('latest-bottom-img-box-photo')}>
                                <a href="#top">
                                    <img
                                        src={maylike.img}
                                        className={cx('latest-bottom-img-box-photo-avarta')}
                                        alt=""
                                    />
                                </a>
                                <div className={cx('latest-bottom-img-box-text-icon')}>
                                    <a href="#top" className={cx('latest-bottom-img-box-text-icon_product', 'd-block')}>
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </a>
                                    <a href="#top" className={cx('latest-bottom-img-box-text-icon_product', 'd-block')}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </a>
                                    <a href="#top" className={cx('latest-bottom-img-box-text-icon_product', 'd-block')}>
                                        <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                                    </a>
                                </div>
                            </div>
                            <div className={cx('latest-bottom-img-box-text')}>
                                <div className={cx('latest-bottom-img-box-text-name', 'pt-5')}>
                                    <a href="#top" className={cx('latest-bottom-img-box-text-name_product', 'd-block')}>
                                       {maylike.name}
                                    </a>
                                </div>
                                <div className={cx('latest-bottom-img-box-text-price', 'pt-3')}>
                                    ${maylike.promotional_price}
                                    <span>
                                        &nbsp;&nbsp; <del> ${maylike.cost}</del>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default Sliders;
