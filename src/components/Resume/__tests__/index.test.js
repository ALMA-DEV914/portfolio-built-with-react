import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Resume from '..';

afterEach(cleanup);

describe('About component', () => {
    //renders About test
    it('renders', () => {
        render(<Resume />);
    });
    it('matches snapshot DOM node structure', () => {
        const {asFragment} = render(<Resume />);
        expect(asFragment()).toMatchSnapshot();
    });
})
