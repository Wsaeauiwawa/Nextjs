import { useRouter } from 'next/router';
import Card from '../ui/Card';
import classes from './CarItem.module.css';

function CarItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  return (
    <div className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <description>{props.description}</description>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Details</button>
        </div>
      </Card>
    </div>
  );
}

export default CarItem;
