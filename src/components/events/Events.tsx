import React from "react";
import EventsCard from "./EventsCard";
import AddFriendCard from "../friends/AddFriendCard";
import BrithdayCard from "./BrithdayCard";

const Events: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8  ">
      <EventsCard>
        <AddFriendCard />
      </EventsCard>
      <EventsCard>
        <BrithdayCard />
      </EventsCard>
      <EventsCard>
        <AddFriendCard />
      </EventsCard>
      <EventsCard>
        <BrithdayCard />
      </EventsCard>
      <EventsCard>
        <AddFriendCard />
      </EventsCard>
      <EventsCard>
        <BrithdayCard />
      </EventsCard>
    </div>
  );
};

export default Events;
