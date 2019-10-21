import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {
    Link,
    useParams
} from "react-router-dom";
import { connect } from 'react-redux';



function DetailsMovie(props) {
    //get current id from url
    const { id } = useParams();

    const classes = useStyles();
    let detailsMovie = {};

    function findMovieById() {
        const arrayMovies = props.movies;
        //  console.log(id);
        const arrayMoviesFiltered = arrayMovies.filter(
            (item) => item.show.id === parseInt(id)
        )
        detailsMovie = arrayMoviesFiltered[0];
        props.dispatch({
            type: "DISABLEDINPUT",
            data: {
                disabledInput: true
            }
        })
    }
    
    findMovieById();
    //console.log(detailsMovie);

    return (
        <div className={classes.root}>

            <Paper className={classes.paper}>
                <Link to="/">
                    <svg style={{ cursor: "pointer" }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="30"
                        viewBox="0 0 18 18">
                        <path d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z" />
                    </svg>

                </Link>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="" src={detailsMovie && detailsMovie.show.image !== null ? detailsMovie.show.image.medium : "https://cdn3.iconfinder.com/data/icons/ui-03-basic-2/100/Basic__54-512.png"} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    <span className={classes.label}>Title : </span>   {detailsMovie && detailsMovie.show.name !== null ? detailsMovie.show.name : "--No information--"}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    <span className={classes.label}>   Language :</span>  {detailsMovie && detailsMovie.show.language !== null ? detailsMovie.show.language : "--No information--"}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    <span className={classes.label}>Premiered : </span>  {detailsMovie && detailsMovie.show.premiered !== null ? detailsMovie.show.premiered : "--No information--"}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    <span className={classes.label}>Summary :</span>
                                    <div style={{ overflow: "auto", height: "10em" }} dangerouslySetInnerHTML={{ __html: detailsMovie ? detailsMovie.show.summary : null }} />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',

    },
    paper: {
        padding: theme.spacing(2),
        margin: 20,
        width: 400,
        height: 350,
    },
    image: {
        width: 100,
        height: 70,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    progress: {
        margin: theme.spacing(2),
    },
    label: {
        fontWeight: 'bold'
    }
}));

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
    }
}

export default connect(mapStateToProps)(DetailsMovie);