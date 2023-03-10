import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

/**
 * https://mui.com/material-ui/react-card/
 * @param { name, description } props
 * @returns
 */
export default function BasicCard({ name, description, id }) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    Recipe
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    description
                </Typography>
                <Typography variant="body2">{description}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={'/recipe/' + id}>
                    Go to Recipe
                </Button>
            </CardActions>
        </Card>
    );
}
