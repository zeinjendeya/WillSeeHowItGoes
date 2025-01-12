import CommentLG from "../ui/comment/commentLG";
import Breadcrumb from "../ui/elements/breadcrumb";
import UserCard from "../ui/elements/user-card";

export default function Page() {
  return (
    <main>
      <div className="section-container flex flex-col relative">
        <Breadcrumb />
        <section className="bg-white rounded-lg px-4 py-6 ms-4 me-4 grid grid-cols-3 max-sm:grid-cols-1 max-sm:justify-items-center justify-items-end gap-3">
          <UserCard />
        </section>
      </div>
      <CommentLG shown={true} />
    </main>
  );
}
