import React, {useState} from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const chartItemNumbers = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '1rem',
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

function ChartItems() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeChartItems, setActiveChartItems] = useState(0);
    const maxChartItems = chartItemNumbers.length;

    const handleNext = () => {
        setActiveChartItems((prevActiveChartItem) => prevActiveChartItem + 1);
    };

    const handleBack = () => {
        setActiveChartItems((prevActiveChartItem) => prevActiveChartItem - 1);
    };

    return (
        <div className={classes.root}>
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
        </div>
    );
}

export default ChartItems;
