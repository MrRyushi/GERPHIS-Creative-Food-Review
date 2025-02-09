import Nav from "../Components/Nav";

const AboutPage = () => {
  return (
    <div>
      {/* Header */}
      <div className="text-center space-y-4 font-light">
        <Nav />
      </div>

      <div
        className="text-center flex justify-center items-center py-48 figtree h-screen w-screen"
        id="about"
      >
        <div className="space-y-12 px-20">
          <p className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
            ABOUT US
          </p>
          <p className="text-lg md:text-lg lg:text-xl xl:text-2xl font-light">
            SpiceQuest is created by Group # , for an
            assignment in the course GERPHIS. The task is to
            create a Creative Food Review
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
