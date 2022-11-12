import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

import styles from '../../scss/Login.module.scss';
const cx = classNames.bind(styles);
function Login() {
    return (
        <div className={cx('wapper-login')}>
            <div className={cx('login')}>
                <Link to="/">
                    <FontAwesomeIcon className={cx('login-icon')} icon={faArrowLeftLong}></FontAwesomeIcon>
                </Link>
                <h1 className={cx('login-title')}>Sign Up</h1>
                <div className={cx('login-note')}>Create your account to get full access</div>
                <form className={cx('login-form')} autoComplete="off">
                    <div className={cx('login-box')}>
                        <div className={cx('login-group')}>
                            <label htmlFor="fullname" className={cx('login-label')}>
                                Fullname
                            </label>
                            <input
                                type="text"
                                id="fullname"
                                placeholder="Fullname"
                                className={cx('login-form-controll')}
                            />
                        </div>
                        <div className={cx('login-group')}>
                            <label htmlFor="username" className={cx('login-label')}>
                                Username Or Email Address
                            </label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Username or Email"
                                className={cx('login-form-controll')}
                            />
                        </div>
                        <div className={cx('login-group')}>
                            <label htmlFor="password" className={cx('login-label')}>
                                Password
                            </label>
                            <input
                                type="text"
                                id="password"
                                placeholder="Password"
                                className={cx('login-form-controll')}
                            />
                        </div>
                        <div className={cx('login-group')}>
                            <label htmlFor="confirm-password" className={cx('login-label')}>
                                Confirm Password
                            </label>
                            <input
                                type="text"
                                id="confirm-password"
                                placeholder="Confirm Password"
                                className={cx('login-form-controll')}
                            />
                        </div>
                    </div>

                    <div className={cx('login-group')}>
                        <div className={'login-sign-btn'}>
                            <div className={cx('login-sing-up')}>
                                Already have an account?{' '}
                                <Link to="/login" className={cx('login-link')}>
                                    Login
                                </Link>{' '}
                                here.
                            </div>
                            <button className={cx('login-btn')}>Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
