import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
// css;
import '@stackflow/plugin-basic-ui/index.css';
import { CssBaseline, GlobalStyles } from '@mui/material';
// stackflow
import { Stack } from 'stackflow';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CssBaseline />
        <GlobalStyles
            styles={{
                '.ptr-element': {
                    textAlign: 'center',
                },
            }}
        />
        <App />
        <Stack />
    </React.StrictMode>,
);
