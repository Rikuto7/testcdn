const displayType = {
    BUTTON: "button",
    TOGGLE: "toggle",
    HIDDEN: "hidden",
}

const evaluateDisplayType = (
    inventory,
    tags,
    category,
    custom_attribute1,
    custom_attributes_2
) => {
    if (inventory < 1) {
        return displayType.HIDDEN;
    } else {
        return displayType.BUTTON;
    }
}