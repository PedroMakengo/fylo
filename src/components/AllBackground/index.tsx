import { Form } from '../Form';

import style from './style.module.scss';

export function AllBackground() {
  return(
    <div className={style.allBackground}>
      <div className={style.contentAllBackground}>
        <article>
          <h1>All your files in one secure
            location, accessible anywhere.
          </h1>
          <p>Fylo stores your most important files in one secure location. 
            Access them wherever you need, share and collaborate with friends,
             family, and co-workers.
          </p>
          <Form placeholder="Enter you email..." />
        </article>
        <img src="/images/illustration-1.svg" alt="Ilustration-1" />
      </div>
    </div>
  )
}