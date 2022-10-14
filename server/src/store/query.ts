import { paginationPArameters } from "../interfaces/pagination";

const DEFAULT_LIMIT = 0;
const DEFAULT_PAGE = 1;

export function getPagination(query: paginationPArameters)  {
    const page = Math.abs(parseInt(query.page)) || DEFAULT_PAGE;
    const take = Math.abs(parseInt(query.limit)) || DEFAULT_LIMIT;

    const skip = take * (page - 1);
    
    return {
        skip,
        take
    }

}