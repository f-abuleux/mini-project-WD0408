import CreateEvent from "@/components/createEvent/CreateNewEvent";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Create Event / EventUs',
    description: 'AboutUs'
}


export default function CreateEventPage () {
    return (
        <div>
          <CreateEvent /> 
        </div>
    )
}