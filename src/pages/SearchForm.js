const SearchForm = ({ search, setSearch }) => {
    const handleChangeForm = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="flex justify-center p-4 ">
            <input
                value={search}
                onChange={handleChangeForm}
                placeholder="game"
                className="p-4 bg-gray-200 
                                    rounded-lg
                                    outline-0 
                                    text-2xl 
                                    capitalize w-1/6"
            />
        </div>
    );
};

export default SearchForm;
