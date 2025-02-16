import React from 'react';
import { Typography, CircularProgress, IconButton, ListItem as MuiListItem, ListItemText } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const Header = ({ title }) => (
    <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <BusinessCenterIcon sx={{ mr: 1, color: '#007eae' }} />
        {title}
    </Typography>
);

// Use data-testid="loading-spinner"
export const Loading = 0;

// Use data-testid="error-message"
export const ErrorMessage = 0;

// Use data-testid="broker-item
export const ListItem = 0;
