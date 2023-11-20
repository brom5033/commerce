import { type FC, useState } from 'react';
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { useFlow } from 'stackflow';
// component
import { colorPalette } from '@constants/index';
import { userModel } from '@stores/index';

interface Props {
    window?: () => Window;
}

const drawerWidth = 300;

export const DrawerAppBar: FC<Props> = ({ window }) => {
    const [open, setOpen] = useState(false);

    const userModelStore = userModel();

    const handleDrawerToggle = () => {
        setOpen((prevState) => !prevState);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    const handleLogoutClick = () => {
        userModelStore.emptyUser();
    };

    const { push } = useFlow();

    const gotoCatalogue = () => {
        push('Catalogue', {});
    };

    return (
        <>
            <Toolbar variant="dense">
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ color: 'black' }}
                >
                    <Menu />
                </IconButton>
            </Toolbar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={open}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                        <Divider />
                        <List>
                            <ListItem disablePadding component="div">
                                <ListItemButton sx={{ textAlign: 'center', color: 'black' }} onClick={gotoCatalogue}>
                                    <ListItemText>카탈로그</ListItemText>
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding component="div">
                                <ListItemButton
                                    sx={{ textAlign: 'center', color: 'white', backgroundColor: colorPalette.warning }}
                                    onClick={handleLogoutClick}
                                >
                                    <ListItemText>로그아웃</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            </nav>
        </>
    );
};
