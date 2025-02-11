import Rating from "../elements/rating";

export default function RatePage() {
  return (
    <div className=" flex md:flex-row-reverse flex-col justify-between">
      <div className="flex lg:flex-row-reverse gap-2 flex-col md:items-center items-end ">
        <h6 className="h6">تقييمك للمحتوى</h6>
        <Rating />
      </div>

      <div className="text-btn-sm flex flex-row-reverse gap-2 md:mt-0 mt-3">
        <p className=" place-content-center">:اخر تحديث</p>
        <p className=" place-content-center">02/11/2024</p>
      </div>
    </div>
  );
}
