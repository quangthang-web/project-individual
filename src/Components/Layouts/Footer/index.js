import classNames from 'classnames/bind';

import img from '../../../asset/images';
import Icons from '../../Icon';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wapper')}>
            <div className={cx('footer')}>
                <div className={cx('footer__top')}>
                    <div className={cx('footer__top__subscribe-caption-title')}>
                        <h3 className={cx('footer__title')}>Subscribe Newsletter</h3>
                        <p className={cx('footer__content')}>Subscribe newsletter to get 5% on all products.</p>
                    </div>
                    <div className={cx('footer__top__subscribe-caption')}>
                        <form action="#" className={cx('footer__form')}>
                            <input
                                type="text"
                                className={cx('footer__top__subscribe-email')}
                                placeholder="Enter your email"
                            />
                            <button className={cx('footer__top__btn')}>Subscribe</button>
                        </form>
                    </div>
                    <div className={cx('footer__top-social')}>
                        <Icons icon__chill__icon icon__size></Icons>
                    </div>
                </div>
                <div className={cx('footer__bottom')}>
                    <div className={cx('footer__bottom--logo')}>
                        <a href="#" className={cx('footer__link-logo')}>
                            <img src={img.logoFooter} className={cx('footer__logo')} alt="" />
                        </a>
                    </div>
                    <div className={cx('footer__menu')}>
                        <h4 className={cx('footer__title')}>Shop Men</h4>
                        <nav className={cx('footer__nav-menu')}>
                            <ul className={cx('footer__menu-item l-s')}>
                                <li className={cx('footer__menu-sub')}>
                                    <a href="#" className={cx('footer__menu--sub__item')}>
                                        Clothing Fashion
                                    </a>
                                </li>
                                <li className={cx('footer__menu-sub')}>
                                    <a href="#" className={cx('footer__menu--sub__item')}>
                                        Winter
                                    </a>
                                </li>
                                <li className={cx('footer__menu-sub')}>
                                    <a href="#" className={cx('footer__menu--sub__item')}>
                                        Summer
                                    </a>
                                </li>
                                <li className={cx('footer__menu-sub')}>
                                    <a href="#" className={cx('footer__menu--sub__item')}>
                                        Formal
                                    </a>
                                </li>
                                <li className={cx('footer__menu-sub')}>
                                    <a href="#" className={cx('footer__menu--sub__item')}>
                                        Casual
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={cx('footer__menu')}>
                        <h4 className={cx('footer__title')}>Shop Men</h4>
                        <nav className={cx('footer__nav-menu')}>
                            <ul className={cx('footer__menu-item l-s')}>
                                <li className={cx('footer__menu-sub')}>
                                    <a href="#" className={cx('footer__menu--sub__item')}>
                                        Clothing Fashion
                                    </a>
                                </li>
                                <li className={cx('footer__menu-sub')}>
                                    <a href="#" className={cx('footer__menu--sub__item')}>
                                        Winter
                                    </a>
                                </li>
                                <li className={cx('footer__menu-sub')}>
                                    <a href="#" className={cx('footer__menu--sub__item')}>
                                        Summer
                                    </a>
                                </li>
                                <li className={cx('footer__menu-sub')}>
                                    <a href="#" className={cx('footer__menu--sub__item')}>
                                        Formal
                                    </a>
                                </li>
                                <li className={cx('footer__menu-sub')}>
                                    <a href="#" className={cx('footer__menu--sub__item')}>
                                        Casual
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={cx('footer__menu')}>
                        <h4 className={cx('footer__title')}>Shop Men</h4>
                        <nav className={cx('footer__nav-menu')}>
                            <ul className={cx('footer__menu-item l-s')}>
                                <li className={cx('footer__menu-sub')}>
                                    <a href="#" className={cx('footer__menu--sub__item')}>
                                        Clothing Fashion
                                    </a>
                                </li>
                                <li className={cx('footer__menu-sub')}>
                                    <a href="#" className={cx('footer__menu--sub__item')}>
                                        Winter
                                    </a>
                                </li>
                                <li className={cx('footer__menu-sub')}>
                                    <a href="#" className={cx('footer__menu--sub__item')}>
                                        Summer
                                    </a>
                                </li>
                                <li className={cx('footer__menu-sub')}>
                                    <a href="#" className={cx('footer__menu--sub__item')}>
                                        Formal
                                    </a>
                                </li>
                                <li className={cx('footer__menu-sub')}>
                                    <a href="#" className={cx('footer__menu--sub__item')}>
                                        Casual
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={cx('footer__menu')}>
                        <h4 className={cx('footer__title')}>Shop Men</h4>
                        <nav className={cx('footer__nav-menu')}>
                            <ul className={cx('footer__menu-item l-s')}>
                                <li className={cx('footer__menu-sub')}>
                                    <a href="#" className={cx('footer__menu--sub__item')}>
                                        Clothing Fashion
                                    </a>
                                </li>
                                <li className={cx('footer__menu-sub')}>
                                    <a href="#" className={cx('footer__menu--sub__item')}>
                                        Winter
                                    </a>
                                </li>
                                <li className={cx('footer__menu-sub')}>
                                    <a href="#" className={cx('footer__menu--sub__item')}>
                                        Summer
                                    </a>
                                </li>
                                <li className={cx('footer__menu-sub')}>
                                    <a href="#" className={cx('footer__menu--sub__item')}>
                                        Formal
                                    </a>
                                </li>
                                <li className={cx('footer__menu-sub')}>
                                    <a href="#" className={cx('footer__menu--sub__item')}>
                                        Casual
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
