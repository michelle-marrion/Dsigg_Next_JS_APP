
import type { ReactElement } from 'react';
import BaseLayout from 'src/app/components/widgets/layouts/BaseLayout';
//import AuthorForm from 'src/app/components/shared/Forms'
//import ImageUpload from '@/app/components/shared/Forms/Image/ManyImage';
import FileUpload from '@/app/components/shared/Forms/Files/FileUpload'
//import LoginForm from '@/app/components/pages/Authentification/LoginForm'
import Footer from '@/app/components/shared/Footer';

function Overview() {
  return (
  <>
      {/* <LoginForm/> */}
      {/* <AuthorForm/> */}
      {/* <ImageUpload/> */}
      <FileUpload/>
      <Footer/>
  </>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};