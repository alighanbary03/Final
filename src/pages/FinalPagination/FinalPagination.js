import React, { useState, useMemo } from "react";
import Pagination from "../../components/Pagination";
import data from "../../data/ListData.json";
import "../../Style/FinalPagination.css";
// import { Card } from "../../components/Card";

let PageSize = 10;

export default function FinalPagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <table>
        {/* <tbody>
          {currentTableData.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                url={item.url}
                description={item.text}
                price={item.price}
              >
                {item.description}
              </Card>
            );
          })}
        </tbody> */}
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}
