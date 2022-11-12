/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';

import img from '../../asset/images/';
import styles from '../../scss/Lastnew.module.scss';
const cx = classNames.bind(styles);

function Lastnew() {
    
    return (
        <div className={cx('lastnew')}>
            <h1 className={cx('lastnew-title')}>Latest News</h1>
            <div className={cx('container')}>
                <div className={cx('d-flex')}>
                    <div className={cx('lastnew-blog')}>
                        <div className={cx('lastnew-photo')}>
                            <img src={img.lastNew_1} className={cx('lastnew-img')} />
                        </div>
                        <div className={cx('lastnew-fashion')}>Fashion Tips</div>
                        <h5 className={cx('lastnew-name')}>
                            <a href="#s" className={cx('lastnew-name-link')}>
                                What Curling Irons Are The Best Ones
                            </a>
                        </h5>
                        <div className={cx('lastnew-describe', 'text-start', 'pb-4')}>
                            Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..
                        </div>
                        <a href="#s" className={cx('lastnew-link', 'text-start')}>
                            Read More
                        </a>
                    </div>
                    <div className={cx('lastnew-blog')}>
                        <div className={cx('lastnew-photo')}>
                            <img src={img.lastNew_2} className={cx('lastnew-img')} />
                        </div>
                        <div className={cx('lastnew-fashion')}>Fashion Tips</div>
                        <h5 className={cx('lastnew-name')}>
                            <a href="#s" className={cx('lastnew-name-link')}>
                                WVogue's Ultimate Guide To Autumn/ Winter 2019 Shoes
                            </a>
                        </h5>
                        <div className={cx('lastnew-describe', 'text-start', 'pb-4')}>
                            Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..
                        </div>
                        <a href="#s" className={cx('lastnew-link', 'text-start')}>
                            Read More
                        </a>
                    </div>
                    <div className={cx('lastnew-blog')}>
                        <div className={cx('lastnew-photo')}>
                            <img src={img.lastNew_3} className={cx('lastnew-img')} />
                        </div>
                        <div className={cx('lastnew-fashion')}>Fashion Tips</div>
                        <h5 className={cx('lastnew-name')}>
                            <a href="#s" className={cx('lastnew-name-link')}>
                                What Curling Irons Are The Best Ones
                            </a>
                        </h5>
                        <div className={cx('lastnew-describe', 'text-start', 'pb-4')}>
                            Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..
                        </div>
                        <a href="#s" className={cx('lastnew-link', 'text-start')}>
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lastnew;
