import Nav from '../Components/Nav';
import CountryTemplate from '../Components/CountryTemplate';

const Vietnam = () => {
  const posts = [
    {
      username: 'user1',
      date: '2025-02-09',
      body: 'This is a review of a dish from Indonesia. The flavors were amazing and the spices were just right.',
      tag1: 'Spicy',
      tag2: 'Delicious',
      likes: 10,
    },
    {
      username: 'user2',
      date: '2025-02-08',
      body: 'I tried the rendang and it was absolutely delicious. Highly recommend!',
      tag1: 'Savory',
      tag2: 'Rich',
      likes: 8,
    },
    // Add more posts as needed
  ];

  return (
    <div className="bg-gradient-to-t from-gradient2 to-gradient1 xl:h-screen overflow-x-hidden">
      {/* Header */}
      <Nav />
      <CountryTemplate countryData={{ name: "Vietnam" }} posts={posts} />
    </div>
  );
};

export default Vietnam;