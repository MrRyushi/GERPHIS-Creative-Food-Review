import Nav from '../Components/Nav';
import CountryTemplate from '../Components/CountryTemplate';

const Vietnam = () => {
  const posts = [
    {
      username: 'Rosario',
      date: "1941-04-15",
      body: "**Beef Pho: Vietnam’s Iconic Noodle Soup**\n\n" +  
        "Beef pho is a traditional Vietnamese noodle soup known for its aromatic broth, tender beef slices, and fresh herbs. Its rich, clear broth has a deep umami flavor with hints of star anise, cinnamon, and cloves, while the soft rice noodles and thinly sliced beef create a comforting texture. The unique cooking method involves slow-simmering beef bones for hours to extract intense flavors, complemented by fresh toppings like bean sprouts, basil, lime, and chili. Highly recommend beef pho for its warm, fragrant broth, delicate balance of flavors, and nourishing, satisfying experience.\n\n" +  

        "**Taste**\n\n" +  
        "Beef Pho ay isang rich at aromatic na Vietnamese noodle soup na parang yakap sa bowl. Ang broth nito ay slow-simmered kasama ang star anise, cinnamon, cloves, at ginger, kaya sobrang linamnam at may tamang balance ng alat at tamis. Malalambot na beef slices, silky rice noodles, at fresh toppings tulad ng bean sprouts, basil, at chili ang bumubuo sa dish na ito—isang perfect na kombinasyon ng lasa at texture.\n\n" +  

        "**Impressions**\n\n" +  
        "Unang mapapansin mo ang amoy ng mainit at mabangong sabaw, puno ng spices at beefy goodness. Habang nilulubog ang thinly sliced beef sa broth, unti-unti itong naluluto, kasabay ng vibrant na herbs at crisp na bean sprouts—sobrang inviting! Dagdagan mo pa ng konting lime, hoisin, o sriracha para sa extra kick, depende sa panlasa mo.\n\n" +  

        "**Textures**\n\n" +  
        "Ang sabaw ay light pero malasa, sakto lang para bumalot sa noodles habang ini-slurp mo ito. Ang beef ay sobrang lambot at halos matutunaw sa bibig mo. May dagdag na crunch ang bean sprouts at herbs, habang ang chewy noodles ang nagbubuo sa perfect na bite.\n\n" +  

        "**Would I Recommend It?**\n\n" +  
        "Syempre naman! Kung mahilig ka sa comforting at flavorful na soup, Beef Pho is a must-try. Nakakabusog pero hindi mabigat, aromatic pero refreshing, at puwedeng i-customize ayon sa trip mo. Swak ito pang-lamig ng katawan sa maulan na araw o simpleng craving lang sa isang warm at satisfying meal.",
      tag1: 'Aromatic Broth',
      tag2: 'Vietnamese Classic',
      likes: 8,
      profile: "/rosario.png",
      foodPic: "/beef_pho.png",
    },
  ];

  return (
    <div className="bg-gradient-to-t from-gradient2 to-gradient1 xl:h-screen overflow-x-hidden">
      {/* Header */}
      <Nav />
      <CountryTemplate countryData={{ name: "Vietnam" }} posts={posts} from={{name:"Vietnam"}}/>
    </div>
  );
};

export default Vietnam;