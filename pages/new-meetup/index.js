// our-domain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  async function addMeetupHandler(enteredMeetupData) {
    const respose = await fetch("/api/new-meetup",{
    method : 'POST',
    body: JSON.stringify(enteredMeetupData),
    headers: {
      'Content-Type' : 'application/json'
    }
  
  })

  const data = await respose.json()
  console.log(data)

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
