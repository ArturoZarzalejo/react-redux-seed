import { appConstants } from "../../config/constants";
import { combineReducers } from 'redux'

function lang(state = 'es', action) {
    /* sin implementar */
    switch (action.type) {
        case appConstants.CHANGE_LANGUAGE:
            return action.payload
        default:
            return state;
    }
}

function appVer(state =  '0.0.1', action) {
    /* sin implementar */
    switch (action.type) {
        default:
            return state;
    }
}

function env(state =  'dev', action) {
    /* sin implementar */
    switch (action.type) {
        default:
            return state;
    }
}

const app = combineReducers({
    lang,
    appVer,
    env
})

export default app;