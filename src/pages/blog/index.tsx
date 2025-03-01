import { BlogItems } from "@/components/blog/blog-articles";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Menu } from "@/components/menu";
import { ArticleService } from "@/service/articles";
import { Article } from "@/types/articles";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Header as HeaderProps } from "@/types/header";
import { HeaderService } from "@/service/header";
interface PageProps {
  articles: Article[];
  headerData: HeaderProps;
}

const Page: NextPage<PageProps> = ({ articles, headerData }) => {
  return (
    <>
      <Head>
        <title>Vista - Наш блог</title>
        <meta name="description" content="Vista - Наш блог" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header headerData={headerData} />
      <Menu />
      <BlogItems variant="blog" articles={articles} title="Все статьи нашего блога" />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await ArticleService.getAllArticles();
  const { data: headerData } = await HeaderService.getAll();
  return {
    props: {
      articles: res.data.articles,
      headerData: headerData.headers[0],
      revalidate: 5,
    },
  };
};

export default Page;
