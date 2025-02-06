
export const formatVietnameseToString = (keyword) => {
    if (!keyword) return '';
    const formattedString = keyword
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .split(" ")
        .join("-");

    return encodeURIComponent(formattedString);
}
