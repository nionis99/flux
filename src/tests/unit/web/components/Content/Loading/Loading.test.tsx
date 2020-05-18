import {render} from '@testing-library/react';
import React from 'react';
import Loading from '../../../../../../web/components/Content/Loading/Loading';
import Constants from '../../../../../../Constants';

it('renders Loading without crashing', () => {
    const text = Constants.LOADING;
    const {getByText} = render(<Loading/>);
    expect(getByText(text)).toBeInTheDocument();
});
