import Nav from "../Components/Nav";
import CountryTemplate from "../Components/CountryTemplate";

const Philippines = () => {
  const posts = [
    {
      username: "Crispin",
      date: "1941-03-21",
      body:  
        "**A Taste of Tradition**\n\n" +  
        "Adobo is the heart and soul of Filipino cuisine. Rooted in pre-colonial cooking techniques and later influenced by Spanish culinary traditions, adobo is a harmonious blend of soy sauce, vinegar, garlic, bay leaves, and black peppercorns—simple yet deeply flavorful.\n\n" +  

        "**First Impressions (Sight & Smell)**\n\n" +  
        "A warm plate of adobo greets you with its deep brown, glossy sauce coating tender cuts of meat. The aroma is a comforting fusion of garlic, tangy vinegar, and the mellow earthiness of bay leaves, a scent that immediately evokes home-cooked nostalgia.\n\n" +  

        "**A Symphony of Textures (Touch & Taste)**\n\n" +  
        "The fork-tender meat, marinated to perfection, melts in your mouth while the sauce delivers a balance of salty, tangy, and umami-rich goodness.\n\n" +  

        "**What Makes It Special?**\n\n" +  
        "Adobo’s magic lies in its simplicity and adaptability. Whether made with chicken, pork, or even seafood and vegetables, the slow braising process allows the flavors to deepen over time, making leftovers even more delicious the next day.\n\n" +  

        "**Would I Recommend It?**\n\n" +  
        "YES! If you crave a dish that is savory, aromatic, adobo is a must-try. Whether served with steaming white rice or enjoyed on its own, it’s a timeless Filipino classic that never fails."  
        ,
      tag1: "Spicy",
      tag2: "Delicious",
      likes: 10,
      profile: "/crispin.png",
      foodPic: "/adobo.png",
    },
    {
      username: "Rosario",
      date: "1941-04-15",
      body:  
        "**🥢 Unang Sulyap at Amoy**\n\n"+  
        "Amoy pa lang, panalo na! May halong linamnam ng bawang, sibuyas, at ginisang karne o gulay. Maaakit ka na agad sa lutong ng balat—yung tipong isang kagat pa lang, may maririnig ka nang satisfying crunch.\n\n\n" +  

        "**Ang Perpektong Lutong at Laman**\n" +  
        "Eto yung tipo ng pagkain na hindi mo pwedeng kainin nang tahimik kasi bawat kagat, may kasamang tunog ng crispy wrapper. Isawsaw mo sa suka na may bawang at sili, at boom—lasa agad ng langit!\n\n" +  

        "**Bakit Panalo ang Lumpia?**\n" +  
        "Ang lumpia ay para sa lahat. May pritong shanghai kung gusto mo ng crunchy bite-sized goodness, fresh lumpia kung bet mo ng medyo healthy, at lumpiang gulay kung trip mo ng classic na lasa.\n\n" +  

        "**Ire-rekomenda Ko Ba?**\n" +  
        "OO! Kung di mo pa natitikman ang lumpia (which is halos imposible kung Pinoy ka), oras na para humabol. Crunchy, malasa, at laging crowd favorite. Once you start, mahirap huminto."  
        ,
      tag1: "Savory",
      tag2: "Rich",
      likes: 8,
      profile: "/rosario.png",
      foodPic: "/lumpia.png",
    },
    {
      username: "Masugi",
      date: "1944-06-20",
      body:  
        "**🥢 Unang Sulyap at Amoy**\n\n"+  
        "Amoy pa lang, panalo na! May halong linamnam ng bawang, sibuyas, at ginisang karne o gulay. Maaakit ka na agad sa lutong ng balat—yung tipong isang kagat pa lang, may maririnig ka nang satisfying crunch.\n\n\n" +  

        "**Ang Perpektong Lutong at Laman**\n" +  
        "Eto yung tipo ng pagkain na hindi mo pwedeng kainin nang tahimik kasi bawat kagat, may kasamang tunog ng crispy wrapper. Isawsaw mo sa suka na may bawang at sili, at boom—lasa agad ng langit!\n\n" +  

        "**Bakit Panalo ang Lumpia?**\n" +  
        "Ang lumpia ay para sa lahat. May pritong shanghai kung gusto mo ng crunchy bite-sized goodness, fresh lumpia kung bet mo ng medyo healthy, at lumpiang gulay kung trip mo ng classic na lasa.\n\n" +  

        "**Ire-rekomenda Ko Ba?**\n" +  
        "OO! Kung di mo pa natitikman ang lumpia (which is halos imposible kung Pinoy ka), oras na para humabol. Crunchy, malasa, at laging crowd favorite. Once you start, mahirap huminto."  
        ,
      tag1: "Savory",
      tag2: "Rich",
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
