import CommentLG from "../ui/comment/commentLG";
import Breadcrumb from "../ui/elements/breadcrumb";
import Users from "../ui/main/users";

export default async function Page() {
  return (
    <main>
      <div className="section-container flex flex-col relative">
        <Breadcrumb />
        <Users />
      </div>
      <CommentLG shown={true} />
    </main>
  );
}
