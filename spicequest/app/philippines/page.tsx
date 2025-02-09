import Nav from "../Components/Nav";
import CountryTemplate from "../Components/CountryTemplate";

const Philippines = () => {
  const posts = [
    {
      username: "Kapitan Tutan",
      date: "2025-02-09",
      body: "Ang adobo ay hindi lang basta ulam—ito ay Pilipinong pagmamalaki na may perfect timpla ng alat, asim, at umami, kaya kahit simpleng sangkap, world-class ang lasa! Dahil sa slow-simmering magic, lumalambot ang karne habang hinihigop ang linamnam ng bawang, suka, at toyo—parang relasyon na mas sumasarap sa tagal (sana all). Kaya kung hindi ka pa nakakakain ng adobo, baka panahon na para i-rethink ang life choices mo! 🍛😆",
      tag1: "Spicy",
      tag2: "Delicious",
      likes: 10,
    },
    {
      username: "Matt Catain",
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
        countryData={{ name: "Philippines" }}
        posts={posts}
        from={{ name: "Philippines" }}
      />
    </div>
  );
};

export default Philippines;
