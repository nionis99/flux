import React, {FormEvent, useEffect, useState} from 'react';


interface Props {
    title: string;
    property: string;
    value: string;

    onChange(property: string, value?: string): void;
}

export function SingleInput(props: Props) {
    const {title, property} = props;
    const [value, setValue] = useState<string>('');

    useEffect(() => setValue(props.value ?? ''), [props.value]);

    function onChange(event: FormEvent<HTMLInputElement>) {
        setValue(event.currentTarget.value);
        props.onChange(property, event.currentTarget.value);
    }

    return (
        <div className='input-inline input-view'>
            <label>
                <div className="ui input-header title">
                    {title}
                </div>
                <input className="input editable input-view" onChange={onChange} value={value}/>
            </label>
        </div>
    );
}
