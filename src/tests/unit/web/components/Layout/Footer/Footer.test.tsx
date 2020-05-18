import {render} from '@testing-library/react';
import React from 'react';
import Footer from '../../../../../../web/components/Layout/Footer/Footer';

it('renders Footer without crashing', () => {
    const version = 'v1';
    const {getByText} = render(<Footer version={version}/>);
    expect(getByText(version)).toBeInTheDocument();
});
