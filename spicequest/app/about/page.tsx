import Nav from "../Components/Nav";

const AboutPage = () => {
  return (
    <div>
      {/* Header */}
      <div className="text-center space-y-4 font-light">
        <Nav />
      </div>

      <div
        className="text-center flex justify-center items-center py-48 figtree w-screen"
        id="about"
      >
        <div className="space-y-12 px-20">
          <p className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
            ABOUT US
          </p>
          <p className="text-lg md:text-lg lg:text-xl xl:text-2xl font-light">
  
          Welcome to our Southeast Asian Spice Journey, a creative food review website made for GERPHIS (Readings in Philippine History). This project explores the rich and flavorful dishes of Southeast Asia, focusing on the spices that have shaped the {"region's"} culinary heritage.

          Inspired by the Magellan-Elcano Expedition, which sought the famed Spice Islands, we dive into the aromatic and vibrant world of Southeast Asian cuisine. Spices like nutmeg, cloves, cinnamon, and turmeric have played a crucial role in history, influencing trade, culture, and, most importantly, food.

          In this food review, we highlight various dishes that showcase these spices—appetizers, main courses, and desserts. Through our reviews, we use all five senses to bring the experience to life:
          🥘 Sight – How does the dish look? Does it have rich colors, enticing textures, or an artistic presentation?
          👃 Smell – What aromas stand out? Is it earthy, smoky, sweet, or spicy?
          👂 Hearing – Does it sizzle, crunch, or make any other sounds that enhance the experience?
          🤲 Touch – How does it feel? Smooth, crispy, tender, or chewy?
          👅 Taste – What flavors dominate? Is it sweet, savory, tangy, or spicy?

          We also explore the unique cooking methods and preparation techniques, breaking down what makes each dish special. Finally, we give our honest recommendations—would we encourage others to try it? Why or why not?

          This project is our way of blending history and cuisine, giving our audience a deeper appreciation for the flavors that have shaped Southeast Asia. Whether {"you're"} a foodie or a history buff, we invite you to embark on this flavorful adventure with us!

          🌿 Enjoy the journey and happy eating! 🍛 

          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
