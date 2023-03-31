import { GrClose } from 'react-icons/gr';

interface RootModalProps {
  active: boolean;
  title: string;
  children: JSX.Element[] | JSX.Element;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const RootModal = ({ active, title, children, onClose }: RootModalProps) => {
  return (
    <div className={!active ? "site-modal" : "site-modal active"}>
      <div className="site-modal__container">
        <button onClick={onClose} className="site-modal__close-btn">
          <GrClose color='#fff' stroke='#fff' className="site-modal__close-icon" />
        </button>
        <p className="site-modal__title">{title}</p>
        {children}
      </div>
    </div>
  );
};

export { RootModal };
