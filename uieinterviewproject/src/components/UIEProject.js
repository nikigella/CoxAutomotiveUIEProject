import React  from 'react';
import { data } from '../api/data';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Card, 
    CardActionArea, 
    CardContent, 
    CardMedia,
    Grid, 
    Typography 
} from '@material-ui/core';

import '../components/UIEProject.css'
import StockPhoto from '../../src/stockphoto.png'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    media: {
        height: 170,
    },
}));

// Convert to USD
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
})

function UIEProject() {
    const classes = useStyles();
    return (
        <div className={classes.root} style={{margin: '25px'}}>
            <Grid container spacing={3}>
                {data.map((info, key) => {
                    return (
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className={classes.root} >
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={StockPhoto}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="h4">
                                            <div className="heading">
                                            {info.Heading}
                                            </div>
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <div className="subheading">
                                                {info.Subheading}
                                            </div>
                                        </Typography>
                                        <hr />
                                        <Typography>
                                            <div className="price">
                                                {formatter.format(info.Price)}
                                            </div>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}

export default UIEProject;