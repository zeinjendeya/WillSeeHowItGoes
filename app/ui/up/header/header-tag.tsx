export default function HeaderTag({show, px, h1_size, h6_size}: {show: boolean, px: string, h1_size: number, h6_size: number}) {
  return (
    <div className={`${show ? "flex" : "hidden"} justify-end items-center mx-auto py-7 ${px}`}>
      <div className="flex flex-col justify-end">
        <h1
          style={{ fontSize: h1_size }}
          className="flex font-bold justify-end py-1 text-text-white h1"
        >
          أمانة منطقة الرياض
        </h1>
        <p className="h6" style={{ fontSize: h6_size }}>
          نسعى جاهدين للوصول معا إلى أقصى مراحل التطور وتسهيل حياة سكان المدينة
        </p>
      </div>
    </div>
  );
}
