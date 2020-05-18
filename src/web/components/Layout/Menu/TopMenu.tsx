import React from 'react';
import {ShiftFormSaveButton} from './Buttons/ShiftFormSaveButton';
import {HomeButton} from "./Buttons/HomeButton";

interface Props {
    onSaveClick(event: MouseEvent): void;

    onHomeClick(event: MouseEvent): void;

    title: string;
}

export default function TopMenu(props: Props) {
    return (
        <div className='top-navigation ui mini labeled icon menu'>
            <HomeButton onHomeClick={props.onHomeClick}/>
            <div className='title'>
                {props.title}
            </div>
            <div className='right menu'>
                <ShiftFormSaveButton onSaveClick={props.onSaveClick}/>
            </div>
        </div>
    );
}

