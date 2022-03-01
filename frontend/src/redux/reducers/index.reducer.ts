import { IAction } from '../types/index.types';

const INITIAL_STATE = {
  name: '',
};

const IndexReducer = (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, name: action.payload };
  }
};

export default IndexReducer;
