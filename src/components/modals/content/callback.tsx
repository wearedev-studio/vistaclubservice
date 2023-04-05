import { MailService } from "@/service/mailService";
import { Callback as CallbackProps } from "@/types/submit";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";

interface ComponentProps {
  title: string;
}

const Callback = ({ title }: ComponentProps) => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isValid },
  } = useForm<CallbackProps>({
    mode: "onChange",
  });

  const onSubmit = async ({ phone }: CallbackProps) => {
    try {
      setLoading(true);
      const data = await MailService.postCallback({ title, phone });
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
      <button disabled={loading} className="site-modal__action-btn" type="submit">
        Заказать звонок
      </button>
    </form>
  );
};

export { Callback };
