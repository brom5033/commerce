import React from 'react';
import ReactDOM from 'react-dom/client';
// css
import '@stackflow/plugin-basic-ui/index.css';
import { CssBaseline, GlobalStyles } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
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
        <Stack />
    </React.StrictMode>,
);
