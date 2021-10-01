import React from "react";
import PortfolioContainer from "../components/PortfolioContainer";

// const ExternalApi = () => {
//   const [message, setMessage] = useState("");
//   const serverUrl = "http://localhost:8080";

//   const { getAccessTokenSilently } = useAuth0();
//   const { user } = useAuth0();

  // const callApi = async () => {
  //   try {
  //     const response = await fetch(`${serverUrl}/api/v1/public`);

  //     const responseData = await response.json();

  //     setMessage(responseData.message);
  //   } catch (error) {
  //     setMessage(error.message);
  //   }
  // };

  // const callSecureApi = async () => {
  //   try {
  //     const token = await getAccessTokenSilently();

  //     const response = await fetch(
  //       `${serverUrl}/api/v1/private/portfolio/1`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     ).then(res => {
  //       console.log(res.json()); // remove log in deployment
  //       console.log("user id:", user.sub);
  //       // setCoins(res.data);
  //     });

  //   //   const responseData = await response.json();

  //     // setMessage(responseData.message);
  //   } catch (error) {
  //     setMessage(error.message);
  //   }
  // };

function Portfolio() {
  return (
    <div className="home">
      <div className="container">
        <PortfolioContainer/>
      </div>
    </div>
  );
}

export default Portfolio;