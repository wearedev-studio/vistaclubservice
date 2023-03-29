import { Article } from "@/types/articles";
import imagePlaceholder from "../../../public/images/placeholder.png";

interface ArticleProps {
  article: Article;
  variant: "home" | "blog";
}

const Article = ({ article, variant }: ArticleProps) => {
  return (
    <div className={`article article_${variant}`}>
      <div className="site-container article__container">
        <p className="article__main-title">{article.title}</p>
        <div className="article__img-wrapper">
          <img src={!article?.mainImage ? imagePlaceholder.src : article.mainImage.url} alt="" className="article__img" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: `${article.content.html}` }} className="article__content" />
      </div>
    </div>
  );
};

export { Article };
