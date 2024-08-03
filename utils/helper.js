String.prototype.firstLetterCapital = function () {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

export const findObjectBySlug = (obj, slug) => {
    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            if (obj[key].slug === slug) {
                return obj[key];
            }
        }
    }
    return null;
};

