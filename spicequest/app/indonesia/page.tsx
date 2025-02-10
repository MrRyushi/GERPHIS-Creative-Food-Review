import Nav from "../Components/Nav";
import CountryTemplate from "../Components/CountryTemplate";

const Indonesia = () => {
  const posts = [
    {
      username: "Crispin",
      date: "1941-03-21",
      body:  
        "**Nasi Goreng: Indonesia’s Iconic Fried Rice**\n\n" +  
        "If you love fried rice, then Nasi Goreng is something you definitely have to try. This Indonesian classic is packed with bold flavors—savory, slightly sweet, with a touch of spice. It’s made with day-old rice stir-fried with sweet soy sauce (kecap manis), garlic, shallots, shrimp paste, and chili, giving it that deep umami taste. Usually topped with a fried egg and served with crispy prawn crackers, it’s the kind of dish that’s both comforting and exciting at the same time.\n\n" +  

        "**First Impressions**\n\n" +  
        "The first thing you’ll notice is the deep golden-brown rice, coated in rich soy sauce and glistening from the heat of the wok. The aroma is mouthwatering—a mix of smoky fried rice, caramelized soy sauce, and a bit of spice from the chili and shrimp paste. And of course, that fried egg on top makes it even more tempting!\n\n" +  

        "**Taste & Texture**\n\n" +  
        "Each bite is packed with flavor. The rice has that perfect stir-fried texture—not too soft, not too dry—just the right amount of chewiness. You get layers of taste from the sweetness of kecap manis, the saltiness of the shrimp paste, and a bit of heat from the chili. The crispy prawn crackers on the side add a nice crunch, while the fried egg gives a creamy, rich contrast to the dish.\n\n" +  

        "**Would I Recommend It?**\n\n" +  
        "Absolutely! Whether you’re a fan of fried rice or just looking for something flavorful and satisfying, Nasi Goreng won’t disappoint. You can have it with chicken, seafood, or even a vegetarian version. Best enjoyed hot with a side of sambal for an extra kick, it’s a dish that’s simple yet packed with so much character—definitely a must-try!"  
        ,
      tag1: "Savory & Umami",
      tag2: "Indonesian Cuisine",
      likes: 120,
      profile: "/crispin.png",
      foodPic: "/nasi_goreng.png",
    },
  
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
