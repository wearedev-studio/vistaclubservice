import { modalCheckPriceUpdate } from "@/pullstate";

interface IProps {
  imgPath: string;
  name: string;
  price: string;
  year: string;
  driveUnit: string;
  volume: string;
  power: string;
  mileage: string;
}

const CarInfo = ({ imgPath, name, driveUnit, power, price, year, volume, mileage }: IProps) => {
  return (
    <div className="cards-06-item cards-06-list__item flexible-list__item">
      <div className="cards-06-item__inner">
        <a className="cards-06-item__img-container" href="#a1">
          <img lazy-image="true" src={imgPath} alt="" className="cards-06-item__img" width="610" />
        </a>
        <div className="cards-06-item__title cards-06-item__title_with-align wysiwyg-string">
          <div>{name}</div>
        </div>
        <div className="cards-06-item__text wysiwyg-string">
          <strong>Цена в РФ:</strong> от {price} руб.
          <br />
          год: {year}
          <br />
          привод: {driveUnit}
          <br />
          объем ДВС: {volume} cc
          <br />
          мощность: {power} л.с.
          <br />
          пробег: {mileage} км.
          <br />
        </div>
        <div className="cards-06-item__button-container cards-06-item__button-container_with-align">
          <button onClick={() => modalCheckPriceUpdate(true)} className="cards-06-item__button button">
            <div className="button__inner">
              <span className="button__text">Бесплатный расчет</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export { CarInfo };
