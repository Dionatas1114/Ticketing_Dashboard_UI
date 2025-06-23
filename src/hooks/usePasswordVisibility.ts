import { useReducer } from 'react';

type State = {
  showPassword: boolean;
};

type Action = {
  type: 'TOGGLE_PASSWORD_VISIBILITY';
};

const reducer = (state: State, action: Action): State => {
  const handlers: Record<Action['type'], () => State> = {
    TOGGLE_PASSWORD_VISIBILITY: () => ({
      ...state,
      showPassword: !state.showPassword,
    }),
  };

  const handler = handlers[action.type];

  if (!handler) throw new Error(`Unhandled action type: ${action.type}`);

  return handler();
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
