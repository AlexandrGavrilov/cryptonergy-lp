import { FC } from "react";

import { SWrapper } from './style';
import { IImageProps } from "@/components/Image/types";
import {images} from "@/components/Image/images";
import {MotionProps} from "framer-motion";

const ImageComp: FC<MotionProps & IImageProps> = ({ size = 'auto', name, ...rest }) => {
    return (
        <SWrapper {...rest} size={size}>
           <img alt={name} src={images[name]}/>
        </SWrapper>
    );
}


export default ImageComp;