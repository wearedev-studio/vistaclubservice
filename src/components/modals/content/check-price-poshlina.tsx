import { useForm } from "react-hook-form";

export interface OnSubmit {
  car: string;
  year: string;
  city: string;
  phone: string;
}

interface ComponentProps {
  title: string;
}

const CheckPricePoshlina = ({ title }: ComponentProps) => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isValid },
  } = useForm<OnSubmit>({
    mode: "onChange",
  });

  const onSubmit = async ({ car, city, phone, year }: OnSubmit) => {
    console.log(title);
    console.log("car: ", car);
    console.log("city: ", city);
    console.log("phone: ", phone);
    console.log("year: ", year);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="site-modal__form">
      <input {...register("car", { required: true, minLength: 2, maxLength: 50 })} type="text" placeholder="Марка и модель авто" className="site-modal__input" />
      <input {...register("year", { required: true, minLength: 2, maxLength: 50 })} type="text" placeholder="Год выпуска" className="site-modal__input" />
      <input {...register("city", { required: true, minLength: 2, maxLength: 50 })} type="text" placeholder="Город доставки" className="site-modal__input" />
      <input {...register("phone", { required: true, minLength: 2, maxLength: 50 })} type="text" placeholder="Ваш телефон*" className="site-modal__input" />
      <button className="site-modal__action-btn" type="submit">
        Отправить запрос
      </button>
    </form>
  );
};

export { CheckPricePoshlina };
