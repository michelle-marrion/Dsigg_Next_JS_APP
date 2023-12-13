import Head from 'next/head';

import SidebarLayout from '@/app/components/widgets/layouts/SidebarLayout';

import PageHeader from '@/app/components/pages/Dashboards/Home/PageHeader';
import PageTitleWrapper from '@/app/components/shared/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from '@/app/components/shared/Footer';
import AccountBalance from '@/app/components/pages/Dashboards/Home/AccountBalance';
function DashboardCrypto() {
  return (
    <>
      <Head>
        <title>Crypto Dashboard</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      {/* <TopBarContent/> */}
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
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

DashboardCrypto.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardCrypto;
