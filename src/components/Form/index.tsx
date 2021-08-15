import style from './style.module.scss';

export function Form(props) {
  return(
    <form onSubmit={props.onSubmit} className={style.form}>
      <input 
        type="text" 
        onChange={props.onChange}
        value={props.value} 
        placeholder={props.placeholder} 
      />
      <button>Get Started</button>
    </form>
  );
}