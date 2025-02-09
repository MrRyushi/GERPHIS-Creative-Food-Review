import Nav from "../Components/Nav";
import CountryTemplate from "../Components/CountryTemplate";

const Indonesia = () => {
  const posts = [
    {
      username: "foodieExplorer",
      date: "February 9, 2025",
      body:
        "🍜 The Aromatic Dance of Laksa: A Bowl Full of History\n\n" +
        "**A Taste of Tradition**\n" +
        "Laksa is a beloved Southeast Asian dish, tracing its origins to the Peranakan culture—a blend of Chinese and Malay influences. Found in Malaysia, Singapore, and Indonesia, its bold flavors come from coconut milk, shrimp paste, and a medley of spices.\n\n" +
        "**First Impressions (Sight & Smell)**\n" +
        "The dish is a stunning mix of vibrant orange broth, fresh green herbs, and red chili slices. The scent? A warm embrace of lemongrass, turmeric, and galangal.\n\n" +
        "**A Symphony of Textures (Touch & Taste)**\n" +
        "The silky noodles contrast with the crunch of bean sprouts, while the rich broth coats your tongue in layers of spice and creaminess. Each sip carries a mild heat from chili and a comforting sweetness from coconut milk.\n\n" +
        "**What Makes It Special?**\n" +
        "The unique blend of turmeric, galangal, lemongrass, and shrimp paste defines laksa’s deep umami taste. The cooking method—slow-simmering the spice-infused broth—ensures every bite is bursting with layered flavors.\n\n" +
        "**Would I Recommend It?**\n" +
        "Absolutely! If you love spicy, fragrant soups with a history as rich as its taste, laksa is a must-try.",
      tag1: "Spicy",
      tag2: "Turmeric, Galangal, Clove",
      likes: 120,
    },
    {
      username: "user2",
      date: "2025-02-08",
      body: "I tried the rendang and it was absolutely delicious. Highly recommend!",
      tag1: "Savory",
      tag2: "Rich",
      likes: 8,
    },
    // Add more posts as needed
  ];

  return (
    <div className="bg-gradient-to-t from-gradient2 to-gradient1 xl:h-screen overflow-x-hidden">
      {/* Header */}
      <Nav />
      <CountryTemplate
        countryData={{ name: "Indonesia" }}
        posts={posts}
        from={{ name: "Indonesia" }}
      />
    </div>
  );
};

export default Indonesia;
