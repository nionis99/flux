import React from 'react';

interface Props {
    version: string;
}

function Footer(props: Props) {
    return (
        <div className={'footer'}>
            <p>
                <span>{props.version}</span>
            </p>
        </div>
    );
}

export default Footer;
