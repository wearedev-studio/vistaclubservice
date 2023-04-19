interface ComponentProps {
  content: React.ReactNode;
}

const ContractContent = ({ content }: ComponentProps) => {
  console.log(content);
  
  return <div className="site-modal__form site-modal__form_content">
    {content}
  </div>
};

export { ContractContent };
