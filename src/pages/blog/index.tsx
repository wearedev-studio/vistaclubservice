import { BlogItems } from "@/components/blog/blog-articles";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Menu } from "@/components/menu";
import { ArticleService } from "@/service/articles";
import { Article } from "@/types/articles";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
interface PageProps {
  articles: Article[];
}

const Page: NextPage<PageProps> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Menu />
      <BlogItems variant="blog" articles={articles} title="Все статьи нашего блога" />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await ArticleService.getAllArticles();
  return {
    props: {
      articles: res.data.articles,
      revalidate: 5,
    },
  };
};

export default Page;
