import React from 'react';

interface Props {
    children: any;
}

export default function Content(props: Props) {
    return (
        <div className='ui container'>
                <div className='ui stackable grid'>
                    {props.children}
                </div>
        </div>
    );
}
