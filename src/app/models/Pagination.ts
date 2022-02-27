export class Pagination {
  currentPage!: number;
  totalPages!: number;
  totalItems!: number;
  pageSize!: number;
}

export class PaginationResult<T>{
  result!: T;
  pagination!: Pagination;
}
