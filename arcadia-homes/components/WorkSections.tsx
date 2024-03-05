import * as React from "react";
import TypeOfGraphy from "./Typeofgraphy";

const WorkSections = () => {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col justify-center items-start px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
    <TypeOfGraphy first={"india's first"} second={"lifecycle"} third={"builder"}/>
        <div className="flex flex-col mt-12 mb-11 ml-14 max-w-full w-[1020px] max-md:my-10">
          <div className="text-8xl font-light uppercase text-neutral-500 max-md:max-w-full max-md:text-4xl">
            &nbsp;
            <br />
          </div>
          <div className="mt-24 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col justify-center pr-12 bg-neutral-200 max-md:pr-5 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7f0bf8c875ff2f3b76657cecdb5a15569c5d6be13121582f269aad99ebdb5469?apiKey=3951505ae5ff418a9246cf1b1a286151&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f0bf8c875ff2f3b76657cecdb5a15569c5d6be13121582f269aad99ebdb5469?apiKey=3951505ae5ff418a9246cf1b1a286151&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f0bf8c875ff2f3b76657cecdb5a15569c5d6be13121582f269aad99ebdb5469?apiKey=3951505ae5ff418a9246cf1b1a286151&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f0bf8c875ff2f3b76657cecdb5a15569c5d6be13121582f269aad99ebdb5469?apiKey=3951505ae5ff418a9246cf1b1a286151&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f0bf8c875ff2f3b76657cecdb5a15569c5d6be13121582f269aad99ebdb5469?apiKey=3951505ae5ff418a9246cf1b1a286151&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f0bf8c875ff2f3b76657cecdb5a15569c5d6be13121582f269aad99ebdb5469?apiKey=3951505ae5ff418a9246cf1b1a286151&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f0bf8c875ff2f3b76657cecdb5a15569c5d6be13121582f269aad99ebdb5469?apiKey=3951505ae5ff418a9246cf1b1a286151&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f0bf8c875ff2f3b76657cecdb5a15569c5d6be13121582f269aad99ebdb5469?apiKey=3951505ae5ff418a9246cf1b1a286151&"
                      className="w-full aspect-[0.83] max-md:max-w-full"
                    />
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f41020c4ba85d4794183b50f1daa4eaf4148b4abf7f754d5fa143c9cc0fdf99?apiKey=3951505ae5ff418a9246cf1b1a286151&"
                    className="self-center mt-14 max-w-full aspect-[1.08] w-[148px] max-md:mt-10"
                  />
                  <div className="self-end mt-9 pr-16 text-base text-black capitalize">
                    Budget Residences
                  </div>
                  <div className="self-end mt-6 text-base font-light text-black capitalize">
                    Budget apartments for families who aspire
                    <br /> for a better living environment
                  </div>
                  <div className="flex gap-5 justify-between self-center mt-8 text-base font-light text-black capitalize">
                    <div className="flex-auto">view projects</div>
                    {/* <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f9404b350047d12d673613b79d9c612803f60e596b7a8ac33955c3623a846fd?apiKey=3951505ae5ff418a9246cf1b1a286151&"
                      className="self-start aspect-[0.93] fill-stone-600 w-[13px]"
                    /> */}
                  </div>
                  <div className="flex flex-col justify-center pr-12 mt-20 bg-neutral-200 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex overflow-hidden relative flex-col justify-center py-px min-h-[514px] max-md:max-w-full">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/03f2b5d3958c55d637aa3c2fe9c55b4b32d7641b7060e12ff30b624e0d14c7da?apiKey=3951505ae5ff418a9246cf1b1a286151&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/03f2b5d3958c55d637aa3c2fe9c55b4b32d7641b7060e12ff30b624e0d14c7da?apiKey=3951505ae5ff418a9246cf1b1a286151&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03f2b5d3958c55d637aa3c2fe9c55b4b32d7641b7060e12ff30b624e0d14c7da?apiKey=3951505ae5ff418a9246cf1b1a286151&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/03f2b5d3958c55d637aa3c2fe9c55b4b32d7641b7060e12ff30b624e0d14c7da?apiKey=3951505ae5ff418a9246cf1b1a286151&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/03f2b5d3958c55d637aa3c2fe9c55b4b32d7641b7060e12ff30b624e0d14c7da?apiKey=3951505ae5ff418a9246cf1b1a286151&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03f2b5d3958c55d637aa3c2fe9c55b4b32d7641b7060e12ff30b624e0d14c7da?apiKey=3951505ae5ff418a9246cf1b1a286151&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/03f2b5d3958c55d637aa3c2fe9c55b4b32d7641b7060e12ff30b624e0d14c7da?apiKey=3951505ae5ff418a9246cf1b1a286151&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/03f2b5d3958c55d637aa3c2fe9c55b4b32d7641b7060e12ff30b624e0d14c7da?apiKey=3951505ae5ff418a9246cf1b1a286151&"
                        className="object-cover absolute inset-0 size-full"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/56580ad2fb8538b4f162c668ebe2fd29f7b3f88f89dfa76d12dca23c8b4cb175?apiKey=3951505ae5ff418a9246cf1b1a286151&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/56580ad2fb8538b4f162c668ebe2fd29f7b3f88f89dfa76d12dca23c8b4cb175?apiKey=3951505ae5ff418a9246cf1b1a286151&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/56580ad2fb8538b4f162c668ebe2fd29f7b3f88f89dfa76d12dca23c8b4cb175?apiKey=3951505ae5ff418a9246cf1b1a286151&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/56580ad2fb8538b4f162c668ebe2fd29f7b3f88f89dfa76d12dca23c8b4cb175?apiKey=3951505ae5ff418a9246cf1b1a286151&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/56580ad2fb8538b4f162c668ebe2fd29f7b3f88f89dfa76d12dca23c8b4cb175?apiKey=3951505ae5ff418a9246cf1b1a286151&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/56580ad2fb8538b4f162c668ebe2fd29f7b3f88f89dfa76d12dca23c8b4cb175?apiKey=3951505ae5ff418a9246cf1b1a286151&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/56580ad2fb8538b4f162c668ebe2fd29f7b3f88f89dfa76d12dca23c8b4cb175?apiKey=3951505ae5ff418a9246cf1b1a286151&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/56580ad2fb8538b4f162c668ebe2fd29f7b3f88f89dfa76d12dca23c8b4cb175?apiKey=3951505ae5ff418a9246cf1b1a286151&"
                        className="w-full aspect-[0.83] max-md:max-w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-start mt-5 max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/51511e32dca8d90668c57e582638bf04d6c2e0131e07485e2eaef1f70a83f345?apiKey=3951505ae5ff418a9246cf1b1a286151&"
                    className="ml-2.5 max-w-full aspect-[1.69] w-[130px]"
                  />
                  <div className="mt-8 ml-2.5 text-base text-black capitalize">
                    Singular Living
                  </div>
                  <div className="mt-6 ml-2.5 text-base font-light text-black capitalize">
                    Safe, private, and self-contained micro <br />
                    apartments for single residents
                  </div>
                  <div className="flex gap-5 pr-5 mt-8 ml-2.5 text-base font-light text-black capitalize">
                    <div className="flex-auto">view projects</div>
                    {/* <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f9404b350047d12d673613b79d9c612803f60e596b7a8ac33955c3623a846fd?apiKey=3951505ae5ff418a9246cf1b1a286151&"
                      className="self-start aspect-[0.93] fill-stone-600 w-[13px]"
                    /> */}
                  </div>
                  <div className="flex flex-col justify-center self-stretch mt-56 bg-neutral-200 max-md:mt-10 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/03f2b5d3958c55d637aa3c2fe9c55b4b32d7641b7060e12ff30b624e0d14c7da?apiKey=3951505ae5ff418a9246cf1b1a286151&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/03f2b5d3958c55d637aa3c2fe9c55b4b32d7641b7060e12ff30b624e0d14c7da?apiKey=3951505ae5ff418a9246cf1b1a286151&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03f2b5d3958c55d637aa3c2fe9c55b4b32d7641b7060e12ff30b624e0d14c7da?apiKey=3951505ae5ff418a9246cf1b1a286151&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/03f2b5d3958c55d637aa3c2fe9c55b4b32d7641b7060e12ff30b624e0d14c7da?apiKey=3951505ae5ff418a9246cf1b1a286151&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/03f2b5d3958c55d637aa3c2fe9c55b4b32d7641b7060e12ff30b624e0d14c7da?apiKey=3951505ae5ff418a9246cf1b1a286151&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03f2b5d3958c55d637aa3c2fe9c55b4b32d7641b7060e12ff30b624e0d14c7da?apiKey=3951505ae5ff418a9246cf1b1a286151&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/03f2b5d3958c55d637aa3c2fe9c55b4b32d7641b7060e12ff30b624e0d14c7da?apiKey=3951505ae5ff418a9246cf1b1a286151&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/03f2b5d3958c55d637aa3c2fe9c55b4b32d7641b7060e12ff30b624e0d14c7da?apiKey=3951505ae5ff418a9246cf1b1a286151&"
                      className="w-full aspect-[0.83] max-md:max-w-full"
                    />
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2eb9e78da74bbf58f389e6a41ce3dc9ec58276d1a18e92e8b1896ea808e5a57?apiKey=3951505ae5ff418a9246cf1b1a286151&"
                    className="mt-32 ml-16 max-w-full aspect-[2.94] w-[164px] max-md:mt-10 max-md:ml-2.5"
                  />
                  <div className="self-end mt-10 mr-2.5 text-base text-black capitalize">
                    Budget Residences
                  </div>
                  <div className="self-end mt-6 mr-2.5 text-base font-light text-black capitalize">
                    Budget apartments for families who aspire
                    <br /> for a better living environment
                  </div>
                  <div className="flex gap-5 justify-between self-end pr-20 mt-8 mr-2.5 text-base font-light text-black capitalize whitespace-nowrap max-md:pr-5">
                    <div className="grow">view projects</div>
                    {/* <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f9404b350047d12d673613b79d9c612803f60e596b7a8ac33955c3623a846fd?apiKey=3951505ae5ff418a9246cf1b1a286151&"
                      className="self-start aspect-[0.93] fill-stone-600 w-[13px]"
                    /> */}
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

export default WorkSections


