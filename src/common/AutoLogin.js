import { authenticateUser } from "../component/LoginComponent/function/authenticateUser";

const AutoLogin = async (userCredentials) => {

    console.log("Inside AutoLogin",userCredentials);

    if (!userCredentials) { 
        return ('E');
    }

    const { email = null, password = null } = userCredentials

    console.log("email",email," password",password)

    if(!email || !password){
        return ("E");
    }

    await authenticateUser(email, password, authenticationResponse)

    return ("N")

}

const authenticationResponse = (response) => {
    if(response.data.code === "Email ERROR"){
        return ("E");
    }
}

export default AutoLogin