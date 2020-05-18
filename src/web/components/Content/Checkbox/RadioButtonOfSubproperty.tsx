import React, {useEffect, useState} from 'react';
import RadioButton from "./RadioButton";

interface Props {
    title?: string;
    choices: Array<string>;
    property: string;
    subproperty: string;
    value: boolean | null;

    onClick(property: string, subproperty: string, value: boolean | null): void;
}

export default function RadioButtonOfSubproperty(props: Props) {
    const [selected, setSelected] = useState<string>();
    const {value, choices, title, property, subproperty} = props;

    useEffect(() => {
        const checkPrimaryValue = (value: boolean | null) => value === true ? setSelected(choices[0]) : ifValueFalse(value);
        const ifValueFalse = (value: boolean | null) => value === false ? setSelected(choices[1]) : setSelected('');
        checkPrimaryValue(value);
    }, [value, choices]);

    function onClick(choice: string) {
        selected === choice ? unselectAndSendNull() : selectAndSendValue(choice);
    }

    function selectAndSendValue(choice: string) {
        setSelected(choice);
        props.onClick(property, subproperty, checkIsChoicePositive(choice));
    }

    function unselectAndSendNull() {
        setSelected('');
        props.onClick(property, subproperty, null);
    }

    function checkIsChoicePositive(choice: string) {
        return choice === props.choices[0];
    }

    return (
        <RadioButton
            title={title}
            choices={choices}
            onClick={onClick}
            selected={selected}
        />
    );
}
