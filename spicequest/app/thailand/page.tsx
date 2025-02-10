import Nav from '../Components/Nav';
import CountryTemplate from '../Components/CountryTemplate';

const Thailand = () => {
  const posts = [
    {
      username: 'Crispin',
      date: "1941-03-21",
      body: 'This is a review of a dish from Indonesia. The flavors were amazing and the spices were just right.',
      tag1: 'Spicy',
      tag2: 'Delicious',
      likes: 10,
      profile: "/crispin.png",
      foodPic: "/adobo.png",
    },
    {
      username: 'Rosario',
      date: "1941-04-15",
      body: 'I tried the rendang and it was absolutely delicious. Highly recommend!',
      tag1: 'Savory',
      tag2: 'Rich',
      likes: 8,
      profile: "/rosario.png",
      foodPic: "/adobo.png",
    },
    {
      username: 'Masugi',
      date: "1944-06-20",
      body: 'I tried the rendang and it was absolutely delicious. Highly recommend!',
      tag1: 'Savory',
      tag2: 'Rich',
      likes: 6,
      profile: "/masugi.png",
      foodPic: "/adobo.png",
    },
    // Add more posts as needed
  ];

  return (
    <div className="bg-gradient-to-t from-gradient2 to-gradient1 xl:h-screen overflow-x-hidden">
      {/* Header */}
      <Nav />
      <CountryTemplate countryData={{ name: "Thailand" }} posts={posts} from={{name:"Thailand"}} />
    </div>
  );
};

export default Thailand;