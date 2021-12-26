import Paggination from "./Paggination"

function Results({ searchResults }) {
    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[12%] lg:pl-52">
            <p className="text-gray-600 text-sm sm:text-base mb-5 mt-3">About {searchResults.searchInformation?.formattedTotalResults} results 
                ({searchResults.searchInformation?.formattedSearchTime} seconds)
            </p>

            {searchResults.items?.map(result => (
                <div key={result.link} className="max-w-xl mb-8">
                    <div className="group">
                        <a className="hidden sm:inline-flex sm:text-sm" href={result.link}>{result.formattedUrl}</a>
                        <a className="text-clip text-lg sm:text-xl text-blue-800 font-medium group-hover:underline" 
                            href={result.link}>
                                <h2>{result.title}</h2>
                        </a>
                    </div>

                    <p className='line-clamp-2 text-sm sm:text-md'>{result.snippet}</p>
                </div>
            ))}

            <Paggination />
        </div>
    )
}

export default Results
