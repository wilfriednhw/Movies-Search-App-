import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import { connect } from 'react-redux';

import './Header.css';



function Header(props) {
    //  console.log(props);

    const classes = useStyles();

    function getData(e) {
        //display spinner
        props.dispatch({
            type: "LOADING",
            data: {
                isLoading: true,

            }
        })
        
        //get text from input search
        const query = e.target.value;

        if (query !== "") {
            axios.get(`https://api.tvmaze.com/search/shows`, {
                params: {
                    q: query
                }
            })
                .then(res => {
                    // console.log(res.data);
                    props.dispatch({
                        type: "SEARCH",
                        data: {
                            movies: res.data,
                            query: query,
                            isLoading: false
                        }
                    })
                });
        }
        else {
            props.dispatch({
                type: "LOADING",
                data: {
                    isLoading: false
                }
            })
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Movies Search App
                     </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            disabled={props.disabledInput ? props.disabledInput : false}
                            onPaste={
                                (e) => {
                                    getData(e)
                                }
                            }
                            onChange={
                                (e) => {
                                    getData(e)
                                }}
                            placeholder="Type Search …"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
}));

const mapStateToProps = (state) => {
    return {
        disabledInput: state.disabledInput,
    }
}

export default connect(mapStateToProps)(Header)