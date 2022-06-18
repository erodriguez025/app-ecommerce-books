import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import accounting from 'accounting';
import { Link } from "react-router-dom"


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

export default function Item ({title, img, price, id, author, description, category_name, rating}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardHeader
        action={
         <Typography
           variant= "h5"
           color= "textSecondary"         
         >
           {accounting.formatMoney(price)}
         </Typography>
        }
        title={title}
        subheader={author}
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="book"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Categoría: {category_name}
        </Typography>
        
      </CardContent>
      <CardActions disableSpacing>
        <Link to={`/item/${id}`} className="w-100 btn bg-principal text-white d-block">
          <IconButton aria-label="Add to Cart">
            <AddShoppingCartIcon fontSize='large'/>
          </IconButton>
        </Link>  
        {Array(rating)
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
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}