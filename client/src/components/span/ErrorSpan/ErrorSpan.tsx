import classes from './ErrorSpan.module.scss';

interface Props {
  value: string;
}

const ErrorSpan = ({value}: Props) => {
  return (
    <span
      className={classes['error-span']}
    >
      {value}
    </span>
  )
}

export default ErrorSpan;