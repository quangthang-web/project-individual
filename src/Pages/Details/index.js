import classNames from "classnames";

import styles from "../../scss/Details.module.scss"

const cx = classNames.bind(styles);
function Details() {
    return (
        <div className={cx("container")}>
            <div className={cx("wrapper")}>
                <div className={cx("detail")}>
                    <div className={cx("detail__content")}>
                        <div className={cx("detail__content__img")}>
                            <img
                                src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest7.jpg"
                                alt=""
                            />
                        </div>

                        <div className={cx("detail__content__info")}>
                            <h1 className={cx("detail__content__info__title")}>The Rage of Dragons</h1>
                            <p className={cx("detail__content__info__author")}>By Evan Winter</p>
                            <nav className={cx("detail__content__info__price")}>$50.00</nav>
                            <div className={cx("detail__content__info__rate")}>
                                <div className={cx("detail__content__info__rate-icon")}>
                                    <i className={cx("fas fa-star")}></i>
                                    <i className={cx("fas fa-star")}></i>
                                    <i className={cx("fas fa-star")}></i>
                                    <i className={cx("fas fa-star")}></i>
                                    <i className={cx("fas fa-star-half-alt")}></i>
                                </div>

                                <nav className={cx("detail__content__info__rate-count")}>(120 review)</nav>
                            </div>
                            <div className={cx("detail__content__info__act")}>
                                <button data-foo="Add To Cart">Add To Cart</button>
                               
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx("tabs")}>
                    <ul className={cx("tabs__list")}>
                        <li className={cx("tabs__item active")}>Description</li>
                        <li className={cx("tabs__item")}>Author</li>
                        <li className={cx("tabs__item")}>Comments</li>
                        <li className={cx("tabs__item")}>ReView</li>
                    </ul>

                    <div className={cx("tabs__content")}>
                        <p>
                            Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature
                            women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl
                            Cook eventually left Kendrick School in Reading at the age of 15, where she went to
                            secretarial school and then into an insurance office. After moving to London and then
                            Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an
                            officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year
                            before John took a job in Southern Rhodesia with a motor company. Beryl bought their young
                            son a box of watercolours, and when showing him how to use it, she decided that she herself
                            quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday
                            and it was with this that she produced her first significant work, a half-length portrait of
                            a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named
                            ‘Hangover’ by Beryl’s husband and
                        </p>

                        <p>
                            It is often frustrating to attempt to plan meals that are designed for one. Despite this
                            fact, we are seeing more and more recipe books and Internet websites that are dedicated to
                            the act of cooking for one. Divorce and the death of spouses or grown children leaving for
                            college are all reasons that someone accustomed to cooking for more than one would suddenly
                            need to learn how to adjust all the cooking practices utilized before into a streamlined
                            plan of cooking that is more efficient for one person creating less.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
