export default function HeaderTag({
  show,
  px,
  h1,
  h6,
}: {
  show: boolean;
  px: string;
  h1: string;
  h6: string;
}) {
  return (
    <div
      className={`${show ? "flex" : "hidden"} justify-end items-center mx-auto py-7 ${px}`}
    >
      <div className="flex flex-col justify-end">
        <h1
          className={`flex justify-end py-1 text-text-white ${h1}`}
        >
          أمانة منطقة الرياض
        </h1>
        <p className={`${h6}`}>
          نسعى جاهدين للوصول معا إلى أقصى مراحل التطور وتسهيل حياة سكان المدينة
        </p>
      </div>
    </div>
  );
}
