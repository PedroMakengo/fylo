import { Form } from "../Form";
import style from "./style.module.scss";

export function GetAccess() {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <article>
          <h1>Get early access today</h1>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </article>
        <Form />
      </div>
    </section>
  );
}
