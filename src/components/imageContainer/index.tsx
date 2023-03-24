interface IProps {
    background?: boolean;
    pathImg: string;
    mainClass: string;
    children?: React.ReactElement;
}

const ImageContainer = ({ background, pathImg, mainClass, children }: IProps) => {
    return (
        <div class={ mainClass } id="">
            <div class="section__background-image-container">
              <div class="section__background-image" style={{ backgroundImage: `url(${pathImg})` }} lazy-background></div>
            </div>
            {background ? <div class="section__background-mask" /> : null}
            {children || null}
        </div>
    )
}

export { ImageContainer }
