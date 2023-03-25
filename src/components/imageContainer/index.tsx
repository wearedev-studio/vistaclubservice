interface IProps {
  background?: boolean;
  pathImg: string;
  mainClass: string;
  children?: React.ReactElement;
}

const ImageContainer = ({ background, pathImg, mainClass, children }: IProps) => {
    return (
        <div className={ mainClass } id="">
            <div className="section__background-image-container">
              <div className="section__background-image" style={{ backgroundImage: `url(${pathImg})` }} lazy-background=''></div>
            </div>
            {background ? <div className="section__background-mask" /> : null}
            {children || null}
        </div>
    )
}

export { ImageContainer };
