import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';
import SidebarLayout from '@/app/components/widgets/layouts/SidebarLayout';

import { Container, Grid} from '@mui/material';
import Footer from '@/app/components/shared/Footer';
import RecentOrders from '@/app/components/pages/Management/Transactions/RecentOrders'
//import ProductTable from '@/app/components/pages/Management/Transactions/Tables';
import PageTitleWrapper from '@/app/components/shared/PageTitleWrapper';
import PageTitle from '@/app/components/shared/PageTitle';

/**Import Icon */
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
//import CheckboxDropdown from '@/app/components/pages/Management/Transactions/dropdown'
function NavBar() {
  const router = useRouter()
  return (
    <nav>
      <Link href="/" className={router.pathname === '/' ? 'selected' :''} style={linkStyle('Home')}>
       <HomeRoundedIcon /> 
      </Link> <ChevronRightTwoToneIcon/>
      <Link href="/dashboards/home" className={router.pathname === '/dashboards/home' ? 'selected' :''} style={linkStyle('List')}>
        Dashboard
      </Link>
      <style jsx>{`
        nav {
          background-color:;
          text-align: left;
          margin-top : 20px;
          margin-bottom : 20px;
        }
        Link {
          margin-left:-10px;
          text-decoration: none;
          color: black;
          padding: 1px;
        }
        .selected {
          border-bottom: 2px solid red;
        }
      `}</style>
    </nav>
  );
}

function linkStyle(page) {
  return {
    marginLeft: page === 'home' ? 0 : 20,
    display: page === 'home' ? 'none' : 'inline-block',
    fontWeight: page === 'home' ? 'bold' : 'normal',
  };
}
function DashboardCrypto() {
  return (
    <>
      <Head>
        <title>Crypto Dashboard</title>
      </Head>
      {/* <NavBar/> */}
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
