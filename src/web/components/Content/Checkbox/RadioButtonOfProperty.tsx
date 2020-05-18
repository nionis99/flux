import React, {useEffect, useState} from 'react';
import RadioButton from "./RadioButton";

interface Props {
    title?: string;
    choices: Array<string>;
    property: string;
    value: boolean | null;

    onClick(property: string, value: boolean | null): void;
}

export default function RadioButtonOfProperty(props: Props) {
    const [selected, setSelected] = useState<string>();
    const {value, choices, title, property} = props;

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
        props.onClick(property, checkIsChoicePositive(choice));
    }

    function unselectAndSendNull() {
        setSelected('');
        props.onClick(property, null);
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
