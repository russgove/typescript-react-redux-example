import {
    ADD_LISTITEM,
    REMOVE_LISTITEM,
    ADD_LISTITEMS

} from '../constants';
import * as _ from 'lodash';
import ListItem from '../model/ListItem';
import { fromJS } from 'immutable';

const INITIAL_STATE  = [new ListItem('1', 'test List Item', 'jkhkj-98987-07708-979')];
// const INITIAL_STATE = fromJS({
//  lists: [],
// });

function listItemReducer(state: Array<ListItem> = INITIAL_STATE, action: any = { type: '' }): Array<ListItem> {
    switch (action.type) {

        case ADD_LISTITEM:
            let newarray = _.clone(state);
            newarray.push(action.payload.listItem);
            return newarray;

        case REMOVE_LISTITEM:
            let newArr = _.filter(state, function (o) { return o.guid !== action.payload.listItem.guid; });
            return newArr;

        case ADD_LISTITEMS:
            return _.union(state, action.payload.listItemss);

        default:
            return state;
    }
}


export default listItemReducer;
