
const About = () => {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex justify-center items-center w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="mt-36 mb-24 w-full max-w-[1413px] max-md:my-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col pr-3.5 font-light text-black capitalize max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl max-md:max-w-full">
                  The Responsible Builder of Kerala
                </div>
                <hr className="mt-5"/>
                <div className="mt-12 text-2xl max-md:mt-10 max-md:max-w-full">
                  Being one of the top real estate home builders in Kerala, we{" "}
                  <br />
                  bring you a new array of apartments, flats , and villas that{" "}
                  <br />
                  match your requirements and complement your lifestyle. We
                  <br />
                  differ from other home builders in Kerala with our unique
                  <br /> styles and perceptions.
                  <br />
                  <br />
                  Our unique designs with assured quality checks of process
                  <br /> and materials ensure you a perfect home. We are one of
                  the
                  <br /> leading home builders in Kerala who have undertaken
                  <br /> several projects and have successfully completed these
                  <br /> projects on time.
                </div>
                <div className="flex gap-5 justify-between self-start mt-11 text-base max-md:mt-10">
                  <div>know more</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9d6d9b24e4d04356050fb0a9268b6825bb93923fdf4b028d6234ae0ff96ac4a?apiKey=3951505ae5ff418a9246cf1b1a286151&"
                    className="aspect-[0.93] fill-stone-600 w-[13px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pr-8 mt-1.5 max-md:mt-10 max-md:max-w-full">
                <div className="text-lg text-black capitalize max-md:max-w-full">
                  What Makes Us Unique
                </div>
                <div className="mt-20 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-5xl font-extralight capitalize whitespace-nowrap text-[#4F844B] max-md:mt-10 max-md:text-4xl">
                        <div className="max-md:text-4xl">01</div>
                        <div className="mt-20 max-md:mt-10 max-md:text-4xl">
                          76
                        </div>
                        <div className="mt-24 max-md:mt-10 max-md:text-4xl">
                          110
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col self-stretch my-auto text-lg font-light text-black capitalize max-md:mt-10">
                        <div>INDIA'S FIRST LIFECYCLE BUILDER</div>
                        <div className="mt-28 max-md:mt-10">
                          HANDED OVER 76 PROJECTS
                        </div>
                        <div className="mt-28 whitespace-nowrap max-md:mt-10">
                          PROJECTS ACROSS KERALA IN 9 CITIES
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between mt-24 capitalize max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                  <div className="text-5xl font-extralight text-[#4F844B] max-md:text-4xl">
                    6K+
                  </div>
                  <div className="flex-auto text-lg font-light ml-12 text-black">
                    OVER 6000+ SATISFIED CUSTOMERS
                    <br />
                    GLOBALLY
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About