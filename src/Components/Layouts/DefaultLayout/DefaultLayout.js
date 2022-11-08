import classNames from 'classnames/bind';

import Header from '../Header';
import Footer from '../Footer';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default DefaultLayout;
