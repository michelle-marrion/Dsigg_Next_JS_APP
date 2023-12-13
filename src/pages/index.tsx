import { Typography, Box, Card, Container, Button, styled } from '@mui/material';
import type { ReactElement } from 'react';
import BaseLayout from 'src/app/components/widgets/layouts/BaseLayout';

import Link from 'src/app/components/shared/Link';
import Head from 'next/head';

import Logo from 'src/app/components/shared/LogoSign';
import Hero from 'src/app/components/pages/Overview/Hero';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Footer from '@/app/components/shared/Footer';
const HeaderWrapper = styled(Card)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(10)};
`
);

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);

function Overview() {
  return (
    <OverviewWrapper>
      <Head>
        <title>Template App NextJS</title>
      </Head>
      <HeaderWrapper>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center">
            <Logo />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flex={1}
            >
              <Box />
              <Box>
                <Button
                  component={Link}
                  href="/dashboards/home"
                  variant="contained"
                  sx={{ ml: 2 }}
                >
                  <ArrowForwardRoundedIcon/>
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </HeaderWrapper>
      <Hero/>
      <Footer />
    </OverviewWrapper>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};