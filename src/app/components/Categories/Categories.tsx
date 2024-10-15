import style from "./Categories.module.css";
import CatBox from "@/app/components/Categories/CatBox";
import catImg1 from "/public/catImg1.jpg";
import catImg2 from "/public/catImg2.jpg";
import catImg3 from "/public/catImg3.jpg";
import catImg4 from "/public/catImg4.jpg";

const catData = [
  {
    title: "blog",
    img: catImg1,
  },
  {
    title: "tech",
    img: catImg2,
  },
  {
    title: "tranding",
    img: catImg3,
  },
  {
    title: "latest",
    img: catImg4,
  },
];

export default function Categories() {
  return (
    <>
      <div className="w-full  bg-gray-100 shadow-sm p-4 pt-8 mb-20">
        <h1 className="text-center tracking-[8px] uppercase text-xl text-[#555] lg:my-6">
          Categories
        </h1>

        <div className={style.container}>
          {catData.map((obj) => (
            <CatBox key={obj.title} img={obj.img} title={obj.title} />
          ))}
        </div>
      </div>
    </>
  );
}
