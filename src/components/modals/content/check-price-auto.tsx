import { AppStore } from "@/pullstate";
import { MailService } from "@/service/mailService";
import { CheckPriceAuto as CheckPriceAutoProps } from "@/types/submit";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";

const CheckPriceAuto = () => {
  const { modalCheckPriceAutoTitle } = AppStore.useState((store) => store);
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isValid },
  } = useForm<CheckPriceAutoProps>({
    mode: "onChange",
  });

  const onSubmit = async ({ car, city, phone, year }: CheckPriceAutoProps) => {
    try {
      setLoading(true);
      const data = await MailService.postCheckPrice({ title: modalCheckPriceAutoTitle, car, year, city, phone });
      console.log(data);
      toast.success("Успешно отправлено!");
    } catch (error) {
      toast.error("Ошибка во время отправки");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="site-modal__form">
      <input {...register("car", { required: true, minLength: 2, maxLength: 50 })} type="text" placeholder="Марка и модель авто" className="site-modal__input" />
      <input {...register("year", { required: true, minLength: 2, maxLength: 50 })} type="text" placeholder="Год выпуска" className="site-modal__input" />
      <input {...register("city", { required: true, minLength: 2, maxLength: 50 })} type="text" placeholder="Город доставки" className="site-modal__input" />
      <input {...register("phone", { required: true, minLength: 2, maxLength: 50 })} type="text" placeholder="Ваш телефон*" className="site-modal__input" />
      <button disabled={loading} className="site-modal__action-btn" type="submit">
        Отправить запрос
      </button>
    </form>
  );
};

export { CheckPriceAuto };
