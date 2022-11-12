import React, { useState } from 'react';
import classNames from 'classnames/bind';

import Men from './Men';
import Fashion from './Fashion';
import Women from './Women';
import styles from '../../scss/Tab.module.scss';
const cx = classNames.bind(styles);
function Tab() {
    const [activeTab, setActiveTab] = useState('tab1');
    const men = () => {
        setActiveTab('tab1');
    };
    const women = () => {
        setActiveTab('tab2');
    };
    const fashion = () => {
        setActiveTab('tab3');
    };
    return (
        <>
            <div className={cx('latest-header', 'd-flex', 'justify-content-between')}>
                <div className={cx('latest-left')}>
                    <div className={cx('latest-left-title')}>
                        <h2 className={cx('latest-left-title-left')}>Trending This Week</h2>
                    </div>
                </div>
                <div className={cx('latest-right')}>
                    <nav className={cx('navbar', 'navbar-expand-lg', 'p-0')}>
                        <div className={cx('collapse', 'navbar-collapse')} id="navbarSupportedContent">
                            <ul className={cx('navbar-nav', 'me-auto', 'mb-2', 'mb-lg-0')}>
                                <li className={cx(activeTab === 'tab1' ? 'active' : '', 'latest-link')} onClick={men}>
                                    Men
                                </li>
                                <li className={cx(activeTab === 'tab2' ? 'active' : '', 'latest-link')} onClick={women}>
                                    Women
                                </li>
                                <li
                                    className={cx(activeTab === 'tab3' ? 'active' : '', 'latest-link')}
                                    onClick={fashion}
                                >
                                    Fashion
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div className={cx('latest-bottom')}>
                {activeTab === 'tab1' ? <Men /> : activeTab === 'tab2' ? <Women /> : activeTab === 'tab3' ? <Fashion /> : '' }
            </div>
        </>
    );
}

export default Tab;
