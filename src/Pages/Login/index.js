import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import {  faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

import styles from '../../scss/Login.module.scss';
const cx = classNames.bind(styles);
function Login() {
    return (
        <div className={cx('wapper-login')}>
            <div className={cx('login')}>
                <Link to="/">
                    <FontAwesomeIcon className={cx('login-icon')} icon={faArrowLeftLong}></FontAwesomeIcon>
                </Link>
                <h1 className={cx('login-title')}>Login</h1>
                <div className={cx('login-note')}>Enter Login details to get access</div>
                <form className={cx('login-form')} autoComplete="off">
                    <div className={cx('login-box')}>
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
                            <label htmlFor="password" placeholder="Password" className={cx('login-label')}>
                                Password
                            </label>
                            <input type="text" id="password" className={cx('login-form-controll')} />
                        </div>
                        <div className={cx('login-group')}>
                            <div className={cx('login-checkbox-forgot')}>
                                <div className={cx('login-checkbox', 'd-flex', 'align-items-center')}>
                                    <input type="checkbox" id="logged" className={cx('login-form-check')} />
                                    <label htmlFor="logged" className={cx('login-label', 'm-0', 'ps-2')}>
                                        Keep Me Logged In
                                    </label>
                                </div>
                                <Link to="/#" className={cx('login-forgot-password')}>
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={cx('login-group')}>
                        <div className={'login-sign-btn'}>
                            <div className={cx('login-sing-up')}>
                                Don’t have an account?{' '}
                                <Link to="/signup" className={cx('login-link')}>
                                    {' '}
                                    Sign Up
                                </Link>{' '}
                                here.
                            </div>
                            <button className={cx('login-btn')}>Loign</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
