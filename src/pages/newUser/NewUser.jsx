import "./newUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="John" />
        </div>

        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" />
        </div>

        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="johndoe@example.com" />
        </div>

        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>

        <div className="newUserItem">
          <label>Phone No </label>
          <input type="email" placeholder="+9199999999" />
        </div>

        <div className="newUserItem">
          <label>Address</label>
          <input type="email" placeholder="123 Street, Earth" />
        </div>

        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="male">Female</label>
            <input type="radio" name="gender" id="others" value="others" />
            <label htmlFor="male">Others</label>
          </div>
        </div>

        <div className="newUserItem">
          <label>Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
