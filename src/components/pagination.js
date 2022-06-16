import React from "react";

export default function Pagination ({
    postsPerPage,
    totalPosts,
    paginateFront,
    paginateBack,
    currentPage
}) {
    return (
        <div className="py-2">
            <div>
                <p className="text-sm text-gray-700">
                    Showing{' '}
                    <span className="font-medium">{currentPage * postsPerPage - 5}</span>
                    to
                    <span className="font-medium"> {currentPage * postsPerPage} </span>
                    of
                    <span className="font-medium"> {totalPosts} </span>
                    results
                </p>
            </div>
            <nav className="block" />
            <div className="flex justify-end">
                <nav
                    className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                    aria-label="Pagination"
                >
                    <button
                        disabled={currentPage === 1}
                        onClick={() => {
                            paginateBack();
                        }}
                        href="#"
                        className={` ${currentPage === 1 ? 'cursor-not-allowed bg-gray-400' : 'cursor-pointer'} relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500`}
                    >
                        <span>Previous</span>
                    </button>

                    <button
                        disabled={currentPage === Math.ceil(totalPosts / 5)}
                        onClick={() => {
                            paginateFront();
                        }}
                        href="#"
                        className={`${currentPage === Math.ceil(totalPosts / 5) ? 'cursor-not-allowed bg-gray-400' : 'cursor-pointer'} relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500`}
                    >
                        <span>Next</span>
                    </button>
                </nav>
            </div>
        </div>
    );
}
