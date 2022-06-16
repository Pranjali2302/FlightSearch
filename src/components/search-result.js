import React, { useState, useEffect } from 'react';
import Pagination from './pagination';

const SearchResult = ({ flightDetails }) => {
    const [posts, setPosts] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    // console.log(loading);
    useEffect(() => {
        // const fetchPosts = async () => {
        //     setLoading(true);
        //     // const res = flightDetails;//await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(flightDetails);
        //     setLoading(false);
        // };

        // fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginateFront = () => setCurrentPage(currentPage + 1);
    const paginateBack = () => setCurrentPage(currentPage - 1);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    console.log("currentPosts", currentPosts);
    return (
        <>
            <div className="flex flex-col w-3/4 mx-auto justify-center m-5">
                <table className="table-auto border-collapse border border-slate-400">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 px-2">Flight Number</th>
                            <th className="border border-slate-300 px-2">Airline Name</th>
                            <th className="border border-slate-300 px-2">Departure Time</th>
                            <th className="border border-slate-300 px-2">Arrival Time</th>
                            <th className="border border-slate-300 px-2">Duration</th>
                            <th className="border border-slate-300 px-2">No. Of Stops</th>
                            <th className="border border-slate-300 px-2">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentPosts.map(v => {
                                return (
                                    <tr key={v.FlightNumber}>
                                        <td className="border border-slate-300 px-2">{v.FlightNumber}</td>
                                        <td className="border border-slate-300 px-2">{v.AirlineName}</td>
                                        <td className="border border-slate-300 px-2">{v.DepartureTime}</td>
                                        <td className="border border-slate-300 px-2">{v.ArrivalTime}</td>
                                        <td className="border border-slate-300 px-2">{v.Duration}</td>
                                        <td className="border border-slate-300 px-2">{v.NoOfStops}</td>
                                        <td className="border border-slate-300 px-2">{v.Price}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                <div className="flex justify-end my-3">
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length}
                        paginate={paginate}
                        currentPage={currentPage}
                        paginateFront={paginateFront}
                        paginateBack={paginateBack}
                    />
                </div>
            </div>
        </>
    );
};
export default SearchResult;
