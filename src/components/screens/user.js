import React from "react";
import { signInWithGoogle, auth } from "./../../../src/firebase/firebase.util";

const User = ({ user }) => {
  return (
    <div>
      {user ? <h1>Welcome {user.displayName}</h1> : <h1>Welcome User</h1>}

      <div>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
      </div>

      <button onClick={() => auth.signOut()}>Sign Out</button>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
};

export default User;
