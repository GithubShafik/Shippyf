// import { m } from 'framer-motion';
// @mui
// import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import Switch from '@mui/material/Switch';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// components
// import Image from 'src/components/image';
// import { useSettingsContext } from 'src/components/settings';
import { MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeDarkMode() {
  // const settings = useSettingsContext();

  // const renderDescription = (
  //   // <Stack alignItems="center" spacing={3}>
  //   //   <m.div variants={varFade().inUp}>
  //   //     <Typography component="div" variant="overline" sx={{ color: 'primary.main' }}>
  //   //       Easy switch between styles.
  //   //     </Typography>
  //   //   </m.div>

  //   //   <m.div variants={varFade().inUp}>
  //   //     <Typography variant="h2" sx={{ color: 'common.white' }}>
  //   //       Dark mode
  //   //     </Typography>
  //   //   </m.div>

  //   //   <m.div variants={varFade().inUp}>
  //   //     <Typography sx={{ color: 'grey.500' }}>
  //   //       A dark theme that feels easier on the eyes.
  //   //     </Typography>
  //   //   </m.div>

  //   //   <m.div variants={varFade().inUp}>
  //   //     <Switch
  //   //       checked={settings.themeMode === 'dark'}
  //   //       onClick={() =>
  //   //         settings.onUpdate('themeMode', settings.themeMode === 'light' ? 'dark' : 'light')
  //   //       }
  //   //     />
  //   //   </m.div>
  //   // </Stack>
  //   <></>
  // );

  // const renderImg = (
  //   <m.div variants={varFade().inUp}>
  //     <Image
  //       alt="darkmode"
  //       src="/assets/images/home/darkmode.webp"
  //       sx={{
  //         borderRadius: 2,
  //         my: { xs: 5, md: 10 },
  //         boxShadow: (theme) => `-40px 40px 80px ${alpha(theme.palette.common.black, 0.24)}`,
  //       }}
  //     />
  //   </m.div>
  // );

  return (
    <Box
      sx={{
        textAlign: 'center',
        bgcolor: 'grey.900',
        pt: { xs: 10, md: 15 },
        pb: { xs: 10, md: 20 },
      }}
    >
      <Container component={MotionViewport}>
        <p>
          Welcome to Shippyfi , where speed, reliability, and precision converge to redefine your
          shipping experience. Whether you are sending urgent documents across town or parcels
          internationally, our dedicated team ensures swift delivery with the utmost care. With
          state-of-the-art tracking technology, transparent pricing, and a commitment to customer
          satisfaction, we make shipping simple and efficient. Trust Shippyfi to deliver your
          packages safely and on time, every time. Experience the difference today. ChatGPT Discover
          seamless shipping solutions with [Courier Company Name], your trusted partner in
          logistics. From local deliveries to global shipments, we specialize in fast, secure, and
          cost-effective transportation services tailored to meet your needs. Our advanced tracking
          systems provide real-time updates, ensuring peace of mind every step of the way. Whether
          it is a small envelope or a large package, our dedicated team is committed to delivering
          excellence with every shipment. Join thousands of satisfied customers who rely on [Courier
          Company Name] for their shipping needs. Start shipping with confidence today.
        </p>
      </Container>
    </Box>
  );
}
