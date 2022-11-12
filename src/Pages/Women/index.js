import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { women } from '../../ApiFake';

import styles from '../../scss/Men.module.scss';
const cx = classNames.bind(styles);

function Women() {
    return (
        <>
            <div className={cx('wrapper')}>
                <h2 className={cx('contact-title')}>Women</h2>
                <div className={cx("container",'pt-0')}>
                <div className={cx('shop')}>
                    <div className={cx('shop__side__bar')}>
                        <div className={cx('side__bar__search')}>
                            <h3 className={cx('side__bar__search__title')}>Search Here...</h3>
                            <div className={cx('side__bar__search__form')}>
                                <input
                                    type="text"
                                    className={cx('side__bar__search__form__input')}
                                    placeholder="Product name..."
                                />
                                <button className={cx('side__bar__search__form__btn')}>
                                    <FontAwesomeIcon className={cx()} icon={faSearch}></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>

                        <div className={cx('side__bar__occasion')}>
                            <h3 className={cx('side__bar__occasion__title')}>Lọc</h3>
                            <form>
                                <ul className={cx('side__bar__occasion__list')}>
                                    <li className={cx('side__bar__occasion__item')}>
                                        <input
                                            type="checkbox"
                                            id="casuals"
                                            className={cx('side__bar__occasion__item__controll')}
                                        />
                                        <label htmlFor="casuals" className={cx('side__bar__occasion__item__label')}>
                                            Áo thun
                                        </label>
                                    </li>
                                    <li className={cx('side__bar__occasion__item')}>
                                        <input
                                            type="checkbox"
                                            id="party"
                                            className={cx('side__bar__occasion__item__controll')}
                                        />
                                        <label htmlFor="party" className={cx('side__bar__occasion__item__label')}>
                                            Quần áo thể thao
                                        </label>
                                    </li>
                                    <li className={cx('side__bar__occasion__item')}>
                                        <input
                                            type="checkbox"
                                            id="wedding"
                                            className={cx('side__bar__occasion__item__controll')}
                                        />
                                        <label htmlFor="wedding" className={cx('side__bar__occasion__item__label')}>
                                            Quần jin
                                        </label>
                                    </li>
                                    <li className={cx('side__bar__occasion__item')}>
                                        <input
                                            type="checkbox"
                                            id="ethnic"
                                            className={cx('side__bar__occasion__item__controll')}
                                        />
                                        <label htmlFor="ethnic" className={cx('side__bar__occasion__item__label')}>
                                            Váy
                                        </label>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>

                    <div className={cx('shop__product')}>
                        <div className={cx('shop__product__list')}>
                        {women.map((women,index)=>(
                            <div className={cx('shop__product__item')} key={index}>
                                <span className={cx('shop__product__item__new', `bg-color-color`)}>New</span>
                                <div className={cx('shop__product__item__thumb')}>
                                    <img src={women.img} alt="" />
                                    <span className={cx('shop__product__item__view')}>
                                        <Link to="/#">Xem lướt qua</Link>
                                    </span>
                                </div>
                                <h3 className={cx('shop__product__item__name', 'm-0', 'mt-3')}>{women.name}</h3>
                                <div className={cx('shop__product__item__info')}>
                                    <div className={cx('shop__product__item__total')}>
                                        <span>${women.cost}</span>
                                        <ul className={cx('shop__product__item__rate')}>
                                            <li>
                                                <FontAwesomeIcon className={cx()} icon={faStar}></FontAwesomeIcon>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={cx('shop__product__item--add__cart')}>
                                        <Link to="/#">
                                            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                                
                            ))}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Women;
