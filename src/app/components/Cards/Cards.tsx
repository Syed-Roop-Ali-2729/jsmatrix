import Link from "next/link";
import style from "./Cards.module.css";
import cardImg1 from "./imgs/cardImg1.jpg";
import cardImg2 from "./imgs/cardImg2.jpg";
import cardImg3 from "./imgs/cardImg3.jpg";
import cardImg4 from "./imgs/cardImg4.jpg";
import cardImg5 from "./imgs/cardImg5.jpg";
import cardImg6 from "./imgs/cardImg6.jpg";
import Image from "next/image";
export default function Cards() {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.imgBox}>
          <Image src={cardImg1} width={500} height={500} alt="cardImg1" />
        </div>
        <div className={style.textBox}>
          <h2 className={style.cardHeading}>Code You Need</h2>
          <p className={style.cardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sint
            officia, placeat facere libero ut deserunt, cupiditate qui alias
            culpa nihil consequuntur voluptatum nulla dolores aut non! Ipsa,
            illo perspiciatis.
          </p>
          <Link href="#" className={style.btn}>
            read more
          </Link>
        </div>
      </div>

      <div className={style.card}>
        <div className={style.imgBox}>
          <Image src={cardImg2} width={500} height={500} alt="cardImg2" />
        </div>
        <div className={style.textBox}>
          <h2 className={style.cardHeading}>Code You Need</h2>
          <p className={style.cardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sint
            officia, placeat facere libero ut deserunt, cupiditate qui alias
            culpa nihil consequuntur voluptatum nulla dolores aut non! Ipsa,
            illo perspiciatis.
          </p>
          <Link href="#" className={style.btn}>
            read more
          </Link>
        </div>
      </div>

      <div className={style.card}>
        <div className={style.imgBox}>
          <Image src={cardImg3} width={500} height={500} alt="cardImg3" />
        </div>
        <div className={style.textBox}>
          <h2 className={style.cardHeading}>Code You Need</h2>
          <p className={style.cardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sint
            officia, placeat facere libero ut deserunt, cupiditate qui alias
            culpa nihil consequuntur voluptatum nulla dolores aut non! Ipsa,
            illo perspiciatis.
          </p>
          <Link href="#" className={style.btn}>
            read more
          </Link>
        </div>
      </div>

      <div className={style.card}>
        <div className={style.imgBox}>
          <Image src={cardImg4} width={500} height={500} alt="cardImg4" />
        </div>
        <div className={style.textBox}>
          <h2 className={style.cardHeading}>Code You Need</h2>
          <p className={style.cardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sint
            officia, placeat facere libero ut deserunt, cupiditate qui alias
            culpa nihil consequuntur voluptatum nulla dolores aut non! Ipsa,
            illo perspiciatis.
          </p>
          <Link href="#" className={style.btn}>
            read more
          </Link>
        </div>
      </div>

      <div className={style.card}>
        <div className={style.imgBox}>
          <Image src={cardImg5} width={500} height={500} alt="cardImg1" />
        </div>
        <div className={style.textBox}>
          <h2 className={style.cardHeading}>Code You Need</h2>
          <p className={style.cardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sint
            officia, placeat facere libero ut deserunt, cupiditate qui alias
            culpa nihil consequuntur voluptatum nulla dolores aut non! Ipsa,
            illo perspiciatis.
          </p>
          <Link href="#" className={style.btn}>
            read more
          </Link>
        </div>
      </div>

      <div className={style.card}>
        <div className={style.imgBox}>
          <Image src={cardImg6} width={500} height={500} alt="cardImg1" />
        </div>
        <div className={style.textBox}>
          <h2 className={style.cardHeading}>Code You Need</h2>
          <p className={style.cardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sint
            officia, placeat facere libero ut deserunt, cupiditate qui alias
            culpa nihil consequuntur voluptatum nulla dolores aut non! Ipsa,
            illo perspiciatis.
          </p>
          <Link href="#" className={style.btn}>
            read more
          </Link>
        </div>
      </div>
    </div>
  );
}
