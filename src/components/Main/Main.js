import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Drawer,AppBar,Toolbar,List,CssBaseline,Typography,Divider,IconButton,ListItem,ListItemIcon,ListItemText} from '@material-ui/core';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CircleButton from '../../common/CircleButton/CircleButton';
import backrgoundImage from '../../image/img8.jpg';
import './Main.scss';
import Badge from '@material-ui/core/Badge';
import { Route, Switch,Link } from 'react-router-dom';
import GiftScreen from '../GiftScreen/GiftScreen';
import TeaScreen from '../TeaScreen/TeaScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import Error from '../Error/Error';
import Checkout from '../Checkout/Checkout';



const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    [theme.breakpoints.only('xs')]: {
        width: theme.spacing(0) + 1,
      },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    // flexGrow: 1,
    // padding: theme.spacing(3),
    marginTop: "64px",
  },
  listText:{
    marginLeft: "10px"
  },
  rightToolbar: {
    marginLeft: 'auto',
    marginRight: -12,
  },
}));

const leftMenuData = [
    {
        id:1,
        textName: "Home",
        iconName: "home",
        link:'/'
    },
    {
        id:2,
        textName: "Tea",
        iconName: "coffee",
        link:"/tea"
    },
    {
        id:3,
        textName: "Gift",
        iconName: "gift",
        link:"/gift"
    },
    {
        id:4,
        textName: "About Us",
        iconName: "comment",
        link:"/about"
    }
]


function Main() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };



  return (
    <div className={classes.root} >
      <CssBaseline />
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                    [classes.hide]: open,
                    })}
                >
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </IconButton>
                <Typography variant="h6" noWrap>
                    Tea Pot
                </Typography>
                <section className={classes.rightToolbar}>
                    <IconButton aria-label="show 4 new mails" color="inherit" onClick={toggleDrawer('right', true)}>
                        <Badge badgeContent={4} color="secondary">
                             <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </Badge>
                    </IconButton>
                    <IconButton  color="inherit">
                            <i className="fa fa-user" aria-hidden="true"></i>
                    </IconButton>
                </section>
            </Toolbar>
        </AppBar>
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
            })}
            classes={{
            paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            }),
            }}
        >
        <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
                <i className="fa fa-angle-left" aria-hidden="true"></i>
            </IconButton>
        </div>
        
        <Divider />
        <List>
          {leftMenuData.map((text, index) => (
            <Link to={text.link} key={text.id}>
                <ListItem button  index={index}>
                    <ListItemIcon>
                        <CircleButton iconName={text.iconName}/>
                    </ListItemIcon>
                    <ListItemText primary={text.textName} className={classes.listText}/>
                </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <main className={classes.content} styles={{ backgroundImage:`url(${backrgoundImage})` }}>
        
        <Switch>
            <Route path="/" component={HomeScreen} exact/>
            <Route path="/tea" component={TeaScreen} />
            <Route path="/gift" component={GiftScreen}/>
            <Route component={Error}/>
        </Switch>
      </main>

        <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
            <Checkout/>
        </Drawer>
        
      
    </div>
  );
}



export default Main