import React, {useEffect, useState} from 'react';
import {Checkbox} from 'semantic-ui-react';

interface Props {
    title: string;
    property: string;
    value: boolean;

    onClick(property: string, isActive?: boolean): void;
}

export default function CheckboxOfProperty(props: Props) {
    const [isActive, setIsActive] = useState<boolean>();
    const {value, property} = props;

    useEffect(() => setIsActive(value), [value]);

    function onClick() {
        setIsActive(!isActive);
        props.onClick(property, !isActive);
    }

    return (
        <div className={`ui checkbox-button ${isActive ? 'checked' : ''}`}
             onClick={onClick}>
            <Checkbox
                label={{children: props.title}}
                checked={isActive}
            />
        </div>
    );
}
