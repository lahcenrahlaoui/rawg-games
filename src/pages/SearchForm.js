const SearchForm = ({ search, setSearch }) => {
    const handleChangeForm = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="flex justify-center p-2 ">
            <input
                value={search}
                onChange={handleChangeForm}
                placeholder="search"
                className="p-2 bg-gray-200 
                                    rounded-lg
                                    outline-0 
                                    text-xl 
                                    capitalize w-1/10 text-center"
            />
        </div>
    );
};

export default SearchForm;
