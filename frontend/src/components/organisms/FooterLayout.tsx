import { Grid, List, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function FooterLayout() {
  return (
    <Box
      sx={{
        background: '#3A5A40',
        color: '#FFFFFF',
        pt: 10,
        pb: 10,
        pl: 12,
        pr: 12,
        fontSize: { xs: '12px', md: '14px' },
      }}
    >
      <Grid container spacing={2} justifyContent='center'>
        <Grid item md={6} lg={6}>
          <Typography
            variant='body1'
            sx={{
              textTransform: 'uppercase',
              marginBottom: '1em',
            }}
          >
            About us
          </Typography>
          <Typography
            variant='body2'
            sx={
              {
                // width: '500',
              }
            }
          >
            Aplikasi My Resto adalah sebuah platform yang dirancang untuk
            membantu pengguna dalam mencari dan menemukan tempat restoran.
            Aplikasi ini menyediakan berbagai fitur yang memudahkan pengguna
            dalam menemukan restoran berdasarkan preferensi mereka.
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: '#d5d5d5',
            }}
          >
            <FacebookIcon sx={{ mr: 1 }} />
            <TwitterIcon sx={{ mr: 1 }} />
            <InstagramIcon />
          </Box>
          <Box
            sx={{
              mt: 4,
              color: '#d5d5d5',
            }}
          >
            <Typography
              variant='body2'
              sx={
                {
                  // width: '500',
                }
              }
            >
              Copyright@ My Resto - 2023️
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} lg={2}></Grid>
        <Grid item md={6} lg={2}></Grid>
        <Grid item md={6} lg={2}>
          <Typography sx={{ mr: 1 }} variant='body1'>
            My Team
          </Typography>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant='body2'>
                Andi
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant='body2'>
                Nirwan
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant='body2'>
                Widha
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant='body2'>
                Rozin
              </Typography>
            </ListItemText>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
