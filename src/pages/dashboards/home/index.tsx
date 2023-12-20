import Head from 'next/head';
import NavBar from '@/app/components/shared/NavBarLink';
import SidebarLayout from '@/app/components/widgets/layouts/SidebarLayout';

import { Container, Grid} from '@mui/material';
import Footer from '@/app/components/shared/Footer';
import RecentOrders from '@/app/components/pages/Management/Transactions/RecentOrders'

import PageTitleWrapper from '@/app/components/shared/PageTitleWrapper';
import PageTitle from '@/app/components/shared/PageTitle';

function DashboardCrypto() {
  return (
    <>
      <Head>
        <title>Crypto Dashboard</title>
      </Head>
      <NavBar/>
      <PageTitleWrapper>
        <PageTitle
          heading="Tables of Orders"
          subHeading=""
          docs="https://material-ui.com/components/buttons/"
          text_b='New'
        />
      </PageTitleWrapper> 
      {/* <TopBarContent/> */}
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
      <Container>
        <Grid>
          <Grid>
            {/* <ProductTable/> */}
            {/* <CheckboxDropdown/> */}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

DashboardCrypto.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardCrypto;
