import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";

const Paginations = ({ total, limit, page, setPage, style }) => {
    return (
        <>
            <div className={`flex justify-center ${style}`}>
                <Pagination
                    activePage={page ? page : 1}
                    itemsCountPerPage={limit}
                    totalItemsCount={total ? total : 1}
                    pageRangeDisplayed={5}
                    firstPageText={<i className="fal fa-chevron-double-left"></i>}
                    prevPageText={<i className="fal fa-chevron-left"></i>}
                    nextPageText={<i className='fal fa-chevron-right'></i>}
                    lastPageText={<i className="fal fa-chevron-double-right"></i>}
                    onChange={setPage}
                />
            </div>
        </>
    );
};

export default Paginations;
