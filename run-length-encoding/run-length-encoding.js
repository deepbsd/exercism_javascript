
export const decode = (text) => {
    return text.replace(/(\d+)([ \w])/g, (_, count, chr) => chr.repeat(count));
};

export const encode = (text) => {
   return text.replace(/([ \w])\1+/g, (group, chr) => group.length + chr );
};
