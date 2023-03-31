import { modalCheckPriceUpdate, modalQuestionManagerUpdate } from "@/pullstate";

const Welcome = () => (
  <div className="page_section_9 promo-05 section section_container-width_1200">
    <div className="section__background-image-container">
      <div
        className="section__background-image"
        style={{
          // backgroundImage: "url(./images/008/photo_2023-03-28_16-01-53.jpg)",
          // backgroundImage: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(../Image/bg.jpg);
          // backgroundImage: "url(./images/008/photo_2023-03-28_16-01-53.jpg)",
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(./images/008/photo_2023-03-28_16-01-53.jpg)",
        }}
      />
    </div>
    <div className="section__background-mask" />
    <div className="promo-05__inner section__content">
      <div className="promo-05-content">
        <div className="promo-05-content__title wysiwyg-string">
          <h1>
            <strong>Автомобили и спецтехника</strong>
            <br />
            <strong>с аукционов Японии,</strong>
            <br />
            <strong>стоянок Кореи, Китая и ОАЭ!</strong>
            <br />
            Подберем, купим,&nbsp;растаможим
            <br />и доставить до вас!
          </h1>
        </div>
        <div className="promo-05-content__text wysiwyg-string">
          ✓ Фиксируем цену и сроки в договоре;
          <br />
          <strong>✓</strong> Страхуем автомобиль на всех этапах транспортировки;
          <br />✓ Бесплатно оценим стоимость покупки и доставки автомобиля до вашего города!
        </div>
        <div className="promo-05-content__btns-container">
          <button onClick={() => modalCheckPriceUpdate(true)} className="promo-05-content__btn-1 button button_style_1 button_visual-css button_has-shadow-hover">
            <div className="button__inner">
              <span className="button__text">Узнать стоимость</span>
            </div>
          </button>
          <button onClick={() => modalQuestionManagerUpdate(true)} className="promo-05-content__btn-2 button button_style_2 button_visual-css button_has-shadow-hover">
            <div className="button__inner">
              <span className="button__text">Задать вопрос менеджеру</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export { Welcome };
