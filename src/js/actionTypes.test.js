/* global describe, test, expect */
import * as ActionTypes from './actionTypes';

describe('machine actions', () => {
    test('create an action to update machines', () => {
        let machines = [
            {a: 1},
            {a: 2},
        ];
        let action = ActionTypes.fetchMachinesSuccess(machines);

        expect(action.type).toEqual(ActionTypes.FETCH_MACHINES);
        expect(action.status).toEqual(ActionTypes.STATUS_SUCCESS);
        expect(action.payload).toEqual({machines: machines});
    });
});

describe('image actions', () => {
    test('create an action to update images', () => {
        let images = [
            {c: 7},
            {d: 9},
        ];

        let action = ActionTypes.fetchImagesSuccess(images);

        expect(action.type).toEqual(ActionTypes.FETCH_IMAGES);
        expect(action.status).toEqual(ActionTypes.STATUS_SUCCESS);
        expect(action.payload).toEqual({images: images});

    });
});
