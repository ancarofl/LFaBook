import { isString } from "../../util/Helpers";

export const getDescription = (description) => {
    if (isBookDescriptionString(description)) {
        return description;
    }
    else {
        const descriptionValue = getDescriptionObjectValue(description);
        if (isBookDescriptionString(descriptionValue)) {
            return descriptionValue;
        }
    }
    return null;
}

const getDescriptionObjectValue = (description) => {
    return description?.value;
}

const isBookDescriptionString = (description) => {
    return isString(description);
}
