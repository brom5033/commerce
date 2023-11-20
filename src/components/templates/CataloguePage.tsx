import { type FC, useState, useEffect, useRef, type ChangeEvent } from 'react';
import { Stack, Grid } from '@mui/material';
import { useFlow } from 'stackflow';
// component
import { useCatalogue, type Catalogue } from '@hooks/api';
import { Card } from '@components/molecules';
import { userModel } from '@stores/index';
import { colorPalette } from '@constants/index';

interface Filters {
    category: string;
    minPrice: string;
    maxPrice: string;
    roomTypes: string[];
    grades: string[];
}

export const CataloguePage: FC = () => {
    const userModelStore = userModel();

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
    const [page, setPage] = useState(0);

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

    const { push } = useFlow();

    const handleDetailNavigation = (data: Catalogue) => () => {
        {
            userModelStore.isLogin() ? push('Detail', { data: JSON.stringify(data) }) : push('Login', {});
        }
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
            <Grid container>
                {products.slice(20 * page, 20 * (page + 1)).map((item) => {
                    return (
                        <Grid item xs={3} key={item._id} onClick={handleDetailNavigation(item)}>
                            <div>
                                <Card src={item.images[0]} alt={item.product_name}>
                                    <h2>{item.product_name}</h2>
                                    <p>category : {item.category}</p>
                                    <p>grade : {item.grade}</p>
                                    <p>room-type : {item.room_type}</p>
                                    {userModelStore.isLogin() ? <p>$ {item.price}</p> : ''}
                                </Card>
                            </div>
                        </Grid>
                    );
                })}
            </Grid>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '24px' }}>
                {Array.from(Array(Math.ceil(products.length / 20)).keys()).map((num) => {
                    return (
                        <button
                            key={num + 1}
                            onClick={() => setPage(num)}
                            style={{
                                color: 'gray',
                                backgroundColor: num === page ? colorPalette.secondary : 'white',
                                width: '50px',
                                height: '40px',
                                margin: '0 4px',
                                border: '2px solid lightgray',
                                borderRadius: '5px',
                            }}
                        >
                            {num + 1}
                        </button>
                    );
                })}
            </div>
        </Stack>
    );
};
