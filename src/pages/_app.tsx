import type { AppProps } from "next/app";
import { apolloClient } from "@/lib/appoloClient";
import { ApolloProvider } from "@apollo/client";
import { Montserrat } from "@next/font/google";
import { CheckPricePoshlina } from "@/components/modals/content/check-price-poshlina";
import dynamic from "next/dynamic";
const RootModal = dynamic(
  import("@/components/modals/rootModal").then((module) => module.RootModal),
  { ssr: false }
);
import {
  modalCheckPricePoshlinaUpdate,
  modalCheckPriceConstructorUpdate,
  modalCheckPriceGruzovikUpdate,
  modalCheckPriceSpectehnicUpdate,
  modalCheckPriceUpdate,
  modalOrderUpdate,
  modalQuestionManagerUpdate,
  AppStore,
  modalCallbackUpdate,
} from "@/pullstate";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "../styles/index.scss";
import { CheckPrice } from "@/components/modals/content/check-price";
import { QuestionManager } from "@/components/modals/content/question-manager";
import { Order } from "@/components/modals/content/order";
import { Callback } from "@/components/modals/content/callback";

// Config for Fonts
const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

function MyApp({ Component, pageProps }: AppProps) {
  const { modalCheckPricePoshlina, modalCheckPriceConstructor, modalCheckPriceGruzovik, modalCheckPriceSpectehnic, modalCheckPrice, modalOrder, modalQuestionManager, modalCallback } = AppStore.useState(
    (store) => store
  );
  return (
    <ApolloProvider client={apolloClient}>
      <div className={`${montserrat.className} root`}>
        <Component {...pageProps} />
        <RootModal active={modalCheckPrice} onClose={() => modalCheckPriceUpdate(false)} title="Получить оценку стоимости авто из Японии за 15 мин!">
          <CheckPrice title={"Получить оценку стоимости авто из Японии за 15 мин!"} />
        </RootModal>
        <RootModal active={modalQuestionManager} onClose={() => modalQuestionManagerUpdate(false)} title="Какой у вас вопрос?">
          <QuestionManager title="Какой у вас вопрос?" />
        </RootModal>
        <RootModal active={modalCheckPricePoshlina} onClose={() => modalCheckPricePoshlinaUpdate(false)} title="Получите оценку стоимости автомобиля под полную пошлину из Японии!">
          <CheckPricePoshlina title="Получите оценку стоимости автомобиля под полную пошлину из Японии!" />
        </RootModal>
        <RootModal active={modalOrder} onClose={() => modalOrderUpdate(false)} title="Оставить заявку">
          <Order title="Оставить заявку" />
        </RootModal>
        <RootModal active={modalCallback} onClose={() => modalCallbackUpdate(false)} title="Свяжемся с вами в течение 10 минут!">
          <Callback title="Свяжемся с вами в течение 10 минут!" />
        </RootModal>
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
