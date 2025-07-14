import classes from './meal-item.module.css'

export default function MealsGrid({meals}) {

  return (
  <ul className={classes.meals}>
    {meals.map(meal=><li key={meals.id}>
      
      </li>)}
  </ul>
  );
}
