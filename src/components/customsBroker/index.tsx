import { modalQuestionManagerUpdate } from "@/pullstate";

const CustomsBroker = () => {
  return (
    <div className="page_section_22 promo-05 section section_container-width_1200">
      <div className="section__background-image-container">
        {/* TODO: добавить другое изображение */}
        {/* <div className="section__background-image" style={{ backgroundImage: "url(./images/006/040/093/6040093/1920xnoinc/kupit-avtomobil-iz-yaponii.jpg)" }} lazy-background=""></div> */}
      </div>
      <div className="promo-05__inner section__content">
        <div className="promo-05-content">
          <div className="promo-05-content__title wysiwyg-string">
            <div>
              Таможенный брокер
              <br />
              с опытом работы 15 лет
              <br />в штате НАЗВАНИЕ САЙТА!
            </div>
          </div>
          <div className="promo-05-content__text wysiwyg-string">
            <strong>Мы гарантируем нашим клиентам:</strong>
            <br />
            <strong>1.</strong> Прохождение таможни без препятствий;
            <br />
            <strong>2. </strong>Работу без посредников и скрытых платежей;
            <br />
            <strong>3. </strong>Соответствие автомобиля заявленному состоянию.
            <br />
            <br />
          </div>
          <div className="promo-05-content__btns-container">
            <button onClick={() => modalQuestionManagerUpdate(true)} className="promo-05-content__btn-1 button button_style_1 button_visual-css button_has-shadow-hover">
              <div className="button__inner">
                <span className="button__text">Задать вопрос менеджеру</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export { CustomsBroker };
