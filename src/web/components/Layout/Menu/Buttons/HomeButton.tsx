import {Icon} from "semantic-ui-react";
import React from "react";

interface Props {
    onHomeClick(event: MouseEvent): void;
}

export function HomeButton(props: Props) {
    return (
        <div className='item'>
            <Icon name='home'
                  data-testid='home-button'
                  colour='white'
                  onClick={props.onHomeClick}
            />
        </div>
    );
}
