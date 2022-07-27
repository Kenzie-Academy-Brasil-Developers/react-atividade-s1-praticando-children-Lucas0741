import "./App.css";
import CenteredCard from "./components/CenteredCard/index.jsx";
import InformationCard from "./components/InformationCard/index.jsx";

function App() {
  const data = [
    {
      name: "Children 1",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Children 2",
      info: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Children 3",
      info: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <CenteredCard>
      {data.map((info, index) => (
        <InformationCard
          key={index}
          name={info.name}
          info={info.info}
        ></InformationCard>
      ))}
    </CenteredCard>
  );
}

export default App;
