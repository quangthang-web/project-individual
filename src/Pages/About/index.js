import classNames from 'classnames/bind';
import styles from '../../scss/About.module.scss';

import img from '../../asset/images'
const cx = classNames.bind(styles);
function About() {
    return (
        <>
            <div className="wapper">
                <h2 className={cx('contact-title')}>About</h2>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('about','pt-5')}>
                            <h3 className={cx('about-title')}>Có thể bạn chưa biết ?</h3>
                            <div className={cx('about-content','d-flex')}>
                            <p className={cx('about-text')}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos consectetur
                                accusantium earum asperiores provident, ea quo nihil quibusdam sequi soluta magni
                                incidunt ducimus voluptas vitae harum dolore dolorem necessitatibus! Veritatis minima
                                quo natus obcaecati maiores dolorem illo nam dolor pariatur magni enim fuga impedit
                                inventore, voluptates magnam, porro eos, fugit delectus. Fugiat hic nesciunt minima,
                                veniam quas provident laudantium. Voluptate eveniet nam possimus corporis temporibus hic
                                aut autem officia, qui quasi exercitationem earum dolores laudantium eligendi aliquam
                                libero cupiditate expedita, perspiciatis deserunt perferendis optio sequi voluptatem
                                aperiam! Tempora, doloremque! Omnis corporis numquam adipisci, eveniet facere velit
                                provident quam sit quod ad ab iste laborum delectus nostrum fugit necessitatibus minima,
                                ut voluptas vero voluptates? Praesentium, accusantium! Accusamus est beatae
                                consequuntur! Illum, expedita voluptates corrupti asperiores modi ab tempora impedit?
                                Cumque nam deserunt, corporis suscipit delectus architecto quasi quisquam accusantium
                                repellat cupiditate dicta corrupti beatae necessitatibus natus quos, placeat, quae
                                reiciendis. Deleniti molestias minus, suscipit nihil ratione tempora numquam! Quibusdam
                                aspernatur ad praesentium consequatur magnam tempora deserunt inventore aperiam.
                                Quibusdam cum ea error odio, veniam delectus odit aut repudiandae saepe et! Nostrum,
                                reiciendis molestias rerum itaque quas optio, ducimus animi fuga harum placeat ratione
                                cupiditate necessitatibus enim et repudiandae voluptas iusto. Molestiae saepe quod ex
                                deserunt recusandae possimus ea iure nulla. Itaque omnis facilis ab inventore culpa
                                rerum unde? Dignissimos consequatur cumque beatae veritatis facere nulla, cum minima
                                temporibus laborum consequuntur ducimus possimus corporis repellat quis repudiandae iste
                                natus! Minus, consectetur! Esse, dolores officia unde alias veritatis itaque illo dicta
                                soluta omnis corrupti doloremque fugiat odit velit nobis mollitia? Aut sint illum a
                                temporibus quam eveniet minima, ea quo ullam hic. Sint facilis id veritatis animi nisi
                                voluptate labore nostrum, deserunt, nesciunt culpa unde similique corrupti eum
                                reiciendis tenetur vel? Reiciendis illum asperiores nostrum perferendis temporibus alias
                                cupiditate error animi itaque.F
                            </p>
                            <img src={img.other_1} alt="" className={cx('about-img')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
