import {Form, FormTextArea} from 'semantic-ui-react';
import React, {FormEvent, Fragment, useEffect, useState} from 'react';


interface Props {
    title: string;
    property: string;
    value: string;

    onChange(property: string, value?: string): void;
}

export function Textbox(props: Props) {
    const {property} = props;
    const [value, setValue] = useState<string>();

    useEffect(() => setValue(props.value ?? ''), [props.value]);

    function onChange(event: FormEvent<HTMLTextAreaElement>) {
        setValue(event.currentTarget.value);
        props.onChange(property, event.currentTarget.value);
    }

    return (
        <Fragment>
            <Form className='sixteen wide column'>
                <FormTextArea label={props.title} onChange={onChange} value={value}/>
            </Form>
        </Fragment>
    );
}
