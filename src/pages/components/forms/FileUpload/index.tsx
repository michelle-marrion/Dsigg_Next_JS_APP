import Head from 'next/head';
import SidebarLayout from '@/app/components/widgets/layouts/SidebarLayout';
import PageTitle from '@/app/components/shared/PageTitle';
import { useState } from 'react';

import PageTitleWrapper from '@/app/components/shared/PageTitleWrapper';
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider, Button, Link
} from '@mui/material';
import Footer from '@/app/components/shared/Footer';
import FileUpload from '@/app/components/shared/Forms/Files/FileUpload';

function Forms() {
  return (
    <>
      <Head>
        <title>Forms - Components</title>
      </Head>
      <PageTitleWrapper>
        <PageTitle
          heading="Upload Documents"
          subHeading="Components that are used to build interactive placeholders used for data collection from users."
          docs="https://material-ui.com/components/text-fields/"
          text_b='Upload'
        />
      </PageTitleWrapper>
      <Container maxWidth="lg"> 
      <Grid item xs={12}>
                  <Card>
                    <CardHeader title="Upload Documents" />
                    <Divider />
                    <CardContent>
                      <FileUpload/>
                    </CardContent>
                  </Card>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Forms.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Forms;
