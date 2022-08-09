import AppLayout from 'layouts/AppLayout/AppLayout';
import classes from './index.module.scss';

const Main = () => {
  return (
    <AppLayout>
      <section className={classes['main']}>
        app
      </section>
    </AppLayout>
  )
}

export default Main;