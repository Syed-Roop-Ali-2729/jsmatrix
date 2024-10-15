import style from "./page.module.css";
import { data } from "../_lib/data";
import Image from "next/image";

export default function Page({ searchParams }: any) {
  const { i } = searchParams;

  return (
    <div className={style.container}>
      <div className={style.articleBox}>
        <div className={style.imgBox}>
          <Image
            src={data[i].img}
            alt={data[i].title}
            className={style.imgMain}
          ></Image>
        </div>
        <div className={style.title}>
          <h1>{data[i].title}</h1>
        </div>
        <article className={style.article}>{data[i].article} </article>
        <div className="flex items-center justify-between    ">
          <p className="text-2xl text-gray-600 capitalize">
            {`Author: ${data[i].author}`}{" "}
          </p>
          <p className="text-gray-600 text-2xl capitalize">[{data[i].date}] </p>
        </div>
      </div>
      <div className="xl m-auto ">
        <h2 className="text-4xl capitalize mb-10 lg:mb-20 ml-2  font-bold">
          find this article help..?
        </h2>
        <div className="bg-gray-200 boxs shadow-sm p-6 lg:p-8 mb-10 lg:mb-40 rounded-xl">
          <h3 className="capitalize py-4 text-3xl text-gray-700 mb-4 font-semibold">
            give feedback
          </h3>
          <textarea
            placeholder="Write Something"
            rows={10}
            className="w-full p-4 text-2xl rounded-xl mb-5"
          ></textarea>
          <div className="flex items-center justify-end">
            <button className="bg-gray-800 text-white px-6 py-4 rounded-md font-medium mr-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
