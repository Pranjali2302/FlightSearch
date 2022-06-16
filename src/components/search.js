import React, { useState } from 'react';
import cityData from '../dummyJson/city.json';
import flightDetails from '../dummyJson/flightDetails.json';
import SearchResult from './search-result';

const Search = () => {
    const [searchData, setSearchData] = useState({});
    const [searchedFlights, setSearchedFlights] = useState([]);
    const [searched, setSearched] = useState(false);
    const setFormData = (fieldName, value) => {
        const data = { ...searchData, ...{ [fieldName]: value } };
        console.log("data", data);
        setSearchData(data);
    };
    console.log("searchData", searchData);
    const searchFlights = () => {
        setSearched(true);
        if (searchData.SourceCity && searchData.DestinationCity && searchData.TravelDate) {
            let filteredResult;
            if (searchData.ReturnDate) {
                filteredResult = flightDetails.filter(v => v.From === searchData.SourceCity && v.To === searchData.DestinationCity &&
                    v.TravelDate === searchData.TravelDate && v.ReturnDate === searchData.ReturnDate);
            } else {
                filteredResult = flightDetails.filter(v => v.From === searchData.SourceCity && v.To === searchData.DestinationCity && v.TravelDate === searchData.TravelDate);
            }
            setSearchedFlights(filteredResult);
            console.log("filteredResult", filteredResult);
        }
    };
    return (
        <>
            <form className="flex flex-col my-5">
                <div className="flex flex-col mb-5">
                    <div className="flex justify-center">
                        <div className="w-80 px-3 md:mb-0">
                            <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Source City
                            </label>
                            <select
                                name="SourceCity"
                                onChange={(e) => setFormData('SourceCity', e.target.value)}
                                className={`${searched && !searchData.DestinationCity ? 'border border-red-400' : ''} appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                            >
                                <option value="" disabled selected>Select</option>
                                {cityData.map(v =>
                                    <option key={v.city}>{v.city}</option>
                                )}
                            </select>
                            {searched && !searchData.SourceCity && <p className="text-red-500 text-xs italic">Please select Source City</p>}
                        </div>
                        <div className="w-80 px-3">
                            <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Destination City
                            </label>
                            <select onChange={(e) => setFormData('DestinationCity', e.target.value)} className={`${searched && !searchData.DestinationCity ? 'border border-red-400' : ''} appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} >
                                <option value="" disabled selected>Select</option>
                                {cityData.map(v =>
                                    <option key={v.city}>{v.city}</option>
                                )}
                            </select>
                            {searched && !searchData.DestinationCity && <p className="text-red-500 text-xs italic">Please select Destination City</p>}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {searchData.DestinationCity && searchData.SourceCity && searchData.DestinationCity === searchData.SourceCity && <p className="text-red-500 text-xs italic">Please select different Source City or Destination City</p>}
                    </div>
                </div>
                <div className="flex  justify-center mb-5">
                    <div className="w-80 px-3">
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Travel Date
                        </label>
                        <input onChange={(e) => setFormData('TravelDate', e.target.value)} className={`${searched && !searchData.TravelDate ? 'border border-red-400' : ''} appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} type="date" />
                        {searched && !searchData.TravelDate && <p className="text-red-500 text-xs italic">Please select Travel Date</p>}
                    </div>
                    <div className="w-80 px-3">
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Return Date
                        </label>
                        <input onChange={(e) => setFormData('ReturnDate', e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date" />
                    </div>
                </div>
                <div className="flex  justify-center mb-5">
                    <button type="button" onClick={() => searchFlights()} className="bg-blue-700 text-white w-32 p-3 rounded">Search</button>
                </div>

            </form>
            {searchedFlights && searchedFlights.length > 0 ?
                <SearchResult flightDetails={searchedFlights} /> : <> {searched ? <div className="text-center">No flights found</div> : <div />}</>
            }
        </>
    );
};
export default Search;
