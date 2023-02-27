import instance from '../config/axios';
import { useState, useEffect } from 'react';
import BasicCard from '../components/BasicCard';
import Box, { BoxProps } from '@mui/material/Box';
const Dashboard = () => {
    const [recipes, setRecipes] = new useState([]);

    useEffect(() => {
        instance.get('/recipes').then((response) => {
            console.log(response);
            setRecipes(response.data);
        });
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
            }}
        >
            {recipes.map((recipe) => (
                <div
                    key={recipe._id}
                    style={{ paddingLeft: '20px', paddingRight: '20px' }}
                >
                    <BasicCard
                        name={recipe.name}
                        description={recipe.description}
                        id={recipe._id}
                    />
                </div>
            ))}
        </Box>
    );
};

export default Dashboard;
