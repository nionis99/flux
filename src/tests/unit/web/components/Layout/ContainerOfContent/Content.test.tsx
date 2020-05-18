import {render} from '@testing-library/react';
import React from 'react';
import Content from '../../../../../../web/components/Layout/ContainerOfContent/Content';

it('renders Content without crashing', () => {
    const content = 'Test';
    const {getByText} = render(<Content>{content}</Content>);
    expect(getByText(content)).toBeInTheDocument();
});
