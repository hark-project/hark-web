import {FETCH_MACHINES} from '../actionTypes';
import {STATUS_SUCCESS, STATUS_IN_PROGRESS} from '../actionTypes';

const initialMachines = {
    isFetching: false,
    items: [],
};

const fetchMachinesReducer = (machines, action) => {
    switch(action.status) {
    case STATUS_IN_PROGRESS:
        return Object.assign({}, machines, {
            isFetching: true,
        });
    case STATUS_SUCCESS:
        return Object.assign({}, machines, {
            isFetching: false,
            items: action.payload.machines,
        });
    default:
        return machines;
    }
};


export default (machines = initialMachines, action) => {
    switch(action.type) {
    case FETCH_MACHINES:
        return fetchMachinesReducer(machines, action);
    default:
        return machines;
    }
};
