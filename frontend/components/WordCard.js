import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const WordCard = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Box marginBottom="1rem">
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {props.category}
            </Typography>
            <Typography variant="h5" component="h2">
              {props.word}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {props.wordType}
            </Typography>
            <Typography variant="body2" component="p">
              {props.wordDefinition}
              <br />
              <i>An example should come here.</i>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Show the answer</Button>
          </CardActions>
        </Card>
      </Box>
      <Grid container className={classes.root} justify="center">
        <Grid item xs={12}>
          <ButtonGroup fullWidth color="primary">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>5</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </div>
  );
}

export default WordCard;