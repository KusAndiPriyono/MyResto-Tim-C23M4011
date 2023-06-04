/* eslint-disable react-hooks/exhaustive-deps */
import Container from '@mui/material/Container';
import {
  Box,
  TextField,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          gap: '20px',
          flexDirection: 'row',
          flexWrap: 'wrap',
          padding: '20px',
        }}
      >
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '350px',
            borderTopLeftRadius: '30px',
            borderTopRightRadius: '30px',
          }}
        >
          {/* Kategori Header */}
          <div>
            <CardMedia
              component='img'
              alt='green iguana'
              height='200'
              image='/images/404.png'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Name
              </Typography>
            </CardContent>
          </div>

          {/* Kategori Detail */}
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Difficulty
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Duration
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Summary
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Start Location Description
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Start Date
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Location Length
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Max Group Size
            </Typography>
          </CardContent>

          {/* Kategori Footer */}
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Price
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Rating Average
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Rating Quantity
            </Typography>
          </CardContent>

          <CardActions>
            <Button size='small'>Detail</Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '350px',
            borderTopLeftRadius: '30px',
            borderTopRightRadius: '30px',
          }}
        >
          {/* Kategori Header */}
          <div>
            <CardMedia
              component='img'
              alt='green iguana'
              height='200'
              image='/images/404.png'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Name
              </Typography>
            </CardContent>
          </div>

          {/* Kategori Detail */}
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Difficulty
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Duration
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Summary
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Start Location Description
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Start Date
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Location Length
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Max Group Size
            </Typography>
          </CardContent>

          {/* Kategori Footer */}
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Price
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Rating Average
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Rating Quantity
            </Typography>
          </CardContent>

          <CardActions>
            <Button size='small'>Detail</Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '350px',
            borderTopLeftRadius: '30px',
            borderTopRightRadius: '30px',
          }}
        >
          {/* Kategori Header */}
          <div>
            <CardMedia
              component='img'
              alt='green iguana'
              height='200'
              image='/images/404.png'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Name
              </Typography>
            </CardContent>
          </div>

          {/* Kategori Detail */}
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Difficulty
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Duration
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Summary
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Start Location Description
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Start Date
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Location Length
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Max Group Size
            </Typography>
          </CardContent>

          {/* Kategori Footer */}
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Price
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Rating Average
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Rating Quantity
            </Typography>
          </CardContent>

          <CardActions>
            <Button size='small'>Detail</Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '350px',
            borderTopLeftRadius: '30px',
            borderTopRightRadius: '30px',
          }}
        >
          {/* Kategori Header */}
          <div>
            <CardMedia
              component='img'
              alt='green iguana'
              height='200'
              image='/images/404.png'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Name
              </Typography>
            </CardContent>
          </div>

          {/* Kategori Detail */}
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Difficulty
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Duration
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Summary
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Start Location Description
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Start Date
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Location Length
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Max Group Size
            </Typography>
          </CardContent>

          {/* Kategori Footer */}
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Price
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Rating Average
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Rating Quantity
            </Typography>
          </CardContent>

          <CardActions>
            <Button size='small'>Detail</Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};

export default HomePage;
