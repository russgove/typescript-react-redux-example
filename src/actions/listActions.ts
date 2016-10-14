
import {
    ADD_LIST,
    ADD_LISTS,
    REMOVE_LIST,
    ADD_LISTITEM,
    ADD_LISTITEMS,
    REMOVE_LISTITEM,
    GET_LISTITEMS

} from '../constants';
import 'whatwg-fetch';
import List from '../model/List';
import ListItem from '../model/ListItem';

export function addList(list: List) {
    debugger;
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
export function addListItem(listItem: ListItem) {
    debugger;
    return {
        type: ADD_LISTITEM,
        payload: {
            listItem: listItem
        }
    };
}
export function removeListItem(listItem: ListItem) {
    return {
        type: REMOVE_LISTITEM,
        payload: {
            listItem: listItem
        }
    };
}
export function addListItems(listItems: ListItem[]) {
    return {
        type: ADD_LISTITEMS,
        payload: {
            listItems: listItems
        }
    };
}
export function getListItems():any {
  return  function (dispatch: any): Promise<any> {
    return fetch('http://tronet.global.tronox.com/_vti_bin/listdata.svc/GoCodes')
        .then(response => response.json())
        .then(json => dispatch(gotListItems(json)));

}
}
export function getListItemss(dispatch: any): Promise<any> {
    return fetch('http://tronet.global.tronox.com/_vti_bin/listdata.svc/GoCodes')
        .then(response => response.json())
        .then(json => dispatch(gotListItems(json)));

}
export function gotListItems(items) {
    debugger;

}