import React from "react";
import Term from "./useState";
import { Rem } from "./useState";
import { Em } from "./useState";
// import ijeomaImg from "./images/ijeomaImg.png";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* <NavBar /> */}
          <Card />
          <Term />
          <Rem />
          <Em />
          {/* <Deck /> */}
        </header>
      </div>
    </>
  );
}

export default App;

// // const NavBar = () => {
// //   return (
// //     <nav
// //       className="navbar navbar-expand-lg navbar-light bg-light m
// //     "
// //     >
// //       <div className="container-fluid">
// //         <a className="navbar-brand" href="#">
// //           Navbar
// //         </a>
// //         <button
// //           className="navbar-toggler"
// //           type="button"
// //           data-bs-toggle="collapse"
// //           data-bs-target="#navbarSupportedContent"
// //           aria-controls="navbarSupportedContent"
// //           aria-expanded="false"
// //           aria-label="Toggle navigation"
// //         >
// //           <span className="navbar-toggler-icon"></span>
// //         </button>
// //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// //             <li className="nav-item">
// //               <a className="nav-link active" aria-current="page" href="#">
// //                 Home
// //               </a>
// //             </li>
// //             <li className="nav-item">
// //               <a className="nav-link" href="#">
// //                 Link
// //               </a>
// //             </li>
// //             <li className="nav-item dropdown">
// //               <a
// //                 className="nav-link dropdown-toggle"
// //                 href="#"
// //                 id="navbarDropdown"
// //                 role="button"
// //                 data-bs-toggle="dropdown"
// //                 aria-expanded="false"
// //               >
// //                 Dropdown
// //               </a>
// //               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
// //                 <li>
// //                   <a className="dropdown-item" href="#">
// //                     Action
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a className="dropdown-item" href="#">
// //                     Another action
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <hr className="dropdown-divider" />
// //                 </li>
// //                 <li>
// //                   <a className="dropdown-item" href="#">
// //                     Something else here
// //                   </a>
// //                 </li>
// //               </ul>
// //             </li>
// //             <li className="nav-item">
// //               <a
// //                 className="nav-link disabled"
// //                 href="#"
// //                 tabIndex="-1"
// //                 aria-disabled="true"
// //               >
// //                 Disabled
// //               </a>
// //             </li>
// //           </ul>
// //           <form className="d-flex">
// //             <input
// //               className="form-control me-2"
// //               type="search"
// //               placeholder="Search"
// //               aria-label="Search"
// //             />
// //             <button className="btn btn-outline-success" type="submit">
// //               Search
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// const Card = () => {
//   return (
//     <>
//       <div>
//         <h2>my logo</h2>
//         <div className="row">
//           <div className="col-4">
//             <CommitSlide name="Ijeoma" address="kwara" birthday={2} />
//           </div>

//           <div className="col-4">
//             <CommitSlide name="Tracy" address="lagos" birthday={5} />
//           </div>

//           <div className="col-4">
//             <CommitSlide name="Ashley" address="ikeja" birthday={10} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const CommitSlide = ({ name, address, birthday }) => {
//   return (
//     <div className="card">
//       <img src="..." class="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{name}</h5>
//         <p className="card-text">
//           <span>{birthday}</span>
//         </p>
//         <a href="#" class="btn btn-primary">
//           {address}
//         </a>
//       </div>
//     </div>
//   );
// };
const rank = [
  {
    id: 1,
    bankName: "Barter",
    branch: "Ikotun",
    age: 30,
  },

  {
    id: 2,
    bankName: "Carter",
    branch: "Ketu",
    age: 20,
  },

  {
    id: 3,
    bankName: "Darter",
    branch: "Mile 12",
    age: 30,
  },
];

const Card = () => {
  return (
    <div>
      <div className="row">
        {rank.map((bank) => {
          return (
            <div className="col-md-4 col-sm-12" key={bank.id}>
              <Deck {...bank}></Deck>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Deck = ({ id, name, branch, age }) => {
  return (
    <div className="card">
      <img src="..." class="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{id}</h5>
        <p className="card-text">
          {age}
          <span>{name}</span>
        </p>
        <a href="#" class="btn btn-primary">
          {branch}
        </a>
      </div>
    </div>
  );
};

// {
//   bankDBs.map((bank) => {
//     return (
//       <div className="col-md-4 col-sm-12" key={bank.id}>
//         <SingleCard {...bank}></SingleCard>;
//       </div>
//     );
//   });
// }
