import { useState } from 'react';

import style from './style.module.scss';

export function AllBackground() {
  const [email, setEmail] = useState('');
  
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
        </article>
        <img src="/images/illustration-1.svg" alt="Ilustration-1" />
      </div>
    </div>
  )
}