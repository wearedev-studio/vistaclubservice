import { modalQuestionManagerUpdate } from "@/pullstate";
import { CarInfo } from "./carInfo";

const Purchase = () => {
  return (
    <>
      <div className="cards-06 page_section_45 section section_container-width_1200">
        <div className="cards-06__inner section__content">
          <div className="section__header section__header_align_center wysiwyg-string">
            <h2>Покупки наших клиентов</h2>
          </div>
          <div className="section__subheader section__subheader_align_center wysiwyg-string">За 8 лет работы мы купили и привезли более 4 500 единиц техники!</div>

          <div
            className="cards-06-list flexible-list flexible-list_columns_4 flexible-list_justify-content_center flexible-list_mobile-columns_1"
            same-height-elements='{itemsSelector: ".cards-06-item", elementSelector: ".cards-06-item__title_with-align"}'
          >
            <CarInfo
              imgPath="./images/007/499/179/7499179/610x458crop/SubaruForester.jpg"
              name="Subaru Forester Hybrid"
              price="1 800 000"
              year="2019"
              driveUnit="4WD"
              volume="2 000"
              power="145"
              mileage="17 000"
            />
            <CarInfo
              imgPath="./images/007/499/162/7499162/610x458crop/BMWX6xDrive40i.jpg"
              name="BMW X6 xDrive40i"
              price="6 965 000"
              year="2021"
              driveUnit="4WD"
              volume="3 000"
              power="340"
              mileage="4 000"
            />
            <CarInfo
              imgPath="./images/007/499/170/7499170/610x458crop/HondaFitHybrid.jpg"
              name="Honda Fit Hybrid"
              price="800 000"
              year="2018"
              driveUnit="4WD"
              volume="1 500"
              power="110"
              mileage="77 000"
            />
            <CarInfo
              imgPath="./images/007/499/174/7499174/610x458crop/hyundaiXcient520.jpg"
              name="Hyundai Xcient 520"
              price="3 843 000"
              year="2014"
              driveUnit="8x4"
              volume="12 300"
              power="410"
              mileage="153 000"
            />
            <CarInfo
              imgPath="./images/007/499/167/7499167/610x458crop/ChanganUni-t1.5Texcellentmodel.jpg"
              name="Changan Uni-t 1.5T excellent model"
              price="1 800 000"
              year="2023"
              driveUnit="задний"
              volume="2 000"
              power="233"
              mileage="0"
            />
            <CarInfo
              imgPath="./images/007/499/161/7499161/610x458crop/MercedesBenzGLC350e4matic.jpg"
              name="Mercedes-Benz GLC 350e 4matic"
              price="3 576 000"
              year="2018"
              driveUnit="4WD"
              volume="2 000"
              power="210"
              mileage="28 000"
            />
            <CarInfo
              imgPath="./images/007/499/163/7499163/610x458crop/MercedesBenzSclass500eLong.jpg"
              name="Mercedes-Benz S-Класс 500e Long"
              price="3 565 000"
              year="2016"
              driveUnit="4WD"
              volume="3 000"
              power="367"
              mileage="15 000"
            />
            <CarInfo imgPath="./images/007/499/164/7499164/610x458crop/GenesisGV80.jpg" name="Genesis GV80" price="4 556 000" year="2021" driveUnit="4WD" volume="3 500" power="380" mileage="10 000" />
            <CarInfo
              imgPath="./images/007/499/173/7499173/610x458crop/ToyotaRAV4.jpg"
              name="Toyota RAV4 Hybrid"
              price="2 200 000"
              year="2019"
              driveUnit="4WD"
              volume="2 500"
              power="177"
              mileage="28 000"
            />
            <CarInfo
              imgPath="./images/007/499/166/7499166/610x458crop/ChanganUNIVexcellentmodel.jpg"
              name="Changan UNI-V excellent mode"
              price="1 800 000"
              year="2023"
              driveUnit="передний"
              volume="1 500"
              power="188"
              mileage="0"
            />
            <CarInfo
              imgPath="./images/007/499/165/7499165/610x458crop/HyundaiSantaFeHybrid.jpg"
              name="Hyundai Santa Fe Hybrid"
              price="2 096 000"
              year="2021"
              driveUnit="4WD"
              volume="1 600"
              power="180"
              mileage="9 700"
            />
            <CarInfo
              imgPath="./images/007/499/178/7499178/610x458crop/HyundaiMegaTruck.jpg"
              name="Hyundai Mega Truck"
              price="4 575 000"
              year="2007"
              driveUnit="6x4"
              volume="12 300"
              power="380"
              mileage="144 000"
            />
          </div>
        </div>
      </div>
      <div className="animated-section button-02 page_section_48 section section_container-width_1200">
        <div className="button-02__inner section__content">
          <div className="button-02__content button-02__content_center">
            <button onClick={() => modalQuestionManagerUpdate(true)} className="button-02__item button-02__item_1 button button_style_1 button_visual-css button_has-shadow-hover">
              <div className="button__inner">
                <span className="button__text">Задать вопрос менеджеру</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export { Purchase };
