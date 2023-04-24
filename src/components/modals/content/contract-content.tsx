interface ComponentProps {
  content: React.ReactNode;
}

const ContractContent = ({ content }: ComponentProps) => {
  return <div dangerouslySetInnerHTML={{ __html: `${content}` }} className="site-modal__form site-modal__form_content">
  </div>
};

export { ContractContent };
