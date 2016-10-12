
import {
    ADD_LIST,
    ADD_LISTS,
    REMOVE_LIST
} from '../constants';
import List from '../model/List';

export function addList(list: List) {
    return {
        type: ADD_LIST,
        payload: {
            list: list
        }
    };
}
export function removeList(list: List) {
    return {
        type: REMOVE_LIST,
        payload: {
            list: list
        }
    };
}
export function addLists(lists: List[]) {
    return {
        type: ADD_LISTS,
        payload: {
            lists: lists
        }
    };
}
