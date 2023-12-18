
import type { ReactElement } from 'react';
import BaseLayout from 'src/app/components/widgets/layouts/BaseLayout';

import LoginForm from '@/app/components/pages/Authentification/LoginForm'
import Footer from '@/app/components/shared/Footer';

function Overview() {
  return (
  <>
      <LoginForm/>
  </>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};