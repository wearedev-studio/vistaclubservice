import type { AppProps } from "next/app";
import { apolloClient } from "@/lib/appoloClient";
import { ApolloProvider } from "@apollo/client";
import { Montserrat } from "@next/font/google";
import { CheckPriceAuto } from "@/components/modals/content/check-price-auto";
import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";
const RootModal = dynamic(
  import("@/components/modals/rootModal").then((module) => module.RootModal),
  { ssr: false }
);
import { modalCheckPriceAutoUpdate, modalCheckPriceUpdate, modalOrderUpdate, modalQuestionManagerUpdate, AppStore, modalCallbackUpdate, modalContractUpdate } from "@/pullstate";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "../styles/index.scss";
import { CheckPriceJapan } from "@/components/modals/content/check-price";
import { QuestionManager } from "@/components/modals/content/question-manager";
import { Order } from "@/components/modals/content/order";
import { Callback } from "@/components/modals/content/callback";
import { ContractContent } from "@/components/modals/content/contract-content";

// Config for Fonts
const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

function MyApp({ Component, pageProps }: AppProps) {
  const { modalCheckPriceAuto, modalCheckPrice, modalOrder, modalQuestionManager, modalCallback, modalCheckPriceAutoTitle, modalContract, modalContractContent } = AppStore.useState((store) => store);
  return (
    <ApolloProvider client={apolloClient}>
      <div className={`${montserrat.className} root`}>
      <div className="error-502">
          <h1>502</h1>
          <h2>Bad Gateway</h2>
          <p>Sorry, the server is temporarily unavailable. Please try again later.</p>
        </div>
        {/* <Component {...pageProps} />
        <RootModal active={modalCheckPrice} onClose={() => modalCheckPriceUpdate(false)} title="Получить оценку стоимости авто из Японии за 15 мин!">
          <CheckPriceJapan title={"Получить оценку стоимости авто из Японии за 15 мин!"} />
        </RootModal>
        <RootModal active={modalQuestionManager} onClose={() => modalQuestionManagerUpdate(false)} title="Какой у вас вопрос?">
          <QuestionManager title="Какой у вас вопрос?" />
        </RootModal>
        <RootModal active={modalCheckPriceAuto} onClose={() => modalCheckPriceAutoUpdate(false)} title={modalCheckPriceAutoTitle}>
          <CheckPriceAuto />
        </RootModal>
        <RootModal active={modalOrder} onClose={() => modalOrderUpdate(false)} title="Оставить заявку">
          <Order title="Оставить заявку" />
        </RootModal>
        <RootModal active={modalCallback} onClose={() => modalCallbackUpdate(false)} title="Свяжемся с вами в течение 10 минут!">
          <Callback title="Свяжемся с вами в течение 10 минут!" />
        </RootModal>
        <RootModal active={modalContract} onClose={() => modalContractUpdate(false)} title="Договор">
          <ContractContent
            content={modalContractContent}
          />
        </RootModal>
        <Toaster
          toastOptions={{
            duration: 5000,
            position: "bottom-center",
          }}
        /> */}
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
