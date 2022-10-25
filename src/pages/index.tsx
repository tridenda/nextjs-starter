import { NextPageWithLayout } from "./page";

import PrimaryButton from "../components/buttons/primary-button/primary-button.component";
import PrimaryLayout from "../components/layouts/primary-layout/primary-layout.component";

const Index: NextPageWithLayout = () => {
  return <PrimaryButton buttonText="Read more" />;
};

export default Index;

Index.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
