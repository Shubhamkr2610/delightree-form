import { forwardRef } from "react"

const ShowFormData =forwardRef((_, ref) =>{
    console.log(ref?.current?.getFormData())
    return (
        <div>{JSON.stringify(ref?.current?.getFormData())}</div>
    )
})
export default ShowFormData