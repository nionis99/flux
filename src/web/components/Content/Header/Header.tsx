import React from 'react';

interface Props {
    children: any;
}

export default function Header(props: Props) {
    return (
        <div className='section-header fluid'>
            <div className="ui container content">
                {props.children}
            </div>
        </div>
    );
}














