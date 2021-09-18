
import React from 'react';
import { useHistory } from 'react-router-dom';


// function UserInfo() {
// return (
// <div>
// <header>Songshion</header>
// <form>
//     <input type="text"
//     placeholder="Please enter your city"
//     name="name" />
//   <input type="text"
//     placeholder="Please enter your state"
//     name="name" />
//   <input type="submit" value="Submit" />
// </form>
// </div>
// )
// }


// function UserInfo() {
//     return (
//     <div>
//     <header>Songshion</header>
//     <form>
//         <input type="text"
//         placeholder="Please enter your city"
//         name="name" />
//       <input type="text"
//         placeholder="Please enter your state"
//         name="name" />
//       <input type="submit" value="Submit" />
//     </form>
//     </div>
//     )
//     }


const UserInfo = (props) => {
  const history = useHistory();

  return (
    <>
      <h1>Songshion</h1>
      <p>Go to the contact page by using one of the following:</p>
      <hr />

      {/* Button */}
      <p>
        <button onClick={() => history.push('/events')}>Submit</button>
      </p>
{/* 

      {/* Text field */}
      <p>
        <input
          type="text"
          onChange={(e) => {
            if (e.target.value === 'events') {
              history.push('/events');
            }
          }}
          placeholder="Please enter your state"
        ></input>
        <input
          type="text"
          onChange={(e) => {
            if (e.target.value === 'events') {
              history.push('/events');
            }
          }}
          placeholder="Please enter your city"
        ></input>
      </p>
    </>
  );
};

// export default Home;
    
    export default UserInfo;
// export default UserInfo;