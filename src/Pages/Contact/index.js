import classNames from 'classnames';

import styles from '../../scss/Contact.module.scss';

const cx = classNames.bind(styles);
function Contact() {
    return (
        <>
            <div className={cx('contact')}>
                <h2 className={cx('contact-title')}>CONTACT US</h2>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('contact-top')}>
                            <h3 className={cx('contact-top-title')}>Contact</h3>
                            <form>
                                <div className={cx('contact-group-from-controll')}>
                                    <div className={cx('d-flex', 'justify-content-center')}>
                                        <div className={cx('contact-form-1')}>
                                            <input
                                                type="text"
                                                placeholder="Surname"
                                                className={cx('contact-form-controll', 'mb-5', 'me-5')}
                                            />
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                className={cx('contact-form-controll')}
                                            />
                                        </div>
                                        <div className={cx('contact-form-2')}>
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className={cx('contact-form-controll', 'mb-5')}
                                            />
                                            <input
                                                type="text"
                                                placeholder="Phone"
                                                className={cx('contact-form-controll', 'mb-5')}
                                            />
                                        </div>
                                    </div>
                                    <div className={cx('d-flex', 'justify-content-center')}>
                                        <textarea
                                            cols="100"
                                            rows="10"
                                            placeholder='Message'
                                            className={cx('contact-textarea-controll')}
                                        ></textarea>
                                    </div>
                                    <div className={cx('contact-form-btn-controll', 'text-center', 'pt-5','w-100')}>
                                        <button className={cx('contact-form-btn')}>Gửi đi</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
