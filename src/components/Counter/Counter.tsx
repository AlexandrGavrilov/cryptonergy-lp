import {animate} from "framer-motion";
import {useEffect, useRef} from "react";

const Counter = ({ from = 0, to, fractionDigits = 0}: any) => {
    const nodeRef = useRef<HTMLDivElement>();

    useEffect(() => {
        const node = nodeRef.current!;

        const controls = animate(from, to, {
            duration: 1,
            onUpdate(value) {
                node.textContent = value.toFixed(fractionDigits);
            }
        });
        return () => controls.stop();
    }, [to]);

    return <p ref={nodeRef as any}/>
}

export default Counter;