/**
 * all actions have a 'payload' dictionary.
 * some actions may have a 'meta' dictionary.
 */

export const STATUS_IN_PROGRESS = 'IN_PROGRESS';
export const STATUS_SUCCESS = 'SUCCESS';

export const FETCH_MACHINES = 'FETCH_MACHINES';

export const FETCH_IMAGES = 'FETCH_IMAGES';

export const fetchMachinesSuccess = (machines) => {
    return {
        type: FETCH_MACHINES,
        status: STATUS_SUCCESS,
        payload: { machines: machines },
    };
};

export const fetchImagesSuccess = (images) => {
    return {
        type: FETCH_IMAGES,
        status: STATUS_SUCCESS,
        payload: { images: images },
    };
};
