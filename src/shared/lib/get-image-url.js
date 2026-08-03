const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export function getImageUrl(path) {
    return path ? `${IMAGE_BASE_URL}${path}` : null;
}