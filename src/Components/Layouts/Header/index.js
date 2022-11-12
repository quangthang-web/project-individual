import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import Icons from '../../Icon';

import styles from '../../../scss/Header.module.scss';
import img from '../../../asset/images';
import { faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wapper')}>
            <div className={cx('header')}>
                <div className={cx('header__top')}>
                    <nav className={cx('header__top__menu__left')}>
                        <ul className={cx('header__top__menu__item', 'l-s')}>
                            <li className={cx('header__top__item__chill')}>
                                <a href="#top" className={cx('header__top__menu__link', 'size__link', 'text-dark')}>
                                    About Us
                                </a>
                            </li>
                            <li className={cx('header__top__item__chill')}>
                                <a href="#top" className={cx('header__top__menu__link', 'size__link', 'text-dark')}>
                                    Privacy
                                </a>
                            </li>
                            <li className={cx('header__top__item__chill')}>
                                <a href="#top" className={cx('header__top__menu__link', 'size__link', 'text-dark')}>
                                    FAQ
                                </a>
                            </li>
                            <li className={cx('header__top__item__chill')}>
                                <a href="#top" className={cx('header__top__menu__link', 'size__link', 'text-dark')}>
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className={cx('header__top__menu__right')}>
                        <nav className={cx('header__top__menu__right')}>
                            <ul className={cx('header__top__menu__right__item', 'l-s')}>
                                <li className={cx('header__top__chillder-item')}>
                                    <a href="#top" className={cx('header__top__link__item', 'size__link', 'text-dark')}>
                                        My Wishlist
                                    </a>
                                </li>
                                <li className={cx('header__top__chillder-item')}>
                                    <a href="#top" className={cx('header__top__link__item', 'size__link', 'text-dark')}>
                                        Track Your Order
                                    </a>
                                </li>
                            </ul>
                            <Icons icon__chill__icon></Icons>
                        </nav>
                    </div>
                </div>
                <div className={cx('border-bottom', 'border-dark')}></div>
                <div className={cx('header__bottom')}>
                    <div className={cx('header__bottom__logo')}>
                        <img src={img.logo} alt="" />
                    </div>
                    <nav className={cx('header__bottom__nav__bottom', 'm-0')}>
                        <ul className={cx('header__bottom__menu__bottom', 'm-0', 'l-s')}>
                            <li className={cx('header__bottom__item__menu')}>
                                <Link to="/" className={cx('header__bottom__link__menu-item', 'size__link__menu')}>
                                    Home
                                </Link>
                            </li>
                            <li className={cx('header__bottom__item__menu')}>
                                <Link to="/Men" className={cx('header__bottom__link__menu-item', 'size__link__menu')}>
                                    Men
                                </Link>
                            </li>
                            <li className={cx('header__bottom__item__menu')}>
                                <Link to="/Women" className={cx('header__bottom__link__menu-item', 'size__link__menu')}>
                                    Women
                                </Link>
                            </li>
                            <li className={cx('header__bottom__item__menu')}>
                                <Link to="/About" className={cx('header__bottom__link__menu-item', 'size__link__menu')}>
                                    About
                                </Link>
                            </li>
                            <li className={cx('header__bottom__item__menu')}>
                                <Link
                                    to="/Contact"
                                    className={cx('header__bottom__link__menu-item', 'size__link__menu')}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <nav className={cx('header__bottom__nav-header-right')}>
                        <ul className={cx('header__bottom__nav-menu-right', 'l-s', 'd-flex', 'm-0')}>
                            <li className={cx('header__bottom__menu-right')}>
                                <a href="#top" className={cx('header__bottom__link-right')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
                                </a>
                            </li>
                            <li className={cx('header__bottom__menu-right')}>
                                <Link to="/login" className={cx('header__bottom__link-right')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                                </Link>
                            </li>
                            <li className={cx('header__bottom__menu-right')}>
                                <Link to="/cart" className={cx('header__bottom__link-right')}>
                                    <span className={cx('total')}>1</span>
                                    <FontAwesomeIcon className={cx('icon')} icon={faCartShopping} />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={cx('border-bottom', 'border-dark')}></div>

                {/* <form className={cx('form_search')}>
                    <input type="text" className={cx('search_input')} placeholder="Search here" />
                </form> */}
            </div>
        </div>
    );
}

export default Header;
