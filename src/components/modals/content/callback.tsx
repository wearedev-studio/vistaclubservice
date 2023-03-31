import { useForm } from "react-hook-form";

export interface OnSubmit {
  phone: string;
}

interface ComponentProps {
  title: string;
}

const Callback = ({ title }: ComponentProps) => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isValid },
  } = useForm<OnSubmit>({
    mode: "onChange",
  });

  const onSubmit = async ({ phone }: OnSubmit) => {
    console.log(title);
    console.log("phone: ", phone);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="site-modal__form">
      <input {...register("phone", { required: true, minLength: 2, maxLength: 50 })} type="text" placeholder="Ваш телефон*" className="site-modal__input" />
      <button className="site-modal__action-btn" type="submit">
        Заказать звонок
      </button>
    </form>
  );
};

export { Callback };
