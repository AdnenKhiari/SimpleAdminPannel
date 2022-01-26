import AForm from "../components/AForm"

const allfields = {
    Submit:(data)=>{
      console.log(data)
    },
    fields:[
      {
        label: "First Name",
        name: "first_name",
        type: "text",
        options : {
          required: true
        }
      },
      {
        label: "Last Name",
        name: "last_name",
        type: "text"
      },
      {
        label: "Age",
        name: "age",
        type: "number"
      }
    ]
  }

const Page1 = ()=>{
    return <AForm allfields={allfields} />
}
export default Page1