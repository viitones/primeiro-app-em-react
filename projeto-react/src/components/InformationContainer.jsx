import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai"

import "../styles/components/informationcontainer.sass"

const informationcontainer = [
    {name: "Telephone", value: "(61)99999-9999", icon: <AiFillPhone id="phone-icon"/>},
    {name: "Email", value: "viton@gmail.com", icon: <AiOutlineMail id="email-icon"/>},
    {name: "Localização", value: "sobradinho-DF", icon: <AiFillEnvironment id="pin-icon"/>},
];

const InformationContainer = () => {
  return (
    <section id="information-container">
       {informationcontainer.map((information) => (
        <div className="info-card" key={information.name}>
            {information.icon}
            <div>
                <h3>{information.name}</h3>
                <p>{information.value}</p>
            </div>
        </div>
       ))}
    </section>
  )
}

export default InformationContainer