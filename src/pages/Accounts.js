import React, { useState } from 'react';
import { Container, Grid, Box } from '@mui/material';
import AddAccountButton from '../components/AddAccountButton';
import AccountCard from '../components/AccountCard';
import AddAccountDialog from '../components/AddAccountDialog';
import DeleteAccountDialog from '../components/DeleteAccountDialog';
import AccountMenu from '../components/AccountMenu';
import SnackbarNotification from '../components/SnackbarNotification';
import { useStore } from '@nanostores/react';
import { accountsStore, addAccount, deleteAccount } from '../contexts/GlobalState';
import '../styles/Buttons.css';

const Accounts = () => {

    const handleMenuOpen = (event, accountId) => {
    };

    const handleMenuClose = () => {
    };

    const handleDialogOpen = () => {
    };

    const handleDialogClose = () => {
    };

    const handleAddAccount = () => {
    };

    const handleDeleteAccount = () => {
    };

    const handleDeleteDialogOpen = () => {
    };

    const handleDeleteDialogClose = () => {
    };

    const handleSnackbarClose = (event, reason) => {
    };

    const validateForm = () => {
    };

    return (
        <Container sx={{ mt: 10, mb: 4 }}>
            <AddAccountButton onDialogOpen={handleDialogOpen} />
            <Grid container spacing={2}>
                {accounts.map(account => (
                    <Grid item xs={12} sm={6} md={4} key={account.id}>
                        <AccountCard account={account} onMenuOpen={handleMenuOpen} />
                    </Grid>
                ))}
            </Grid>
            <AccountMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                onDeleteOpen={handleDeleteDialogOpen}
            />
            <AddAccountDialog
                open={open}
                setOpen={setOpen}
                onAddAccount={handleAddAccount}
            />
            <DeleteAccountDialog
                open={deleteDialogOpen}
                onClose={handleDeleteDialogClose}
                onDelete={handleDeleteAccount}
            />
            <SnackbarNotification
                open={snackbarOpen}
                onClose={handleSnackbarClose}
                severity={snackbarSeverity}
                message={snackbarMessage}
            />
        </Container>
    );
};

export default Accounts;
