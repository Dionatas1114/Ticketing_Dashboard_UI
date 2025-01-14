import { useReducer } from 'react';

interface State {
  showPassword: boolean;
}

interface Action {
  type: 'TOGGLE_PASSWORD_VISIBILITY';
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'TOGGLE_PASSWORD_VISIBILITY':
      return { ...state, showPassword: !state.showPassword };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const usePasswordVisibility = () => {
  const [state, dispatch] = useReducer(reducer, { showPassword: false });

  const togglePasswordVisibility = () => dispatch({ type: 'TOGGLE_PASSWORD_VISIBILITY' });

  return {
    showPassword: state.showPassword,
    togglePasswordVisibility,
  };
};

export default usePasswordVisibility;
