import React, { useRef} from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {women} from '../../../ApiFake';


import styles from '../../../scss/Tab.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { faCartPlus, faHeart, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Women() {
    // const [data, SetData] = useState([]);

    const ref = useRef({});
    const next = () => {
        ref.current.slickNext();
    };

    const prev = () => {
        ref.current.slickPrev();
    };

    const setting = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
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
    // useEffect(() => {
    //     SetData(women.slice(0,5))
    //     // console.log(data);
    // }, [data]);
    return (
        <>
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
                    {women.slice(0,5).map((women, index) => (
                        <div className={cx('latest-bottom-img-box')} key={index}>
                            <div className={cx('latest-bottom-img-box-photo')}>
                                <Link to="/details">
                                    <img
                                        src={women.img}
                                        className={cx('latest-bottom-img-box-photo-avarta')}
                                        alt=""
                                    />
                                </Link>
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
                                        {women.name}
                                    </a>
                                </div>
                                <div className={cx('latest-bottom-img-box-text-price', 'pt-3')}>
                                    ${women.promotional_price}
                                    <span>
                                        &nbsp;&nbsp; <del> $ {women.cost}</del>
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

export default Women;
