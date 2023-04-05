import { Article } from "@/components/blog/article";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Menu } from "@/components/menu";
import { ArticleService } from "@/service/articles";
import { Article as ArticleType } from "@/types/articles";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Header as HeaderProps } from "@/types/header";
import Head from "next/head";
import { HeaderService } from "@/service/header";
interface PageProps {
  article: ArticleType;
  headerData: HeaderProps;
}

const Page: NextPage<PageProps> = ({ article, headerData }) => {
  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name={article.excerpt} content="Vista - Наш блог" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header headerData={headerData} />
      <Menu />
      <Article article={article} variant="blog" />
      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async ({}) => {
  const { data: articles } = await ArticleService.getAllArticles();
  const paths = articles.articles.map((article) => ({ params: { slug: article.slug } }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params!.slug;
  const res = await ArticleService.getArticleBySlug(`${slug}`);
  const { data: headerData } = await HeaderService.getAll();
  return {
    props: {
      article: res.data.article,
      headerData: headerData.headers[0],
      revalidate: 5,
    },
  };
};

export default Page;
