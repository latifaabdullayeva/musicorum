import React, {useState} from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 80,
        backgroundColor: theme.palette.background.default,
        borderRadius: '1rem 1rem 0rem 0rem',
    },
    img: {
        height: 300,
        overflow: 'hidden',
        display: 'block',
        width: '100%',
    },
}));

function SingleLineGridList(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [activeChartItems, setActiveChartItems] = useState(0);

    if (props.chartList.length > 0) {
        let chartItemNumbers = []
        for (let i = 0; i < props.chartList.length; i++) {
            const chartItems =
                {
                    label: props.chartList[i].title,
                    imgPath: props.chartList[i].coverImage
                }
            chartItemNumbers.push(chartItems)
        }
        const maxChartItems = chartItemNumbers.length;

        const handleNext = () => {
            setActiveChartItems((prevActiveChartItem) => prevActiveChartItem + 1);
        };

        const handleBack = () => {
            setActiveChartItems((prevActiveChartItem) => prevActiveChartItem - 1);
        };
        return (
            <Grid className={classes.root} >
                <Paper square elevation={0} className={classes.header}>
                    <Typography variant="h5" component="h5">
                        {chartItemNumbers[activeChartItems].label}
                    </Typography>
                </Paper>
                <img
                    className={classes.img}
                    src={chartItemNumbers[activeChartItems].imgPath}
                    alt={chartItemNumbers[activeChartItems].label}
                />
                <MobileStepper style={{backgroundColor: "#ebebeb"}} steps={maxChartItems}
                               position="static" variant="text" activeStep={activeChartItems}
                               nextButton={
                                   <Button size="small" onClick={handleNext}
                                           disabled={activeChartItems === maxChartItems - 1}>Next
                                       {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
                                   </Button>
                               }
                               backButton={
                                   <Button size="small" onClick={handleBack} disabled={activeChartItems === 0}>
                                       {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}Back
                                   </Button>
                               }
                />
            </Grid>
        );
    } else {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <CircularProgress disableShrink style={{ color: "#fd9e7f"}}/>
            </div>

        )
    }
}

export default SingleLineGridList;
