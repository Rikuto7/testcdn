console.log("ファイル自体は読み込めてます")

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
    if (inventory < 5) {
        return displayType.HIDDEN;
    }
    if (tags.includes("お試しボタン")) {
        return displayType.BUTTON;
    }
    if (category === "お試しトグル") {
        return displayType.TOGGLE;
    }
    if (custom_attribute1 === "お試しボタン") {
        return displayType.BUTTON;
    }
    if (custom_attributes_2 === "お試しトグル") {
        return displayType.TOGGLE;
    }
    return displayType.HIDDEN;
}