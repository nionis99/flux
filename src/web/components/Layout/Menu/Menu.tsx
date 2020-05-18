import React from 'react';
import TopMenu from './TopMenu';
import Navigation from './Navigation';
import Constants from '../../../../Constants';

interface Props {
    onSaveClick(event: MouseEvent): void;

    onHomeClick(event: MouseEvent): void;
}

export default function Menu(props: Props) {
    return (
        <div className='navigation-container'>
            <TopMenu title={Constants.TITLE}
                     onHomeClick={props.onHomeClick}
                     onSaveClick={props.onSaveClick}
            />
            <Navigation/>
        </div>
    );
}
