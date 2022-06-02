import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Item () {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <h4>$830</h4>
          </IconButton>
        }
        title="Mero Cristianismo"
        subheader="C.S. Lewis"
      />
      <CardMedia
        component="img"
        height="194"
        image={"https://prodimage.images-bn.com/pimages/9780061140013_p0_v4_s1200x630.jpg"}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Apologética cristiana.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

      <IconButton aria-label="Add to Cart">
          <AddShoppingCartIcon fontSize='large'/>
        </IconButton>
        {Array(4)
          .fill()
          .map((_, i) => (
            <p>&#11088;</p>
          ))}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Buen libro.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
