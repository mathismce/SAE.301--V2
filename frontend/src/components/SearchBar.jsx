export default function SearchBar () {
    return (
        <input className="rounded-3xl inline-block text-xs text-gray-300 cursor-text h-9 leading-9 w-full sm:w-96  px-8  bg-search-bar focus:outline-none focus:ring-1 focus:ring-search-bar-focus focus:border-red-500 focus:bg-search-bar-bg-focus transition duration-500 ease-in-out" placeholder="Search">
        </input>
    )
}