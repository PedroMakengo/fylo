import { FaArrowAltCircleRight } from 'react-icons/fa'
import style from './style.module.scss';

export function Productive() {
  return (
    <section>
      <div className={style.background}></div>
      <div className={style.contentProductive}>
        <article>
          <h1>Stay productive, wherever you are</h1>
          <p>Never let location be an issue when accessing your files. Fylo 
            has you covered for all of your file storage needs.</p>

          <p>Securely share files and folders with friends, family and 
            colleagues for live collaboration. No email attachments required!
          </p>

          <a href="#">See how Fylo works <FaArrowAltCircleRight /></a>

          <div>
            <p>Fylo has improved our team productivity by an order of 
              magnitude. Since making the switch our team has become a
              well-oiled collaboration machine.
            </p>
            <div>
              <img src="./images/avatar-testimonial.jpg" alt="" />
            </div>
          </div>
        </article>
        <img src="/images/illustration-2.svg" alt="" />
      </div>
    </section>
  )
}