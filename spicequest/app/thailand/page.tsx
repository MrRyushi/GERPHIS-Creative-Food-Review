import Nav from '../Components/Nav';
import CountryTemplate from '../Components/CountryTemplate';

const Thailand = () => {
  const posts = [
    {
      username: 'Crispin',
      date: "1941-03-21",
      body:  
        "**Satay: Southeast Asia’s Iconic Grilled Skewers**\n\n" +  
        "Satay is a must-try if you love grilled meat. This Southeast Asian favorite, believed to have originated in Indonesia, is all about juicy, flavorful skewered meat grilled to perfection and served with a rich peanut sauce. The smoky aroma, slightly charred edges, and tender bite make it a dish that’s hard to resist. The marinade—made with turmeric, lemongrass, garlic, and other spices—gives each piece a deep, savory taste, making every bite extra satisfying.\n\n" +  

        "**First Impressions**\n\n" +  
        "Fresh off the grill, satay looks absolutely mouthwatering with its golden-brown, slightly crispy exterior. The smoky, slightly sweet scent from the marinade mixed with the aroma of grilled meat instantly makes you hungry.\n\n" +  

        "**Taste & Texture**\n\n" +  
        "Satay is all about contrast. The outer layer has a light crisp from the grill, but the inside remains tender and juicy. The flavor is a delicious mix of sweet, savory, and mildly spicy, made even better when dipped in the creamy, nutty peanut sauce. The combination of smoky grilled meat and rich sauce is what makes satay so addictive!\n\n" +  

        "**What Makes It Special?**\n\n" +  
        "The secret is in the marinade and grilling technique. The meat is soaked in a flavorful blend of turmeric, lemongrass, and spices before being grilled over an open flame. This gives it that signature smoky, caramelized taste that pairs perfectly with the peanut sauce.\n\n" +  

        "**Would I Recommend It?**\n\n" +  
        "Absolutely! If you love bold, fragrant flavors and the combination of smoky and creamy, then satay is a must-try. Best enjoyed with warm rice or just straight off the skewer!",  
      tag1: 'Smoky & Savory',
      tag2: 'Peanut & Spice',
      likes: 10,
      profile: "/crispin.png",
      foodPic: "/satay.png",
    },
    {
      username: 'Rosario',
      date: "1941-04-15",
      body:  
        "**Pad Thai: Thailand’s Iconic Stir-Fried Noodles**\n\n" +  
        "Pad Thai is one of those dishes that instantly reminds you of the vibrant flavors of Thailand. It’s a stir-fried noodle dish made with rice noodles, eggs, tofu or shrimp, bean sprouts, and crushed peanuts, all tossed in a sweet, tangy, and slightly salty tamarind-based sauce. The flavors are bold yet well-balanced, making every bite a mix of sweet, savory, and umami goodness. Whether you like it with shrimp, chicken, or tofu, Pad Thai is a dish that’s hard to say no to.\n\n" +  

        "**First Impressions**\n\n" +  
        "At first glance, Pad Thai looks like a colorful and appetizing dish. The bright golden noodles, crunchy bean sprouts, and crushed peanuts make it visually appealing. The aroma is equally inviting—a mix of nuttiness from the peanuts, the richness of eggs, and the slightly tangy-sweet scent of tamarind sauce.\n\n" +  

        "**Taste & Texture**\n\n" +  
        "What makes Pad Thai so good is the play on textures—soft, chewy noodles mixed with crunchy bean sprouts and peanuts. The sauce coats everything perfectly, bringing in layers of flavor that hit all the right notes: sweet from the tamarind, salty from the fish sauce, and just the right amount of tanginess. The optional squeeze of lime adds a fresh citrus kick that makes the dish even better.\n\n" +  

        "**What Makes It Special?**\n\n" +  
        "The secret to Pad Thai’s distinct taste is the high-heat stir-frying process. Cooking it in a hot wok gives it that signature smoky aroma, also known as wok hei. That slight charred taste, combined with the tamarind sauce and peanut crunch, creates an explosion of flavors that makes Pad Thai so unique.\n\n" +  

        "**Would I Recommend It?**\n\n" +  
        "At first, I wasn’t sure about the combination of noodles and bean sprouts, but after a few bites, I was hooked. If you’re into flavorful stir-fried noodles with a balance of sweet, tangy, and savory flavors, you have to try Pad Thai. Highly recommended!",  
      tag1: 'Sweet & Savory',
      tag2: 'Tangy Tamarind',
      likes: 8,
      profile: "/rosario.png",
      foodPic: "/pad_thai.png",
    },
    {
      username: 'Masugi',
      date: "1944-06-20",
      body:  
        "**Mango Sticky Rice: A Thai Dessert Worth Trying**\n\n" +  
        "Mango Sticky Rice is one of those desserts that may seem simple, but once you take a bite, you’ll understand why it’s so popular. It’s a Thai favorite made with sticky glutinous rice, ripe mangoes, and a sweet coconut sauce. The combination of warm, creamy rice with the juicy sweetness of fresh mango creates a unique contrast that’s surprisingly addicting. The rice is steamed and then mixed with coconut milk, sugar, and a bit of salt to bring out the flavors even more. If you love tropical desserts, this one is a must-try!\n\n" +  
    
        "**First Impressions**\n\n" +  
        "At first glance, Mango Sticky Rice looks vibrant and inviting—the bright yellow mango slices perfectly complement the glossy, coconut-infused rice. The aroma alone is already mouthwatering, with the sweet scent of coconut milk blending with the natural fragrance of ripe mangoes.\n\n" +  
    
        "**Taste & Texture**\n\n" +  
        "The best part about this dessert is the combination of textures. The sticky rice is soft and slightly chewy, absorbing all the richness from the coconut milk, while the mango adds a smooth, juicy contrast. Every spoonful gives you a mix of sweetness, creaminess, and just a hint of saltiness, making it well-balanced and satisfying. Sometimes, it’s even topped with toasted mung beans or sesame seeds for extra crunch!\n\n" +  
    
        "**What Makes It Special?**\n\n" +  
        "It’s the way all the elements come together so perfectly. The sticky rice on its own is already delicious, but when you add sweet mango and coconut sauce, it takes everything to another level. The use of fresh, high-quality ingredients is what makes Mango Sticky Rice stand out—it’s simple but done right, bringing out the best of Thai flavors.\n\n" +  
    
        "**Would I Recommend It?**\n\n" +  
        "Definitely! At first, the idea of pairing warm rice with cold mango seemed a bit unusual to me, but after the first bite, I totally got it. The flavors blend so well, and it’s one of those desserts that’s both comforting and refreshing at the same time. If you haven’t tried it yet, you should!", 
      tag1: 'Sweet and Creamy',
      tag2: 'Tropical Delight',
      likes: 6,
      profile: "/masugi.png",
      foodPic: "/mango_sticky_rice.png",
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