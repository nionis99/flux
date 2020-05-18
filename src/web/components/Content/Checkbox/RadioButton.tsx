import React, {Fragment} from "react";

interface Props {
    title?: string;
    choices: Array<string>;
    selected?: string;

    onClick(choice: string): void;
}

export default function RadioButton(props: Props) {
    const {title, choices, onClick, selected} = props;

    return (
        <Fragment>
            {title ? <div className='container'><p className='title'>{title}</p></div> : null}
            <div className='ui basic buttons'>
                {choices.map((choice, index) =>
                    <div key={index} className={`ui button ${selected === choice ? 'active' : ''}`}
                         onClick={() => onClick(choice)}>
                        <i className={`${selected === choice ? 'dot' : ''} circle outline icon`}/>
                        {choice}
                    </div>
                )}
            </div>
        </Fragment>
    );
}
