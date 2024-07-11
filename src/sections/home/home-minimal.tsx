import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: ' /assets/landingPageIcon/ic_seafreight.png',
    title: 'Sea Freight',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: ' /assets/landingPageIcon/ic_airfreight.png',
    title: 'Air Freight',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: ' /assets/landingPageIcon/ic_packageforwarding .png',
    title: 'Package Forwarding',
  description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: ' /assets/landingPageIcon/ic_trucking.png',
    title: 'Trucking',
  description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: ' /assets/landingPageIcon/ic_warehouse.png',
    title: 'Warehouse',
  description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: ' /assets/landingPageIcon/ic_delivered.png',
    title: 'Delivery',
  description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
];

// ----------------------------------------------------------------------

export default function HomeMinimal() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: 'center',
          mb: { xs: 5, md: 10 },
        }}
      >
        <m.div variants={varFade().inDown}>
          <Typography variant="h2">
          What We Offer
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
          Far far away, behind the word mountains, far from the countries Vokalia and  <br />
          Consonantia, there live the blind texts.
          </Typography>
        </m.div>
      
      </Stack>

      <Box
        gap={{ xs: 3, lg: 10 }}
        display="grid"
        alignItems="center"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        {CARDS.map((card, index) => (
          <m.div variants={varFade().inUp} key={card.title}>
            <Card
              sx={{
                textAlign: 'center',
                boxShadow: { md: 'none' },
                bgcolor: 'background.default',
                p: (theme) => theme.spacing(10, 5),
                ...(index === 1 && {
                  boxShadow: (theme) => ({
                    md: `-40px 40px 80px ${
                      theme.palette.mode === 'light'
                        ? alpha(theme.palette.grey[500], 0.16)
                        : alpha(theme.palette.common.black, 0.4)
                    }`,
                  }),
                }),
              }}
            >
              <Box
                component="img"
                src={card.icon}
                alt={card.title}
                sx={{ mx: 'auto', width: 48, height: 48 }}
              />

              <Typography variant="h5" sx={{ mt: 8, mb: 2 }}>
                {card.title}
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>{card.description}</Typography>
            </Card>
          </m.div>
        ))}
      </Box>
    </Container>
  );
}
