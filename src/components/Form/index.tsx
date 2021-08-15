import style from './style.module.scss';

export function Form(props) {
  return(
    <form onSubmit={props.onSubmit} className={style.form}>
      <input type="text" placeholder={props.placeholder} />
      <button>Get Started</button>
    </form>
  );
}