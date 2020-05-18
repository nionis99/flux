import React, {useEffect, useState} from 'react';
import RadioButton from "./RadioButton";

interface Props {
    title?: string;
    choices: Array<string>;
    property: string;
    value: string;
    enums: any

    onClick(property: string, value: string): void;
}

export default function RadioButtonOfSubproperty(props: Props) {
    const [selected, setSelected] = useState<string>();
    const {title, choices, property, enums, value} = props;

    useEffect(() => {
        const getKeyByValue = (object: any, value: string) => Object.keys(object).find(key => object[key] === value);
        setSelected(getKeyByValue(enums, value));
    }, [value, enums]);

    function onClick(choice: string) {
        selected === choice ? unselectAndSendNull() : selectAndSendValue(choice);
    }

    function unselectAndSendNull() {
        setSelected('');
        props.onClick(property, '');
    }

    function selectAndSendValue(choice: string) {
        setSelected(choice);
        props.onClick(property, enums[choice]);
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
