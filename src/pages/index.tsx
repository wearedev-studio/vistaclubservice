import type { NextPage } from "next";
import { Header } from "@/components/header";
import { Welcome } from "@/components/welcome";
import Head from "next/head";
import { Cars } from "@/components/cars";
import { Footer } from "@/components/footer";
import { Reason } from "@/components/reason";
import { ImageContainer } from "@/components/imageContainer";
import { Guarantees } from "@/components/guarantees";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Welcome />
      <Cars />
      <Reason />
      {/* TODO: Не нужно усложнять. Просто создаем компонент под нужный блок. Трансформируем html в react через конвертор и импортируем сюда компонент. Без лишних пропсов. делаем по аналогии как футер и лр. блоки. */}
      <ImageContainer background mainClass="cover-17 page_section_20 section section_container-width_1200" pathImg="./images/005/143/442/5143442/1920xnoinc/rastamozhka-yaponskih-avto-.jpg" />
      {/* FIXME: Не билдится приложение. Устранить */}
      <ImageContainer
        mainClass="page_section_22 promo-05 section section_container-width_1200"
        pathImg="./images/006/040/093/6040093/1920xnoinc/kupit-avtomobil-iz-yaponii.jpg"
        children={<Guarantees />}
      />
      <Footer />
    </>
  );
};

export default Home;
