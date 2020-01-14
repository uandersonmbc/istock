import { createStore, Store } from "redux";

import reducers from "./ducks";
import { NavigationState } from "./ducks/navigation/types";

export interface ApplicationState {
    navigation: NavigationState
}

const store: Store<ApplicationState> = createStore(reducers);

export default store;
