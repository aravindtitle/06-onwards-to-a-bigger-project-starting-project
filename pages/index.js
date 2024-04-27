import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "url",
    address: "address",
    description: "this is a first meetup! ",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "url",
    address: "address",
    description: "this is a Second meetup! ",
  },
];
function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
