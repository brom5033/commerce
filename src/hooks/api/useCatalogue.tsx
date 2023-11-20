import axios from 'axios';

export interface Catalogue {
    address: string;
    category: string;
    currency: string;
    description: string;
    email: string;
    grade: number;
    hotel: string;
    images: string[];
    phone: string;
    price: string;
    product_name: string;
    representative_image: string;
    room_type: string;
    _id: string;
}

export const useCatalogue = () => {
    return axios.get<Catalogue[]>('https://tmp-riad.s3.ap-northeast-2.amazonaws.com/dummy/catalogs.json');
};
