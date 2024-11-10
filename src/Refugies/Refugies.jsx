import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Refugies = () => {
  return (
    <div className="min-h-screen ">
    <Navbar />
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-2xl font-bold text-center text-primary mb-12 leading-tight">
      <small>
          <tr bgcolor="lightgrey" align="center">
          <td>From 10:00 AM to 3:00 PM Kigali Time</td>
          </tr>
            
          <br/> We Will Visit Refugies in Rubavu:</small>
          <br/><br/>            
          « The Visiting Will Take Place in Rubavu District, in Nkamira Refugees' Camp»     
                 
      </h1>

      <div className="bg-gradient-to-r from-gray-400 rounded-lg shadow-xl p-8">
        <p className="text-1xl  leading-relaxed mb-6">
          We plan to visit and assist refugees from Congo who are refugees Camp of Nkamira 
          
        </p>

        <h2 className="text-2xl font-semibold text-red-800 mb-4">
          Our Planned Activities:
        </h2>

        <ul className="list-disc list-inside text-1xl  leading-relaxed mb-6 space-y-2">
          <li>
            Provision of essential basic materials such as Pads, clothes, Cream, and Shoes etc..
          </li>
          <li>
            Offer words of encouragement and hope to boost morale and reduce
            feelings of loneliness
          </li>
          
          <li>
           Help them feel welcomed and safe as well as reminding them that the future is better.
          </li>
          <li>
            Provide nutritious meals and snacks to make them feel loved
          </li>
          <li>
            Offer financial assistance in terms of pocket money to help them 
            in time of emergency
          </li>
        </ul>

        <p className="text-1xl  leading-relaxed italic">
          Through these acts of kindness, we aim to make a positive impact on
          the lives of children, mothers and others from poor families or in 
          vulnerable condition like that of refugees, showing them that they are not
          forgotten and that their community around them cares about their well-being.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);
};

export default Refugies;