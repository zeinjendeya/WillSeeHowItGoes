import CommentLG from "../ui/comment/commentLG";
import Breadcrumb from "../ui/elements/breadcrumb";
import UserCard from "../ui/elements/user-card";
import CardsContainer from "../ui/main/cards-container";

export default function Page() {
  return (
    <main>
      <div className="section-container flex flex-col relative">
        <Breadcrumb />

        <CardsContainer>
          <UserCard />
        </CardsContainer>
      </div>
      <CommentLG shown={true} />
    </main>
  );
}
