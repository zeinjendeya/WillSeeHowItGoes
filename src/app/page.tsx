import CommentLG from "../ui/comment/commentLG";
import Breadcrumb from "../ui/elements/breadcrumb";

export default function Page() {
  return (
    <main>
      <div className="section-container flex flex-col relative">
        <Breadcrumb />
      </div>
      <CommentLG shown={true} />
    </main>
  );
}
