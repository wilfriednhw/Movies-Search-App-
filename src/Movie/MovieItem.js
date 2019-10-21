import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {
    Link
} from "react-router-dom";



export default function MovieItem(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="" src={props.item.show.image !== null ? props.item.show.image.medium : "https://cdn3.iconfinder.com/data/icons/ui-03-basic-2/100/Basic__54-512.png"} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    Title : {props.item.show.name}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    <Link to={'/details/' + props.item.show.id}> >> Click here to See  Details</Link>
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
}));