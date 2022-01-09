import { useHistory, useLocation } from 'react-router';
import s from './Button.module.css'

export default function ButtonGoBack() {
  const history = useHistory();
  const location = useLocation();

  const handleBack = () => {
    if (location.state?.from) {
      history.push(location.state.from);
    }
  };

  return (
    <button className={s.button} type="button" onClick={handleBack}>
    </button>
  );
}