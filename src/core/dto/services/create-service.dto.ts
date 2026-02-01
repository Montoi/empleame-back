export class CreateServiceDto {
    title: string;
    category: string;
    provider: string;
    price: number;
    rating: number;
    reviewCount: number;
    image: string;
    isBookmarked?: boolean;
    isPopular?: boolean;
}
