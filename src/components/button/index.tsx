import { modalOrderUpdate } from "@/pullstate";

const Button = () => {
  return (
    <div className="page-section">
      <div className="button-01 page_section_58 section section_container-width_1200">
        <div className="button-01__inner section__content">
          <div className="button-01__content">
            <button onClick={() => modalOrderUpdate(true)} className="button-01__item button button_style_1 button_visual-css button_has-shadow-hover">
              <div className="button__inner">
                <span className="button__text">Оставить заявку</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Button };
