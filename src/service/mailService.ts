import axios from "axios";

class MailService {
  static async postCallback({ title, phone }: { title: string; phone: string }) {
    const data = await axios.post("/api/callback", {
      title,
      phone,
    });
    return data;
  }
  static async postCheckPriceJapan({ title, car, year, city, phone }: { title: string; car: string; year: string; city: string; phone: string }) {
    const data = await axios.post("/api/check-price-japan", {
      title,
      car,
      year,
      city,
      phone,
    });
    return data;
  }
  static async postCheckPrice({ title, car, year, city, phone }: { title: string; car: string; year: string; city: string; phone: string }) {
    const data = await axios.post("/api/check-price", {
      title,
      car,
      year,
      city,
      phone,
    });
    return data;
  }
  static async postCheckPriceAuto({ title, car, year, city, phone }: { title: string; car: string; year: string; city: string; phone: string }) {
    const data = await axios.post("/api/check-price-auto", {
      title,
      car,
      year,
      city,
      phone,
    });
    return data;
  }
  static async postOrder({ title, phone, question }: { title: string; phone: string; question: string }) {
    const data = await axios.post("/api/order", {
      title,
      phone,
      question,
    });
    return data;
  }
  static async postQuestionManager({ title, phone, question }: { title: string; phone: string; question: string }) {
    const data = await axios.post("/api/question-manager", {
      title,
      phone,
      question,
    });
    return data;
  }
}

export { MailService };
