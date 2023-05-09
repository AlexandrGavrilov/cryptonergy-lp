import {animate} from "framer-motion";
import {useEffect, useRef} from "react";

const Counter = ({to}: any) => {
    const nodeRef = useRef<HTMLDivElement>();

    useEffect(() => {
        const node = nodeRef.current!;

        const controls = animate(0, to, {
            duration: 1,
            onUpdate(value) {
                node.textContent = value.toFixed(0);
            }
        });
        return () => controls.stop();
    }, [to]);

    return <p ref={nodeRef as any}/>
}

export default Counter;