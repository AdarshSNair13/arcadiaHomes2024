
import Image from 'next/image';
import Link from 'next/link';

const Gallery = () => {
  const images = [
    '/g1.jpg',
    '/g1.jpg',
    '/g1.jpg',
    '/g1.jpg',
    '/g1.jpg',
    '/g1.jpg',
    '/g1.jpg',
    '/g1.jpg',
    '/g1.jpg',
  ];

  return (
   
    <div className="flex min-h-screen items-center justify-center">
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
    {images.map((imageUrl,index) => (
    <div key={index} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <Image src={imageUrl} alt={`Image ${index + 1}`} width={400} height={300} className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"/>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl text-white">Building</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <Link href="/gallery">
        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
        </Link>
      </div>
    </div>
    ))}
</div>
</div>

  );
};

export default Gallery;
