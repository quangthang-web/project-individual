import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from '../../../scss/Tab.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const cx = classNames.bind(styles);

function NavTab() {
    const [activeTab, setActiveTab] = useState('tab1');

     const men = () => {
          setActiveTab('tab1');
      };
      const women = () => {
          setActiveTab('tab2');
      };
      const baby = () => {
          setActiveTab('tab3');
      };
      const fashion = () => {
          setActiveTab('tab4');
      };
    
    return (
        <>
            <nav className={cx('navbar', 'navbar-expand-lg', 'p-0')}>
                <div className={cx('collapse', 'navbar-collapse')} id="navbarSupportedContent">
                    <ul className={cx('navbar-nav', 'me-auto', 'mb-2', 'mb-lg-0')}>
                        <li className={cx(activeTab === 'tab1' ? 'active' : '', 'latest-link')} onClick={men}>
                            Men
                        </li>
                        <li className={cx(activeTab === 'tab2' ? 'active' : '', 'latest-link')} onClick={women}>
                            Women
                        </li>
                        <li className={cx(activeTab === 'tab3' ? 'active' : '', 'latest-link')} onClick={baby}>
                            Baby
                        </li>
                        <li className={cx(activeTab === 'tab4' ? 'active' : '', 'latest-link')} onClick={fashion}>
                            Fashion
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavTab;
