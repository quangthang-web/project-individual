import classNames from 'classnames';

import styles from '../../scss/Cart.module.scss';
const cx = classNames.bind(styles);
function Cart() {
    return (
        <div className={cx('cart')}>
            <h2 className={cx('contact-title')}>Cart</h2>
            <div className={cx('container')}>
                <table className={cx('cart-table')}>
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={cx('cart-product')}>
                            <td>
                                <div className={cx('cart-media')}>
                                    <div className={cx('d-flex')}>
                                        <img src="assets/img/gallery/best_selling1.jpg" alt="" />
                                    </div>
                                    <div className={cx('cart-media-body')}>
                                        <p>Minimalistic shop for multipurpose use</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h5>$360.00</h5>
                            </td>
                            <td>
                                <div className={cx('cart-product_count')}>
                                    <span className={cx('cart-input-number-decrement')}>
                                        {' '}
                                        <i className={cx('cart-ti-minus')}></i>
                                    </span>
                                    <input
                                        className={cx('cart-input-number2')}
                                        type="text"
                                        defaultValue="1"
                                        min="0"
                                        max="10"
                                    />
                                    <span className={cx('cart-input-number-increment')}>
                                        {' '}
                                        <i className={cx('cart-ti-plus')}></i>
                                    </span>
                                </div>
                            </td>
                            <td>
                                <h5>$720.00</h5>
                            </td>
                            <td>
                                <button className={cx('cart-delete')}>Delete</button>
                            </td>
                        </tr>
                        <tr className={cx('cart-product')}>
                            <td>
                                <div className={cx('cart-media')}>
                                    <div className={cx('d-flex')}>
                                        <img src="assets/img/gallery/best_selling1.jpg" alt="" />
                                    </div>
                                    <div className={cx('cart-media-body')}>
                                        <p>Minimalistic shop for multipurpose use</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h5>$360.00</h5>
                            </td>
                            <td>
                                <div className={cx('cart-product_count')}>
                                    <span className={cx('cart-input-number-decrement')}>
                                        {' '}
                                        <i className={cx('cart-ti-minus')}></i>
                                    </span>
                                    <input
                                        className={cx('cart-input-number2')}
                                        type="text"
                                        defaultValue="1"
                                        min="0"
                                        max="10"
                                    />
                                    <span className={cx('cart-input-number-increment')}>
                                        {' '}
                                        <i className={cx('cart-ti-plus')}></i>
                                    </span>
                                </div>
                            </td>
                            <td>
                                <h5>$720.00</h5>
                            </td>
                            <td>
                                <button className={cx('cart-delete')}>Delete</button>
                            </td>
                        </tr>
                        <tr className={cx('cart-product')}>
                            <td>
                                <div className={cx('cart-media')}>
                                    <div className={cx('d-flex')}>
                                        <img src="assets/img/gallery/best_selling1.jpg" alt="" />
                                    </div>
                                    <div className={cx('cart-media-body')}>
                                        <p>Minimalistic shop for multipurpose use</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h5>$360.00</h5>
                            </td>
                            <td>
                                <div className={cx('cart-product_count')}>
                                    <span className={cx('cart-input-number-decrement')}>
                                        {' '}
                                        <i className={cx('cart-ti-minus')}></i>
                                    </span>
                                    <input
                                        className={cx('cart-input-number2')}
                                        type="text"
                                        defaultValue="1"
                                        min="0"
                                        max="10"
                                    />
                                    <span className={cx('cart-input-number-increment')}>
                                        {' '}
                                        <i className={cx('cart-ti-plus')}></i>
                                    </span>
                                </div>
                            </td>
                            <td>
                                <h5>$720.00</h5>
                            </td>
                            <td>
                                <button className={cx('cart-delete')}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className={cx('cart-pay')}>
                    <div className={cx('cart-total')}>
                        Total: <span>$2160</span>
                    </div>
                    <button className={cx('cart-btn')}>Pay</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
