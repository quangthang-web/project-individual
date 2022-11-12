import React, { useRef } from 'react';
import classNames from 'classnames/bind';

import Tab from '../../Components/Tab';
import Section from '../../Components/Section';
import Maylike from '../../Components/Maylike';
import Lastnew from '../../Components/LastNew';

import img from '../../asset/images';
import styles from '../../scss/Home.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const cx = classNames.bind(styles);

function Home() {
    const ref = useRef({});
    const next = () => {
        ref.current.slickNext();
    };

    const prev = () => {
        ref.current.slickPrev();
    };

    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1198,
                setting: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                setting: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    
    return (
        <>
            <div className={cx('wapper')}>
                <div className={cx('box')}>
                    <div className={cx('box-items-btn')}>
                        <button className={cx('box-items-btn-prev')} onClick={prev}>
                            &lsaquo;
                        </button>
                        <button className={cx('box-items-btn-next')} onClick={next}>
                            &rsaquo;
                        </button>
                    </div>
                    <Slider ref={ref} {...settings}>
                        <div className={cx('box-img')}>
                            <div className={cx('container')}>
                                <div className={cx('row')}>
                                    <div
                                        className={cx(
                                            'pt-5',
                                            'mt-5',
                                            'col-xxl-5',
                                            'col-xl-6',
                                            'col-lg-7',
                                            'col-md-8',
                                            'col-sm-10',
                                        )}
                                    >
                                        <div className={cx('box-left')}>
                                            <span>Fashion Sale</span>
                                            <h1 className={cx('box-title-banner')}>Minimal Menz Style</h1>
                                            <p className={cx('box-content-banner')}>
                                                Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas
                                                iure, delectus dignissimos facilis neque nulla earum.
                                            </p>
                                            <a href="#top" className={cx('box-btn')}>
                                                Shop Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('box-img-right')}>
                            <div className={cx('container')}>
                                <div className={cx('row', 'justify-content-end')}>
                                    <div
                                        className={cx(
                                            'pt-5',
                                            'mt-5',
                                            'col-xxl-5',
                                            'col-xl-6',
                                            'col-lg-7',
                                            'col-md-8',
                                            'col-sm-10',
                                        )}
                                    >
                                        <div className={cx('box-left')}>
                                            <span>Fashion Sale</span>
                                            <h1 className={cx('box-title-banner')}>Minimal Menz Style</h1>
                                            <p className={cx('box-content-banner')}>
                                                Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas
                                                iure, delectus dignissimos facilis neque nulla earum.
                                            </p>
                                            <a href="#top" className={cx('box-btn')}>
                                                Shop Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

                <div className={cx('product', 'pt-5')}>
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            <div className={cx('col-xl-4', 'col-lg-4', 'col-md-6', 'col-sm-6')}>
                                <div className={cx('product_1', 'mb-2')}>
                                    <div className={cx('product_photo')}>
                                        <img src={img.logoProduct_1} className={cx('product_img')} alt="" />
                                    </div>
                                    <div className={cx('product_text')}>
                                        <h2 className={cx('product_title')}>
                                            <a href="#top" className={cx('product_link_shop')}>
                                                Men's Fashion
                                            </a>
                                        </h2>
                                        <a href="#top" className={cx('product_link')}>
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-xl-4', 'col-lg-4', 'col-md-6', 'col-sm-6')}>
                                <div className={cx('product_1', 'mb-2')}>
                                    <div className={cx('product_photo')}>
                                        <img src={img.logoProduct_2} className={cx('product_img')} alt="" />
                                    </div>
                                    <div className={cx('product_text')}>
                                        <h2 className={cx('product_title')}>
                                            <a href="#top" className={cx('product_link_shop')}>
                                                Women's Fashion
                                            </a>
                                        </h2>
                                        <a href="#top" className={cx('product_link')}>
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-xl-4', 'col-lg-4', 'col-md-6', 'col-sm-6')}>
                                <div className={cx('product_1', 'mb-2')}>
                                    <div className={cx('product_photo')}>
                                        <img src={img.logoProduct_3} className={cx('product_img')} alt="" />
                                    </div>
                                    <div className={cx('product_text')}>
                                        <h2 className={cx('product_title')}>
                                            <a href="#top" className={cx('product_link_shop')}>
                                                Baby Fashion
                                            </a>
                                        </h2>
                                        <a href="#top" className={cx('product_link')}>
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('latest')}>
                    <div className={cx('container','p-0')}>
                        <div className={cx('row')}>
                            <div className={cx('latest-items')}>
                                <Tab></Tab>
                            </div>
                        </div>
                    </div>
                    <Section></Section>
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            <div className={cx('section-sliders')}>
                                <Maylike></Maylike>
                            </div>
                        </div>
                    </div>
                    <div className={cx('latest-news')}>
                        <Lastnew></Lastnew>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
