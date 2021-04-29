import CarItem from './CarItem';
import classes from './CarList.module.css';

function CarList(props) {
  return (
    <div className={classes.list}>
      {props.meetups.map((car) => (
        <CarItem
          key={car.id}
          id={car.id}
          image={car.image}
          title={car.title}
          description={car.description}
        />
      ))}
    </div>
  );
}

export default CarList;
