import React, { useState } from 'react';
import { Container, Grid, Box } from '@mui/material';
import { Header, AddCardButton } from './Helpers';

const Cards = () => {

    const [open, setOpen] = useState(false);

    const handleDeleteCard = 0;

    return (
        <Container sx={{ mt: 10, mb: 4 }}>
            <Header
                title="Cards"
                subtitle="Manage your cards, including adding and deleting cards."
                onAddCard={handleOpen}
            />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {/* Use data-testid="card-list" */}

                </Grid>
            </Grid>
            
            
        </Container>
    );
};

export default Cards;