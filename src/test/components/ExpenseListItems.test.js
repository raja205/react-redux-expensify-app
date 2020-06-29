import React from 'react';
import { Link } from 'react-router-dom';
import {shallow} from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

test('should render expense list items correctly',()=>{
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})
