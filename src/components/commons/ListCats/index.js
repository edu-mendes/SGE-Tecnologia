/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function ListCats() {
  const classes = useStyles();
  const [tags, setTags] = React.useState([]);
  const [cats, setCats] = React.useState([]);

  React.useEffect(() => {
    fetch('https://cataas.com/api/tags')
      .then((respServer) => respServer.json())
      .then((respFull) => {
        setTags(respFull);
      });
  });

  React.useEffect(() => {
    fetch('https://cataas.com/api/cats')
      .then((respServer) => respServer.json())
      .then((respFull) => {
        setCats(respFull);
      });
  });

  // const respostaCat = cats.reduce((acc, cat) => {
  //   const { id, tags } = cat;
  //   return [...acc, [id, ...tags]];
  // }, []);

  // console.log(respostaCat);

  return (
    <div className={classes.root}>
      {tags.map((tag, index) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} key={index}>
              {tag}
            </Typography>
          </AccordionSummary>
          {cats.map((cat, el) => (
            <AccordionDetails>
              <Container
                display="flex"
                flexDirection="column"
              >
                <Typography key={el}>
                  {cat.id}
                </Typography>
              </Container>
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </div>
  );
}
