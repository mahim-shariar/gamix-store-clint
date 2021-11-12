import { Alert, AlertTitle } from '@mui/material';
import React from 'react';

const Pay = () => {
    return (
        <div>
            <Alert severity="info">
                <AlertTitle>Info</AlertTitle>
                Payment method — <strong>Coming Soon!</strong>
            </Alert>
        </div>
    );
};

export default Pay;