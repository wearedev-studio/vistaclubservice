interface IProps {
  background?: boolean;
  pathImg: string;
  mainClass: string;
  children?: React.ReactElement;
}

const ImageContainer = ({ background, pathImg, mainClass, children }: IProps) => {
  return (
    <div className={mainClass}>
      <div className="section__background-image-container">
        <div className="section__background-image" style={{ backgroundImage: `url(${pathImg})` }}></div>
      </div>
      {background ? <div className="section__background-mask" /> : null}
      <>{children}</>
    </div>
  );
};

export { ImageContainer };
