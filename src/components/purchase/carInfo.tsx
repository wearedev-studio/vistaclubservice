import { modalCheckPriceUpdate } from "@/pullstate";

interface IProps {
  imgUrl: string;
  title: string;
  content: string;
}

const CarInfo = ({ imgUrl, title, content }: IProps) => {
  return (
    <div className="cards-06-item cards-06-list__item flexible-list__item">
      <div className="cards-06-item__inner">
        <div className="purchases-customer__img-wrapper cards-06-item__img-container">
          <img loading="lazy" src={imgUrl} alt={`Изображение для ${title}`} className="purchases-customer__img cards-06-item__img" width="610" />
        </div>
        <div className="cards-06-item__title cards-06-item__title_with-align wysiwyg-string">
          <div>{title}</div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: `${content}` }} className="cards-06-item__text wysiwyg-string"></div>
        <div className="cards-06-item__button-container cards-06-item__button-container_with-align">
          <a href="https://wa.me/79142735005" target="_blank" rel="noopener noreferrer" className="cards-06-item__button button">
            <div className="button__inner">
              <span className="button__text">Бесплатный расчет</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export { CarInfo };
