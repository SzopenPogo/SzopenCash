import { CLIENT_APPLICATION_ROUTE } from 'data/routes/client/application';
import AppLayout from 'layouts/AppLayout/AppLayout';
import { useNavigate } from 'react-router';
import { addUrlOption } from 'utils/url/addUrlOption';
import classes from './index.module.scss';

const Main = () => {
  const navigate = useNavigate();

  const test = () => {
    console.log('TEST');

    const newOptions = addUrlOption('two=5');
    console.log(newOptions);
    navigate(`${CLIENT_APPLICATION_ROUTE}${newOptions}`);
    const newOptions2 = addUrlOption('three=5');
    console.log(newOptions2);
    navigate(`${CLIENT_APPLICATION_ROUTE}${newOptions2}`);
    const newOptions3 = addUrlOption('three=');
    console.log(newOptions3);
    navigate(`${CLIENT_APPLICATION_ROUTE}${newOptions3}`);
  }

  return (
    <AppLayout>
      <section className={classes['main']}>
        <button onClick={test}>click</button>
      </section>
    </AppLayout>
  )
}

export default Main;