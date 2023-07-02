import React from 'react';




export default class LogIn extends React.Component {
    render (){
        return (
            <div>
                <form>
                    <h3>Log In!</h3>
                    <label for ="userName">User Name</label>
                    <input type = "text" name ="userName" id="userName"></input>
                    <label for ="password">Password</label>
                    <input type = "text" name ="password" id="password"></input>
                    <button type ="submit" id="logInButton">Enter</button>
                </form>
            </div>
        )
    }
}