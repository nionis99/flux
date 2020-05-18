import {render} from '@testing-library/react';
import React from 'react';
import Header from '../../../../../../web/components/Content/Header/Header';

it('renders header without crashing', () => {
    const text = 'header';
    const {getByText} = render(<Header>{text}</Header>);
    expect(getByText(text)).toBeInTheDocument();
});
