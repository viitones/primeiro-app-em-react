import SocialNetworks from "./SocialNetworks"
import InformationContainer from "./InformationContainer"

import "../styles/components/sidebar.sass"

import Avatar from "../img/eu.png"

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="Victor Hugo" />
        <p className="title">Developer</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="" className="btn">download curriculo</a>
    </aside>
  )
}

export default Sidebar