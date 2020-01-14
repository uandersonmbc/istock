export interface Company {
    name: string;
    slug: string;
}
export interface Category {
    name: string;
}

export interface Product {
    id: number;
    name: string;
    company: Company;
    category: Category;
}

export interface ProductState {
    total: number;
    perPage: number;
    page: number;
    lastPage: number;
    data: Product[]
}
