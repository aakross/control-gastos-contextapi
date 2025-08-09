//Primero hay que crear un provider, provider es de donde vienen los datos y en este caso los datos vendran del reducer
import {
  useReducer,
  createContext,
  type Dispatch,
  type ReactNode,
} from "react";
import {
  budgetReducer,
  initialState,
  type BudgetActions,
  type BudgetState,
} from "../reducers/budget-reducer";

type BudgetContextProps = {
  state: BudgetState;
  dispatch: Dispatch<BudgetActions>;
};

type BudgetProviderProps = {
  children: ReactNode;
};

export const BudgetContext = createContext<BudgetContextProps>(null!);

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  return (
    <BudgetContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
