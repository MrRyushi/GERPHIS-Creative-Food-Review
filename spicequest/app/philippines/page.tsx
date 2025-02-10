import Nav from "../Components/Nav";
import CountryTemplate from "../Components/CountryTemplate";

const Philippines = () => {
  const posts = [
    {
      username: "Crispin",
      date: "1941-03-21",
      body:
        "**Adobo: A Taste of Home**\n\n" +
        "Adobo is more than just food, it’s a taste of home. Every Filipino has their own version, whether it’s passed down from lola or tweaked to personal preference. It’s a simple yet comforting dish made with soy sauce, vinegar, garlic, bay leaves, and black peppercorns, slowly cooked to perfection.\n\n" +
        "**First Impressions (Sight & Smell)**\n\n" +
        "A freshly cooked plate of adobo is always inviting. The sauce, thick and glossy, clings to every piece of meat, giving it a rich, deep brown color. The smell? It’s an irresistible mix of garlicky goodness, tangy vinegar, and the warm aroma of bay leaves—instantly making you crave a hot plate of rice.\n\n" +
        "**A Perfect Balance of Flavors (Touch & Taste)**\n\n" +
        "The meat is fork-tender, absorbing all the bold flavors from the marinade. Every bite is a perfect balance of salty, tangy, and slightly sweet, with just the right amount of umami that keeps you coming back for more.\n\n" +
        "**What Makes It Special?**\n\n" +
        "Adobo isn’t just a dish, it’s a tradition. It’s incredibly versatile; you can make it with chicken, pork, or even seafood and vegetables. Plus, it gets even better the next day when the flavors have fully soaked in. Whether dry or saucy, every Filipino household has their own way of making it special.\n\n" +
        "**Would I Recommend It?**\n\n" +
        "Absolutely! If you want to experience true Filipino comfort food, adobo is a must-try. Pair it with steaming white rice, and you’ve got a meal that feels like a warm hug from home.",
      tag1: "Soy Sauce & Vinegar",
      tag2: "Savory & Tangy",
      likes: 10,
      profile: "/crispin.png",
      foodPic: "/adobo.png",
    },
    {
      username: "Rosario",
      date: "1941-04-15",
      body:
        "**Lumpia: The Crispy Wrapper** 🥢\n\n" +
        "Ang lumpia ay isa sa mga pinakapaboritong pagkain ng mga Pilipino, na may impluwensya mula sa lutuing Tsino. Ito ay manipis na wrapper na punong-puno ng gulay, karne, o kombinasyon ng dalawa. Sa bawat kagat, ramdam mo ang lutong ng ginintuang balat at ang malasang laman na perfect ang timpla ng alat at tamis. Ang espesyal na paraan ng pagluluto nito ay ang mahigpit na pagbabalot ng sangkap bago ito iprito hanggang maging crispy o ihain ng sariwa (lumpiang sariwa) na may matamis na sarsa ng bawang.\n\n" +
        "**Unang Sulyap at Amoy**\n\n" +
        "Amoy pa lang, panalo na! May halong linamnam ng bawang, sibuyas, at ginisang karne o gulay. Maaakit ka na agad sa lutong ng balat, yung tipong isang kagat pa lang, may maririnig ka nang satisfying crunch.\n\n\n" +
        "**Ang Perpektong Lutong at Laman**\n" +
        "Eto yung tipo ng pagkain na hindi mo pwedeng kainin nang tahimik kasi bawat kagat, may kasamang tunog ng crispy wrapper. Isawsaw mo sa suka na may bawang at sili, at boom, lasa agad ng langit!\n\n" +
        "**Bakit Panalo ang Lumpia?**\n" +
        "Ang lumpia ay para sa lahat. May pritong shanghai kung gusto mo ng crunchy bite-sized goodness, fresh lumpia kung bet mo ng medyo healthy, at lumpiang gulay kung trip mo ng classic na lasa.\n\n" +
        "**Ire-rekomenda Ko Ba?**\n" +
        "OO! Kung di mo pa natitikman ang lumpia (which is halos imposible kung Pinoy ka), oras na para humabol. Crunchy, malasa, at laging crowd favorite. Once you start, mahirap huminto.",
      tag1: "Crispy & Savory",
      tag2: "Bite-Sized Goodness",
      likes: 8,
      profile: "/rosario.png",
      foodPic: "/lumpia.png",
    },
    {
      username: "Masugi",
      date: "1944-06-20",
      body:  
        "**Bicol Express: A Spicy Filipino Classic**\n\n" +  
        "Bicol Express is one of those dishes that hits the spot if you love bold flavors and a bit of heat. Originating from the Bicol region, where spicy food is a way of life. This dish is a creamy, savory, and fiery mix of pork, coconut milk, chili peppers, and shrimp paste. It’s the kind of ulam that makes you reach for extra rice without even thinking.\n\n" +  

        "**First Impressions**\n\n" +  
        "The first thing you notice is the thick, creamy sauce with bits of vibrant red and green chilies peeking through. It smells rich and inviting—there’s the sweetness of coconut milk, the umami punch of bagoong, and that signature chili kick that makes your nose tingle just a little.\n\n" +  

        "**Taste & Texture**\n\n" +  
        "Every spoonful is packed with flavor. The pork is slow-cooked until tender, soaking up all the goodness of the sauce. The coconut milk gives it a silky texture, while the chilies add just the right amount of heat—it doesn’t just burn, it builds up, making each bite more addictive. The balance of creamy, savory, and spicy flavors is what makes Bicol Express stand out.\n\n" +  

        "**Would I Recommend It?**\n\n" +  
        "Definitely—especially if you enjoy spicy food! It’s best paired with steaming white rice to mellow out the heat and let the flavors shine. Even if you’re not a big fan of spicy dishes, Bicol Express might just change your mind. It’s the kind of meal that gives you warmth and comfort, with just the right kick to keep things exciting."  
      ,

      tag1: "Fiery & Creamy",
      tag2: "Coconut & Chili",
      likes: 6,
      profile: "/masugi.png",
      foodPic: "/bicol_express.png",
    },
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
