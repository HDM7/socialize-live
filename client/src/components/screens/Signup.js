import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'
const SignIn = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const [password, setPasword] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState(undefined)
    useEffect(() => {
        if (url) {
            uploadFields()
        }
    }, [url])
    const uploadPic = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "socialize")
        data.append("cloud_name", "hdm007")
        fetch("https://api.cloudinary.com/v1_1/hdm007/image/upload", {
                method: "post",
                body: data
            })
            .then(res => res.json())
            .then(data => {
                setUrl(data.url)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const uploadFields = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "Invalid Email", classes: "#c62828 red darken-3" })
            return
        }
        fetch("/signup", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    password,
                    email,
                    pic: url
                })
            }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    M.toast({ html: "Oops! something went wrong", classes: "#c62828 red darken-3" })
                } else {
                    M.toast({ html: "SignUp Success!", classes: "#43a047 green darken-1" })
                    history.push('/signin')
                }
            }).catch(err => {
                console.log(err)
            })
    }
    const PostData = () => {
        if (image) {
            uploadPic()
        } else {
            uploadFields()
        }

    }

    return ( <
        div className = "mycard" >
        <
        div className = "card auth-card input-field" >
        <
        h2 > Socialize < /h2> <
        input type = "text"
        placeholder = "Username"
        value = { name }
        onChange = {
            (e) => setName(e.target.value)
        }
        /> <
        input type = "text"
        placeholder = "Email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value)
        }
        /> <
        input type = "password"
        placeholder = "Password"
        value = { password }
        onChange = {
            (e) => setPasword(e.target.value)
        }
        /> <
        div className = "file-field input-field" >
        <
        div className = "btn #64b5f6 blue darken-1" >
        <
        span > Pic < /span> <
        input type = "file"
        onChange = {
            (e) => setImage(e.target.files[0])
        }
        /> < /
        div > <
        div className = "file-path-wrapper" >
        <
        input className = "file-path validate"
        type = "text" / >
        <
        /div> < /
        div > <
        button className = "btn waves-effect waves-light #64b5f6 blue darken-1"
        onClick = {
            () => PostData()
        } >
        Sign Up <
        /button> <
        h5 >
        <
        Link to = "/signin" >Have an account ? < /Link> < /
        h5 >





        <
        /div> < /
        div >
    )
}


export default SignIn