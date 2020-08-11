import React from 'react'
import './GameRule.css';

import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        borderRadius : '4px',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: '#982229',
        borderBottom: '1px solid #e3b846',  
        textTransform: 'uppercase',
        fontWeight : 'bold',    
        color : '#e3b846',
        marginBottom: -1,
        minHeight: 40,
        '&$expanded': {
            minHeight: 40,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

function GameRule() {

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    return (
        <div className="header__AllPageTabPanel">
            <h2>Introduction</h2>
            <p>
                e.g. Assuming a stock resulting in 1234.56, all our game types would only take decimal ‘56’ as result; In the case the result is now serving as ‘56’, we define decimal ‘5’ as ‘first digit’ result; decimal ‘6’ as ‘last digit’ result; decimals ‘5’ and ‘6’ together as ‘two-digit’ result; Other than these, we are also appointing the outcome of ‘5 + 6’ as ‘both digits’ result, which is ‘11’
             </p>

            <Button>Result Introduction</Button>

            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className="header__PageAccordionSummary">
                    <Typography>first Digit (????.??)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    <span className="text-blue">small</span> – 0, 1, 2, 3,
                    4
                    <br />
                    <span className="text-success">big</span> – 5, 6, 7,
                    8, 9
                    <br />
                    <span className="text-purple">even</span> – 0, 2, 4,
                    6, 8
                    <br />
                    <span className="text-yellow">odd</span> – 1, 3, 5, 7,
                    9
                    <br />
                    <span className="text-blue-light">high</span> – 7, 8, 9
                    <br />
                    <span className="text-blue-dark">middle</span> – 4, 5, 6
                    <br />
                    <span className="text-dont-no">low</span> – 0, 1,
                    2, 3
                    <br />
                    <span className="text-red">number</span> – 0, 1, 2, 3,
                    4, 5, 6, 7, 8, 9
          </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <Typography>last Digit (????.??)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    <span className="text-blue">small</span> – 0, 1, 2, 3,
                        4
                        <br />
                        <span className="text-success">big</span> – 5, 6, 7,
                        8, 9
                        <br />
                        <span className="text-purple">even</span> – 0, 2, 4,
                        6, 8
                        <br />
                        <span className="text-yellow">odd</span> – 1, 3, 5, 7,
                        9
                        <br />
                        <span className="text-blue-light">high</span> – 7, 8, 9
                        <br />
                        <span className="text-blue-dark">middle</span> – 4, 5, 6
                        <br />
                        <span className="text-dont-no">low</span> – 0, 1,
                        2, 3
                        <br />
                        <span className="text-red">number</span> – 0, 1, 2, 3,
                        4, 5, 6, 7, 8, 9
          </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>last Digit (????.? + ? = ?)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    <span className="text-blue">small</span
                        >– 1, 2, 3, 4, 5, 6, 7, 8, 9
                        <br />
                        <span className="text-success">big</span> – 10, 11,
                        12, 13, 14, 15, 16, 17, 18
                        <br />
                        <span className="text-success">Tie</span> – 0
                        <br />
                        <span className="text-purple">Even</span> – 0, 2, 4,
                        6, 8, 10, 12, 14, 16, 18
                        <br />
                        <span className="text-yellow">odd</span> – 1, 3, 5, 7,
                        9, 11, 13, 15, 17
                        <br />
                        <span className="text-blue-light">high</span> – 12, 13, 14,
                        15, 16, 17, 18
                        <br />
                        <span className="text-blue-dark">middle</span> – 6, 7, 8,
                        9, 10, 11
                        <br />
                        <span className="text-dont-no">low</span> – 0,
                        1, 2, 3, 4, 5
                        <br />
                        <span className="text-red">number</span> – 0, 1, 2, 3,
                        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18
          </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>Two Digit (????.??)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    <span className="text-blue">small</span> – 01, 02, 03,
          04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
          38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49
          <br />
          <span className="text-success">big</span> – 50, 51, 52,
          53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
          70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86,
          87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99
          <br />
          <span className="text-success">tie</span> – 00
          <br />
          <span className="text-purple">even</span> – 00, 02,
          04, 06, 08, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36,
          38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70,
          72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98
          <br />
          <span className="text-yellow">odd</span> –01, 03, 05,
          07, 09, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39,
          41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73,
          75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99
          <br />
          <span className="text-blue-light">high</span> – 67, 68,
          69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85,
          86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99
          <br />
          <span className="text-blue-dark">middle</span> – 34, 35,
          36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
          53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66
          <br />
          <span className="text-dont-no">low</span> – 00,
          01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17,
          18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33
          <br />
          <span className="text-red">number</span> – 00, 01, 02,
          03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
          37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
          54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
          71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
          88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99
          </Typography>
                </AccordionDetails>
            </Accordion>



        </div>
    )
}

export default GameRule
