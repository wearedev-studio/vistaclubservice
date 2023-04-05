import { MailService } from "@/service/mailService";
import { QuestionManager as QuestionManagerProps } from "@/types/submit";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";

interface ComponentProps {
  title: string;
}

const QuestionManager = ({ title }: ComponentProps) => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isValid },
  } = useForm<QuestionManagerProps>({
    mode: "onChange",
  });

  const onSubmit = async ({ phone, question }: QuestionManagerProps) => {
    try {
      setLoading(true);
      const data = await MailService.postQuestionManager({ title, phone, question });
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
    <form onSubmit={handleSubmit(onSubmit)} className="site-modal__form">
      <input {...register("phone", { required: true, minLength: 2, maxLength: 50 })} type="text" placeholder="Ваш телефон*" className="site-modal__input" />
      <textarea {...register("question", { required: true, minLength: 2, maxLength: 1000 })} placeholder="Ваш вопрос*" className="site-modal__input site-modal__input_large" />
      <button disabled={loading} className="site-modal__action-btn" type="submit">
        Отправить запрос
      </button>
    </form>
  );
};

export { QuestionManager };
