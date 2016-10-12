import { Map } from 'immutable';

import fireAction from '../../test-utils/fire-action';
import List from '../model/list';
import listReducer from './list';

import {
    ADD_LIST,
    ADD_LISTS,
    REMOVE_LIST
} from '../constants';

let state = listReducer();

describe('list reducer', () => {
    describe('inital state', () => {
        it('should be a and array oof lists', () => {
            expect(state.length === 0).toBe(true);
        });
    });

    describe('on ADD_LIST', () => {
        it('should increment list.contt', () => {
            const previousValue = state.length;
            let list = new List();
            state = fireAction(listReducer, state, ADD_LIST, { list: list });
            expect(state.length).toBe(previousValue + 1);
        });
    });


});

