import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faInstagram, faSquareFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

import styles from './icon.modules.scss';

const cx = classNames.bind(styles);

function Icon({ icon__chill__icon = false,icon__size=false }) {
    const classs = cx('icons', {
        icon__chill__icon,
        icon__size
    });

    return (
        <div className={cx('icon')}>
            <div className={cx('icon-social')}>
                <ul className={cx('icon__menu__icon','l-s')}>
                    <li className={cx('icon__item__icon')}>
                        <a href="#" className={cx('icon__link__icon','icon__size')}>
                            <FontAwesomeIcon className={classs} icon={faSquareFacebook} />
                        </a>
                    </li>
                    <li className={cx('icon__item__icon')}>
                        <a href="#" className={cx('icon__link__icon','icon__size')}>
                            <FontAwesomeIcon className={classs} icon={faInstagram} />
                        </a>
                    </li>
                    <li className={cx('icon__item__icon')}>
                        <a href="#" className={cx('icon__link__icon','icon__size')}>
                            <FontAwesomeIcon className={classs} icon={faYoutube} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Icon;
