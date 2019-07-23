import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '../styles/PR.css';

class PR extends React.Component {
  render() {
    const { exercise, reps } = this.props
    return (
      <Card raised className='card'>
        <CardActionArea>
          <CardMedia
            className='media'
            image={require(`../assets/images/${exercise}.jpg`)}
            title="test"
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {exercise}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {`${reps} total reps`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default PR;