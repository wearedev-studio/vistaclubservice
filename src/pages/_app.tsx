import type { AppProps } from "next/app";
import { apolloClient } from "@/lib/appoloClient";
import { ApolloProvider } from "@apollo/client";
import { Montserrat } from "@next/font/google";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/pagination';
import "../styles/index.scss";

// Config for Fonts
const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <div className={`${montserrat.className} root`}>
        <div className={`${montserrat.className} root`}>
          <Component {...pageProps} />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
