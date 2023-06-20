import { ChevronLeft, ChevronRight } from 'heroicons-react';
import { useEffect, useState } from 'react';
import PageAction from './components/PageAction';
import PageInfo from './components/PageInfo';
import PageItem from './components/PageItem';

type PaginateProps = {
  totalItems?: number;
  currentPage?: number;
  pageSize?: number;
  page?: number;
  maxPages?: number;
  currentPageLength?: number;
  onChangePage?: (page: number) => void;
};

const Pagination = (props: PaginateProps) => {
  const pagerInit = getPager();
  const [pager, setPager] = useState(pagerInit);
  useEffect(() => {
    const pagerInit = getPager(props.totalItems, props.page, props.pageSize, props.maxPages);
    setPager(pagerInit);
  }, [props.totalItems, props.maxPages, props.page]);
  function setPage(page: number) {
    if (page < 1 || page > pager.totalPages) return;
    const newPager = getPager(props.totalItems, page, props.pageSize, props.maxPages);
    setPager(newPager);
    if (props.onChangePage) {
      props.onChangePage(page);
    }
  }
  function getPager(totalItems = 0, currentPage = 1, pageSize = 10, maxPages = 5) {
    const totalPages = Math.ceil(totalItems / pageSize);
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }
    let startPage: number, endPage: number;
    if (totalPages <= maxPages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
        startPage = 1;
        endPage = maxPages;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        startPage = totalPages - maxPages + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }
    const pages = Array.from(Array(endPage + 1 - startPage).keys()).map((i) => startPage + i);
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      pages: pages
    };
  }
  const formatNumber = (number?: number): string => {
    if (number) {
      return String(number).replace(/(.)(?=(\d{3})+$)/g, '$1.');
    }
    return String(number);
  };
  return (
    <div>
      <div className="flex sm:flex-row flex-col-reverse p-3 items-center justify-end gap-4 select-none">
        <div>
          <PageInfo
            contentLenght={formatNumber(props.currentPageLength)}
            totalLenght={formatNumber(props.totalItems)}
          />
        </div>
        <div className="flex flex-row sm:gap-2 gap-3">
          <PageAction
            isDisabled={pager.currentPage === 1 || pager.currentPage === 0}
            onClick={() => setPage(pager.currentPage - 1)}
            content={<ChevronLeft className="sm:w-4 sm:h-4 w-6 h-6 text-gray-500" />}
          />

          {pager.pages.map((page, index) => (
            <PageItem
              isActive={pager.currentPage === page}
              key={index}
              onClick={() => setPage(page)}
              value={formatNumber(page)}
            />
          ))}
          <div className="sm:contents hidden">
            <PageAction
              isDisabled={pager.currentPage === pager.totalPages}
              onClick={() => setPage(pager.totalPages)}
              content={<ChevronRight className="w-4 h-4 text-gray-500" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pagination;
