// Import Engine
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

// Import Services
import { ArticleService } from "@/service/articles";
import { HeaderService } from "@/service/header";
import { WelcomeSectionService } from "@/service/welcomeSection";
import { WhyWeSectionService } from "@/service/whyWeSectionService";
import { AnyCarChoiceSetionService } from "@/service/anyCarChoiceSection";
import { FeedbackClientService } from "@/service/feedbackClientService";

// Import Components
import { BlogItems } from "@/components/blog/blog-articles";
import { Header } from "@/components/header";
import { Welcome } from "@/components/welcome";
import { Cars } from "@/components/cars";
import { Footer } from "@/components/footer";
import { Reason } from "@/components/reason";
import { Purchase } from "@/components/purchase";
import { Workflow } from "@/components/workflow";
import { ClientFeedback } from "@/components/clientFeedback";
import { Button } from "@/components/button";
import { Reviews } from "@/components/reviews";
import { Blog } from "@/components/blog";
import { ButtonBlog } from "@/components/buttonBlog";
import { Contacts } from "@/components/contacts";
import { CustomsBroker } from "@/components/customsBroker";
import { Picture } from "@/components/picture";
import { Menu } from "@/components/menu";
import { CarEvaluation } from "@/components/carEvaluation";

// Import Types
import { Article } from "@/types/articles";
import { Header as HeaderProps } from "@/types/header";
import { WelcomeSection } from "@/types/welcomeSections";
import { WhyWeSection } from "@/types/whyWeSection";
import { AnyCarChoiceSection } from "@/types/anyCarChoiceSection";
import { FeedbackClient } from "@/types/feedbackClient";
import { PurchasesCustomerSectionsService } from "@/service/purchasesCustomerSectionsService";
import { PurchasesCustomer } from "@/types/purchasesCustomerSections";
import { VideoBlogService } from "@/service/videoBlogService";
import { VideoBlog } from "@/types/videoBlog";
import { ContactsService } from "@/service/header copy";
import { Contact } from "@/types/contacts";

// Interface For Page Props
interface PageProps {
  articles: Article[];
  headerData: HeaderProps;
  welcomeSectionData: WelcomeSection;
  whyWeSectionData: WhyWeSection;
  anyCarChoiceSectionData: AnyCarChoiceSection;
  feedbackClients: FeedbackClient[];
  purchasesCustomers: PurchasesCustomer;
  videoBlogData: VideoBlog[];
  contacts: Contact;
}

// Create Page
const Page: NextPage<PageProps> = ({ articles, headerData, welcomeSectionData, whyWeSectionData, anyCarChoiceSectionData, feedbackClients, purchasesCustomers, videoBlogData, contacts }) => {
  return (
    <>
      <Head>
        <title>Vista - Автомобили с аукционов Японии</title>
        <meta name="description" content="Vista - Автомобили с аукционов Японии" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header headerData={headerData} />
      <Menu />
      <Welcome welcomeSectionData={welcomeSectionData} />
      <Cars anyCarChoiceSectionData={anyCarChoiceSectionData} />
      <Reason whyWeSectionData={whyWeSectionData} />
      <Picture />
      {/* TODO: koper0nat */}
      <CustomsBroker />
      <Purchase purchasesCustomers={purchasesCustomers} />
      <Workflow />
      <ClientFeedback feedbackClients={feedbackClients} />
      <Button />
      <Reviews />
      <Blog videoBlogData={videoBlogData} />
      <ButtonBlog />
      <Contacts contacts={contacts} />
      <CarEvaluation />
      <BlogItems variant="home" articles={articles} title="Блог" />
      <Footer />
    </>
  );
};

// Add Export For Get Static Props
export const getStaticProps: GetStaticProps = async () => {
  // Get DataBase Data
  const res = await ArticleService.getAllArticles();
  const { data: headerData } = await HeaderService.getAll();
  const { data: welcomeSectionData } = await WelcomeSectionService.getAll();
  const { data: whyWeSectionsData } = await WhyWeSectionService.getAll();
  const { data: anyCarChoiceSectionsData } = await AnyCarChoiceSetionService.getAll();
  const { data: feedbackClients } = await FeedbackClientService.getAll();
  const { data: purchasesCustomers } = await PurchasesCustomerSectionsService.getAll();
  const { data: videoBlogData } = await VideoBlogService.getAll();
  const { data: contacts } = await ContactsService.getAll();

  // Return All Props For Page
  return {
    props: {
      articles: res.data.articles,
      headerData: headerData.headers[0],
      welcomeSectionData: welcomeSectionData.welcomeSections[0],
      whyWeSectionData: whyWeSectionsData.whyWeSections[0],
      anyCarChoiceSectionData: anyCarChoiceSectionsData.anyCarChoices[0],
      feedbackClients: feedbackClients.feedbackClients,
      purchasesCustomers: purchasesCustomers.purchasesCustomers[0],
      videoBlogData: videoBlogData.videoBlogs,
      contacts: contacts.contacts[0],
    },
    revalidate: 5,
  };
};

// Export Page
export default Page;
