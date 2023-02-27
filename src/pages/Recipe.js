import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams
} from 'react-router-dom';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import instance from '../config/axios';
import BasicDirections from '../components/BasicDirections';
import BasicIngredients from '../components/BasicIngredients';

const Recipe = () => {
    const { id } = useParams();

    const [recipe, setRecipe] = new useState([]);

    useEffect(() => {
        instance.get('/recipes/' + id).then((response) => {
            console.log(response);
            setRecipe(response.data.response);
        });
    }, []);

    return (
        recipe && (
            <div>
                <Button href={'/'}>Go Back</Button>
                <h2>- Recipe</h2>
                <h3>{recipe.name}</h3>
                <br />
                <h2>- Description</h2>
                <p>{recipe.description}</p>
                <br />
                <h2>- Directions</h2>
                <BasicDirections directions={recipe.directions} />
                <br />
                <BasicIngredients ingredients={recipe.ingredients} />
                <br />
                <h2>- Notes</h2>
                {recipe.notes}
            </div>
        )
    );
};

export default Recipe;
