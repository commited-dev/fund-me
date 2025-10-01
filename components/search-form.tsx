import Form from 'next/form';
import SearchFormResetButton from './search-form-rest-button';
import { Search } from 'lucide-react';

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search for Startups"
      />

      <div className="flex gap-2">
        {query && <SearchFormResetButton />}

        <button type="submit" className="search-btn text-white">
          <Search />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
