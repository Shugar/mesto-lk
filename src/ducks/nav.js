import {store, PAGE_HOME, PAGE_CONTACTS, PAGE_GALLERY} from 'index';
import {getCatByName} from 'store/fixtures';

export const PAGE_OPEN        = 'app/nav/PAGE_OPEN';
export const MENU_OPEN        = 'app/nav/MENU_OPEN';
export const MENU_CLOSE       = 'app/nav/MENU_CLOSE';

export const ON_LOAD          = 'app/nav/ON_LOAD';


export function pageOpen(to, from, next) {
  return dispatch => {
    dispatch({
      type: PAGE_OPEN,
      to,
      from
    });
    
    next();
  };
}

export function menuOpen() {
  return {
    type: MENU_OPEN
  };
}
export function menuClose() {
  return {
    type: MENU_CLOSE
  };
}

export function onLoad(progress) {
  return {
    type: ON_LOAD,
    progress
  };
}

const initialState = {
  pageCurrent: PAGE_HOME,
  pagePrev: PAGE_HOME,
  
  loadProgress: 0,
  
  menuOpened: true,
  menuFixed: true
};


export default function navReducer(state = initialState, action) {
  switch (action.type) {
    case PAGE_OPEN:
      let menuOpened = false;
      let loadProgress = 0;
      
      let pagePrev = action.from.name ? action.from.name : state.pagePrev;
      
      return {
        ...state,
        pageCurrent: action.to.name,
        pagePrev,
        loadProgress,
        menuOpened,
        menuFixed: menuOpened,
        menuRightOpened: false
      };
  
    case MENU_OPEN:
      return {...state, menuOpened: true, menuRightOpened: false};
      
    case MENU_CLOSE:
      return {...state, menuOpened: false};
      
    case ON_LOAD:
      if (action.progress > state.loadProgress)
        return {...state, loadProgress: action.progress};
      else
        return state;
      
    default:
      return state;
  }
}
