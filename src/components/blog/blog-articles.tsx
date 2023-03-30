import { Article } from "@/types/articles";
import Link from "next/link";
import imagePlaceholder from "../../../public/images/placeholder.png"

interface BlogItemsProps {
  articles: Article[];
  title: string;
  variant: "home" | "blog"
}

const BlogItems = ({ articles, title, variant }: BlogItemsProps) => {
  return (
    <div className={`blog-items blog-items_${variant}`}>
      <div className="site-container blog-items__container">
        <p className="blog-items__main-title">{title}</p>
        <div className="blog-items__items">
          {articles.map((item) => {
            return (
              <div key={item.id} className="blog-items__item">
                <Link className="blog-items__item-link" href={`blog/${item.slug}`} />
                <div className="blog-items__item-img-wrapper">
                  <img src={!item?.mainImage ? imagePlaceholder.src : item.mainImage.url} alt="" className="blog-items__item-img" />
                </div>
                <p className="blog-items__title">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { BlogItems };
