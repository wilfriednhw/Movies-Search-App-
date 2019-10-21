import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MovieItem from './MovieItem';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';


function MoviesList(props) {
    const classes = useStyles();
    
    //always activate input
    props.dispatch({
        type: "DISABLEDINPUT",
        data: {
            disabledInput: false,

        }
    })
    return (
        <div className={classes.root}>
            {
                props.isLoading
                    ? <CircularProgress className={classes.progress} />
                    :
                    props.movies.length > 0
                        ?
                        <>
                            <span className={classes.result}>Results of last research : {props.query} </span>
                            <Grid container spacing={3}>
                                <div style={{ height: '70vh', width: '100%', overflow: 'auto' }}>
                                    {
                                        props.movies.map(
                                            (item, index) => <MovieItem key={index} item={item} />
                                        )
                                    }
                                </div>
                            </Grid>
                        </>
                        : <span className={classes.result}>Empty result</span>
            }
        </div>
    );
}
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 20,
        overflow: 'auto',
        textAlign: 'center'

    },
    result: {
        textAlign: 'center',
        marginBottom: 30,
        display: 'block',
        fontWeight: 'bold',
    },
    movieBox: {
        height: 200,
        border: '1px solid blue',
    },
}));

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        query: state.query,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(MoviesList);