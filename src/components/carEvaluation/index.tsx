import { MailService } from "@/service/mailService";
import { CheckPrice as CheckPriceProps } from "@/types/submit";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";

const CarEvaluation = () => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isValid },
  } = useForm<CheckPriceProps>({
    mode: "onChange",
  });
  const onSubmit = async ({ car, year, city, phone }: CheckPriceProps) => {
    try {
      setLoading(true);
      const data = await MailService.postCheckPrice({ title: "Получите оценку стоимости автомобиля за 15 мин!", car, year, city, phone });
      console.log(data);
      toast.success("Успешно отправлено!");
    } catch (error) {
      console.log(error);
      toast.error("Ошибка во время отправки");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="animated-section form-06 page_section_73 section section_container-width_800 animated-section_hidden animated-section_visible">
      <div className="form-06__inner section__content">
        <div className="section__header section__header_align_center wysiwyg-string">
          <div>Получите оценку стоимости автомобиля за 15 мин!</div>
        </div>
        <div className="form-06__content">
          <div>
            <div className="form-06__form">
              <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="form__item">
                  <div className="form__input">
                    <input className="text-input" {...register("phone", { required: true, minLength: 2, maxLength: 50 })} placeholder="Ваш телефон" type="text" />
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__input">
                    <input className="text-input" {...register("car", { required: true, minLength: 2, maxLength: 50 })} placeholder="Марка и модель авто" type="text" />
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__input">
                    <input className="text-input" {...register("year", { required: true, minLength: 2, maxLength: 50 })} placeholder="Год выпуска" type="text" />
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__input">
                    <input className="text-input" {...register("city", { required: true, minLength: 2, maxLength: 50 })} placeholder="Город доставки" type="text" />
                  </div>
                </div>
                <div className="form__submit">
                  <button disabled={loading} className=" button button_style_1 button_visual-css button_has-shadow-hover" type="submit">
                    <div className="button__inner">
                      <span className="button__text ng-binding">Отправить</span>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* TOOD: Show if confirm */}
          {/* <div className="form-06__success ng-hide" ng-show="fc[('form' + 73)].success">
Спасибо! Ваше сообщение получено
</div> */}
        </div>
      </div>
    </div>
  );
};
export { CarEvaluation };
