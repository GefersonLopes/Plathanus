import clsx from "clsx";
import ReactPaginate from "react-paginate";

import useIsMobile from "../../../hooks/isMobile";

interface PaginationProps {
  pageCount: number;
  forcePage?: number;
  onPageChange: (selected: number) => void;
  className?: string;
}

const Pagination = ({
  pageCount,
  onPageChange,
  forcePage,
  className,
}: PaginationProps) => {
  const isMobile = useIsMobile();

  return (
    <div className={clsx("flex justify-center mt-6", className)}>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        forcePage={forcePage}
        pageCount={pageCount}
        onPageChange={(e) => onPageChange(e.selected)}
        containerClassName="flex items-center gap-2"
        pageRangeDisplayed={isMobile ? 2 : 5}
        marginPagesDisplayed={1}
        pageClassName="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
        pageLinkClassName="w-full h-full flex items-center justify-center text-sm hover:bg-gray-50 rounded-full"
        activeLinkClassName="rounded-full border border-gray-300 shadow-[0_0_5px_rgba(0,0,0,0.5)]"
        previousClassName="w-8 h-8 rounded-full flex items-center justify-center"
        previousLinkClassName="w-full h-full flex items-center justify-center text-sm hover:bg-gray-50 rounded-full"
        nextClassName="w-8 h-8 rounded-full flex items-center justify-center"
        nextLinkClassName="w-full h-full flex items-center justify-center text-sm hover:bg-gray-50 rounded-full"
        breakLabel="..."
        breakClassName="text-gray-400"
        breakLinkClassName="w-8 h-8 flex items-center justify-center rounded-full"
      />
    </div>
  );
};

export default Pagination;
