import { useForm } from "react-hook-form";

export interface OnSubmit {
  phone: string;
  question: string;
}

interface ComponentProps {
  title: string;
}

const QuestionManager = ({ title }: ComponentProps) => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isValid },
  } = useForm<OnSubmit>({
    mode: "onChange",
  });

  const onSubmit = async ({ phone, question }: OnSubmit) => {
    console.log(title);
    console.log("phone: ", phone);
    console.log("question: ", question);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="site-modal__form">
      <input {...register("phone", { required: true, minLength: 2, maxLength: 50 })} type="text" placeholder="Ваш телефон*" className="site-modal__input" />
      <textarea {...register("question", { required: true, minLength: 2, maxLength: 1000 })} placeholder="Ваш вопрос*" className="site-modal__input site-modal__input_large" />
      <button className="site-modal__action-btn" type="submit">
        Отправить запрос
      </button>
    </form>
  );
};

export { QuestionManager };
