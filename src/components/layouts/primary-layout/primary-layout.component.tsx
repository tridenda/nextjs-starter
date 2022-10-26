import Head from "next/head";

import * as Styles from "./primary-layout.styles";

export type PrimaryLayoutProps = {
  children: React.ReactNode;
};

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <>
        <h1>halah</h1>
        <Styles.Main>{children}</Styles.Main>
      </>
    </>
  );
};

export default PrimaryLayout;
