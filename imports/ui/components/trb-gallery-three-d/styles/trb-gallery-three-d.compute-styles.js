
export default function TrbGalleryThreeD_computeStyles(defaultStyles, stylesOptions, userStyles) {
    let styles = Object.assign({}, defaultStyles);
    // Overwrite styles according screen size or theme
    styles.title = {
        color: stylesOptions.theme.colors.primary
    }
    styles.container.height = stylesOptions.screenHeight
	styles.legend.color = stylesOptions.theme.colors.secondary
	styles.dragDrop.borderColor=stylesOptions.theme.colors.primary
    // Overwrite styles according to device type
    if (stylesOptions.device === "pc") {}
    if (stylesOptions.device === "smartPhone") {}

    // Overwrite styles according user provided styles
    for (var key in userStyles) {
        if (styles[key]) {
            for (var key2 in userStyles[key]) {
                console.log(userStyles[key][key2])
                styles[key][key2] = userStyles[key][key2]
            }
        }
    }
    return styles
}
