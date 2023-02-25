import { useState } from "react"


export default function Form() {
  const [email, setEmail] = useState('')

  return(
    <form>
    <input type="email" placeholder="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
    <button type="submit" disabled={true}>Submit</button>
    </form>
  )
}