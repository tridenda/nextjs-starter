import type { AppProps } from "next/app";

import { NextPageWithLayout } from "./page";

import GlobalStyles from "../styles/global.styles";

type AppWithLayoutProps = {
  Component: NextPageWithLayout;
} & AppProps;

function MyApp({ Component, pageProps }: AppWithLayoutProps) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
