import React from "react"
import { Link } from "gatsby" //react-router에서 불러오는 것이 아니네!
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Gatsby!" />
      <p>What a world.</p>
    </div>
  )
}
