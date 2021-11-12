import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import {
    Switch,
    Route,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrder from '../MyOrder/MyOrder';
import Pay from '../Pay/Pay';
import GameReview from '../gameReview/GameReview';
import AddGame from '../AddGame/AddGame';

const drawerWidth = 200;

const Drawers = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logOut } = useAuth();
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Box sx={{ marginY: 5 }} >
                {admin ? <Box>
                    <NavLink to={`${url}/makeAdmin`} style={{ textDecoration: 'none' }} >
                        <Button variant="text" sx={{ width: 1 }} > Make Admin </Button>
                    </NavLink>
                    <NavLink to={`${url}/addgames`} style={{ textDecoration: 'none' }} >
                        <Button variant="text" sx={{ width: 1 }} > Add Games </Button>
                    </NavLink>
                </Box> : <Box>
                    <NavLink to='/home' style={{ textDecoration: 'none' }} >
                        <Button variant='text' sx={{ width: 1 }} > Home </Button>
                    </NavLink>
                    <NavLink to='/allgames' style={{ textDecoration: 'none' }} >
                        <Button variant="text" sx={{ width: 1 }} > All Games </Button>
                    </NavLink>
                    <NavLink to={`${url}/pay`} style={{ textDecoration: 'none' }} >
                        <Button variant="text" sx={{ width: 1 }} > Pay </Button>
                    </NavLink>
                    <NavLink to={`${url}/review`} style={{ textDecoration: 'none' }} >
                        <Button variant="text" sx={{ width: 1 }} > Review </Button>
                    </NavLink>
                    <NavLink to={`${url}/myorder`} style={{ textDecoration: 'none' }} >
                        <Button variant="text" sx={{ width: 1 }} > My Order </Button>
                    </NavLink>
                </Box>}
                <Button onClick={logOut} variant="text" sx={{ width: 1 }} > Log Out </Button>
            </Box>
        </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box className='bg-img3' sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }, backgroundImage: `url('//cdn.shopify.com/s/files/1/0355/9135/6553/files/bg_bottom_mobile.png?v=1585130447')`
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Deshboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>

                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/myorder`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/review`}>
                        <GameReview></GameReview>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addgames`}>
                        <AddGame></AddGame>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );

}
Drawers.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


export default Drawers;