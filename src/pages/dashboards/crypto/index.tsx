import Head from 'next/head';

import SidebarLayout from '@/app/components/widgets/layouts/SidebarLayout';

import PageHeader from '@/app/pages/Dashboards/Crypto/PageHeader';
import PageTitleWrapper from '@/app/components/shared/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from '@/app/components/shared/Footer';

import AccountBalance from '@/app/pages/Dashboards/Crypto/AccountBalance';
import Wallets from '@/app/pages/Dashboards/Crypto/Wallets';
import AccountSecurity from '@/app/pages/Dashboards/Crypto/AccountSecurity';
import WatchList from '@/app/pages/Dashboards/Crypto/WatchList';

function DashboardCrypto() {
  return (
    <>
      <Head>
        <title>Crypto Dashboard</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            <AccountBalance />
          </Grid>
          <Grid item lg={8} xs={12}>
            <Wallets />
          </Grid>
          <Grid item lg={4} xs={12}>
            <AccountSecurity />
          </Grid>
          <Grid item xs={12}>
            <WatchList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

DashboardCrypto.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardCrypto;
