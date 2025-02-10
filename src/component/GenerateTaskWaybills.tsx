import React, { useState } from 'react';
import { Button, CircularProgress, Typography, TextField } from '@mui/material';

const GenerateTaskByRouteCode: React.FC = () => {
    const [routeCode, setRouteCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleGenerateTask = async () => {
        const apiUrl = import.meta.env.VITE_JSON_SERVER_URL;  
        setLoading(true);
        setMessage('');
        try {
            const response = await fetch(`${apiUrl}/DeliveryTasks/GenerateTaskByRoute/${routeCode}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to generate task for RouteCode: ${routeCode}`);
            }

            const data = await response.text();
            setMessage(data);
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error occurred while generating task.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <TextField
                label="Route Code"
                value={routeCode}
                onChange={(e) => setRouteCode(e.target.value)}
                style={{ marginBottom: '16px', width: '300px' }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleGenerateTask}
                disabled={loading || !routeCode}
                style={{ marginLeft: '16px' }}
            >
                {loading ? <CircularProgress size={24} /> : 'Generate Task'}
            </Button>
            {message && (
                <Typography variant="body1" style={{ marginTop: '16px' }}>
                    {message}
                </Typography>
            )}
        </div>
    );
};

export default GenerateTaskByRouteCode;