import React from "react";

type TypeOfGraphy = {
  first:string,
  second:string,
  third:string,
}
function TypeOfGraphy({first,second,third}:TypeOfGraphy) {
  return (
    <main className="ml-14">
      <header className="text-8xl font-light uppercase text-gray-500 max-md:max-w-full max-md:text-4xl">
        {first} <br />
        <span className="text-gray-500">{second}</span> {third}
      </header>
    </main>
  );
}

export default TypeOfGraphy;