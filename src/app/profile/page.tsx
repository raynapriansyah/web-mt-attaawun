import Image from "next/image";

export default function Profile() {
  return (
    <div className="mt-14">
      <div>
        <h1 className="font-bold">LATAR BELAKANG</h1>
        <div className="flex justify-center items-center">
          <Image
            src="/header.jpg"
            width={500}
            height={500}
            alt="Mushola At-ta'awun"
            className="border-4 shadow-xl"
          />
        </div>
        <h1 className="mt-5 text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          corrupti perspiciatis aspernatur nesciunt deleniti maxime, sint labore
          culpa sit fugiat, dignissimos mollitia ipsum eaque tempore fuga optio
          fugit magnam consequatur quas tenetur aliquam cum qui. Illo, odio
          doloribus laboriosam et veritatis veniam rerum perferendis, quam
          animi, culpa corporis obcaecati.
        </h1>
      </div>
      <div className="mt-5">
        <h1 className="font-bold">ANGGOTA PENGURUS</h1>
      </div>
    </div>
  );
}
