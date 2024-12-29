export default function HeaderTag({show}: {show: boolean}) {
  return (
    <div className={`${show ? "flex" : "hidden"} justify-end items-center mx-auto py-7 px-8`}>
      <div className="flex flex-col justify-end">
        <h1
          style={{ fontSize: 32 }}
          className="flex font-bold justify-end py-1 text-text-white h1"
        >
          أمانة منطقة الرياض
        </h1>
        <p className="h6">
          نسعى جاهدين للوصول معا إلى أقصى مراحل التطور وتسهيل حياة سكان المدينة
        </p>
      </div>
    </div>
  );
}
