import {FETCH_IMAGES} from '../actionTypes';

const initialImages = {
    isFetching: false,
    items: [],
};

export default (images = initialImages, action) => {
    switch(action.type) {
    case FETCH_IMAGES:
        return Object.assign({}, images, {
            items: action.payload.images,
        });
    default:
        return images;
    }
};
