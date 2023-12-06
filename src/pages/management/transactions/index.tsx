import Head from 'next/head';
import SidebarLayout from '@/app/components/widgets/layouts/SidebarLayout';
import PageHeader from '@/app/components/pages/Management/Transactions/PageHeader';
import PageTitleWrapper from '@/app/components/shared/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from '@/app/components/shared/Footer';

import RecentOrders from '@/app/components/pages/Management/Transactions/RecentOrders';

function ApplicationsTransactions() {
  return (
    <>
      <Head>
        <title>Transactions - Applications</title>
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
          spacing={3}
        >
          <Grid item xs={12}>
            <RecentOrders />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

ApplicationsTransactions.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ApplicationsTransactions;
