import SearchForm from '@/components/search-form';
import StartupCard from '@/components/startup-card';
import { STARTUPS_QUERY } from '@/lib/queries';
import { client } from '@/sanity/lib/client';
import { StartupCardType } from '@/types';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = await client.fetch(STARTUPS_QUERY);

  return (
    <>
      <section className="brand-container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and get noticed in Virtual Competitions
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section-container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>
      </section>

      <ul className="mt-7 card-grid">
        {posts?.length > 0 ? (
          posts.map((post: StartupCardType) => <StartupCard key={post?._id} post={post} />)
        ) : (
          <p className="no-results">No startups found</p>
        )}
      </ul>
    </>
  );
}
