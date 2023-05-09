import {ActionMeta, SingleValue} from "react-select";
import {options} from "@/components/Calculator/constants";

export interface ISelectProps {
    onChange(value: typeof options[0], meta: ActionMeta<number>): void;
    value:  typeof options[0];
}