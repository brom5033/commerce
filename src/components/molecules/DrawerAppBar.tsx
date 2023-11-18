import { type FC, useState } from 'react';
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import { Menu } from '@mui/icons-material';
// component
import { menuList } from '@constants/index';

interface Props {
    window?: () => Window;
}

const drawerWidth = 300;

export const DrawerAppBar: FC<Props> = ({ window }) => {
    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen((prevState) => !prevState);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

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
                            {menuList.map(({ menuName, src }) => (
                                <ListItem key={menuName} disablePadding component="a" href={src} target="_blank">
                                    <ListItemButton sx={{ textAlign: 'center', color: 'black' }}>
                                        <ListItemText primary={menuName} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </nav>
        </>
    );
};
