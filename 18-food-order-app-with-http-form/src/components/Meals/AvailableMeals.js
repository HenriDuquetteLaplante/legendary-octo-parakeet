import React  from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import {useEffect, useState} from "react";
import useHttpRequest from "../../hooks/use-HttpRequest";

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const { isLoading, error, sendRequest: fetchMeals} = useHttpRequest();

    useEffect(()=>{
        const transformMeals = (mealObj) =>  {
            const loadedMeals = [];

            for (const mealKey in mealObj) {
                loadedMeals.push({
                    description: mealObj[mealKey].description,
                    id: mealKey,
                    name: mealObj[mealKey].name,
                    price: mealObj[mealKey].price,
                })
            }
            setMeals(loadedMeals);
        }
        fetchMeals({ url: 'https://reactlearning-519e7-default-rtdb.firebaseio.com/meals.json'}, transformMeals)

    }, [fetchMeals]);

    if (isLoading) {
        return <section className={classes.MealsLoading}>
            <p>Loading...</p>
        </section>
    }

    if (error) {
        return (
            <section className={classes.MealsError}>
                <p>{error}</p>
            </section>
        )
    }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
