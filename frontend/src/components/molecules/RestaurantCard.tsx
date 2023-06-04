// import {
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Button,
//   Typography,
// } from '@mui/material';
// import PropTypes from 'prop-types';

// interface Props extends Restaurant {}

// const RestaurantCard: React.FC<Props> = ({
//   id,
//   name,
//   price,
//   description,
//   imageCover,
// }) => {
//   return (
//     <Card
//       sx={{
//         maxWidth: 345,
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//       }}
//     >
//       <CardMedia
//         component='img'
//         alt='green iguana'
//         height='140'
//         image={imageCover}
//       />
//       <CardContent>
//         <Typography gutterBottom variant='h5' component='div'>
//           {id}
//         </Typography>
//         <Typography variant='body2' color='text.secondary'>
//           {description}
//         </Typography>
//         <Typography variant='body2' color='text.secondary'>
//           {price}
//         </Typography>
//         <Typography variant='body2' color='text.secondary'>
//           {name}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size='small'>Detail</Button>
//       </CardActions>
//     </Card>
//   );
// };

// RestaurantCard.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   description: PropTypes.string.isRequired,
//   imageCover: PropTypes.string.isRequired,
// };

// export default RestaurantCard;
