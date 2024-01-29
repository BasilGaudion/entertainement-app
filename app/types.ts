export interface MovieDataI {
    title: string;
    thumbnail: ThumbnailI;
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
};

export interface ThumbnailI {
    trending?: TrendingThumbnailI;
    regular: RegularThumbnailI;
};
export interface TrendingThumbnailI {
    small: string;
    large: string;
};
export interface RegularThumbnailI {
    small: string;
    medium: string;
    large: string;
};
export interface TrendingHomePropsI {
    data: MovieDataI[];
};