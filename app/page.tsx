import Breadcrumb from "./ui/up/elements/breadcrumb";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function Page(){
  const breadcrumbs = {
    page: 'main',
    links: [{name: <a className="w-full" href="#">الرئيسية</a>, href: "/"}, {name: <ChevronLeftIcon strokeWidth={2.5} className="h-3 w-3 block" />, href: '#'}, {name: <a className="w-full" href="#">الرئيسية</a>, href: "/page"}]
  };
  
  return (
      <main>
        <div className="section-container flex flex-col relative">
          <Breadcrumb {...breadcrumbs} />
        </div>
      </main>
  );
}