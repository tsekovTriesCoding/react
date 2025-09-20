import useHttp from "../hooks/useHttp.js";
import MealItem from "./MealItem.jsx";

const requestConfig = {};

export default function Meals() {
    const {
        data: loadedMeals,
        isLoading,
        error
    } = useHttp('http://localhost:3000/meals', requestConfig, []);

    console.log(loadedMeals);

    return <ul id="meals">
        {loadedMeals.map(meal => (
            <MealItem key={meal.id} meal={meal} />
        ))}
    </ul>
}