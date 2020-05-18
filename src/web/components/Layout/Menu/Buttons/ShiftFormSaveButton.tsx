import {Icon} from "semantic-ui-react";
import React from "react";

interface Props {
    onSaveClick(event: MouseEvent): void;
}

export function ShiftFormSaveButton(props: Props) {
    return (
        <div className='item save-button'>
            <Icon name='save'
                  data-testid='save-button'
                  colour='white'
                  className='outline save-icon'
                  onClick={props.onSaveClick}
            />
        </div>
    );
}
