import Breadcrumb from "./ui/up/elements/breadcrumb";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function Page(){
  const breadcrumbs = {
    page: 'main',
    links: [{element: <a className="w-full" href="#">الرئيسية</a>, href: "/"}, {element: <ChevronLeftIcon strokeWidth={2.5} className="h-3 w-3 block" />, href: '#'}, {element: <a className="w-full" href="#">الرئيسية</a>, href: "/page"}]
  };

  return (
      <main>
        <div className="section-container flex flex-col relative">
          <Breadcrumb {...breadcrumbs} />
        </div>
      </main>
  );
}