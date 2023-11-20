import { type FC, useState, useEffect, useRef, type ChangeEvent } from 'react';
import { Stack } from '@mui/material';
// component
import { useCatalogue, type Catalogue } from '@hooks/api';

interface Filters {
    category: string;
    minPrice: string;
    maxPrice: string;
    roomTypes: string[];
    grades: string[];
}

export const CataloguePage: FC = () => {
    const [products, setProducts] = useState<Catalogue[] | []>([]);
    const [filters, setFilters] = useState<Filters>({
        category: '',
        minPrice: '',
        maxPrice: '',
        roomTypes: [],
        grades: [],
    });
    const backup = useRef<Catalogue[] | []>([]);
    const [categoryList, setCategoryList] = useState<string[]>([]);
    const [roomTypeList, setRoomTypeList] = useState<string[]>([]);
    const [gradeList, setGradeList] = useState<string[]>([]);

    useEffect(() => {
        useCatalogue().then(({ data }) => {
            setProducts(data);
            backup.current = data;

            // 카테고리 목록 추출
            const categoryList = [...new Set(data.map((item) => item.category))];
            setCategoryList(categoryList);

            // 룸 타입 목록 추출
            const roomTypeList = [...new Set(data.map((item) => item.room_type))];
            setRoomTypeList(roomTypeList);

            // 등급 목록 추출
            const gradeList = [...new Set(data.map((item) => item.grade.toString()))].sort();
            setGradeList(gradeList);
        });
    }, []);

    // 필터 입력 변경 처리
    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFilters({ ...filters, [name]: value });
    };

    // 체크박스 변경 처리
    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target;
        if (checked) {
            setFilters({ ...filters, [name]: [...filters[name as keyof Filters], value] });
        } else {
            const filter = filters[name as keyof Filters];
            if (Array.isArray(filter)) {
                setFilters({ ...filters, [name]: filter.filter((item) => item !== value) });
            } else {
                setFilters({ ...filters, [name]: filter });
            }
        }
    };

    // 카테고리 필터링
    const applyFilters = () => {
        let filteredProducts = backup.current;

        if (filters.category) {
            filteredProducts = filteredProducts.filter((product) => product.category === filters.category);
        }
        if (filters.minPrice) {
            filteredProducts = filteredProducts.filter(
                (product) => parseFloat(product.price.replace(',', '')) >= parseFloat(filters.minPrice),
            );
        }
        if (filters.maxPrice) {
            filteredProducts = filteredProducts.filter(
                (product) => parseFloat(product.price.replace(',', '')) <= parseFloat(filters.maxPrice),
            );
        }
        if (filters.roomTypes.length) {
            filteredProducts = filteredProducts.filter((product) => filters.roomTypes.includes(product.room_type));
        }
        if (filters.grades.length) {
            filteredProducts = filteredProducts.filter((product) => filters.grades.includes(product.grade.toString()));
        }

        setProducts(filteredProducts);
    };
    return (
        <Stack>
            <select name="category" onChange={handleInputChange}>
                <option value="">카테고리 선택</option>
                {categoryList.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <input type="number" name="minPrice" placeholder="최소 가격" onChange={handleInputChange} />
            <input type="number" name="maxPrice" placeholder="최대 가격" onChange={handleInputChange} />

            <div>
                {roomTypeList.map((roomType) => (
                    <label key={roomType}>
                        <input type="checkbox" name="roomTypes" value={roomType} onChange={handleCheckboxChange} />
                        {roomType}
                    </label>
                ))}
            </div>

            <div>
                {gradeList.map((grade) => (
                    <label key={grade}>
                        <input type="checkbox" name="grades" value={grade} onChange={handleCheckboxChange} />
                        {grade} 등급
                    </label>
                ))}
            </div>

            <button onClick={applyFilters}>필터 적용</button>

            {products.map((item) => {
                return (
                    <div key={item._id}>
                        {item.product_name}/{item.category}/{item.grade}/{item.room_type}/{item.price}
                    </div>
                );
            })}
        </Stack>
    );
};
