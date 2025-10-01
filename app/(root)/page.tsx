import SearchForm from '@/components/search-form';
import StartupCard from '@/components/startup-card';
import { StartupCardType } from '@/types';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts: StartupCardType[] = [
    {
      _createdAt: new Date().toISOString(),
      views: 55,
      author: { _id: 1, name: 'John Doe' },
      _id: 1,
      description: 'This is a description',
      image:
        'https://images.unsplash.com/photo-1625314887424-9f190599bd56?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Robots',
      title: 'We Robots',
    },
  ];
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
