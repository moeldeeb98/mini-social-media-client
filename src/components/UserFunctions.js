import axios from 'axios'


const HOST_NAME='http://localhost:8000'


export const register = newUser =>{
    return axios
    .post(`${HOST_NAME}/api/register`, newUser,{
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
        }
    })
    .then( res => {
        return res

    })
    .catch( err =>{
        return err.response
    })
}

export const login = user =>{
    return axios
    .post(`${HOST_NAME}/api/login`, user,{
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
        }
    })
    .then( res => {
        const {user, access_token} = res.data.data
        localStorage.setItem('token', access_token)
        localStorage.setItem('user_id', user.id)
        localStorage.setItem('first_name', user.first_name )
        localStorage.setItem('last_name', user.last_name)
        localStorage.setItem('email', user.email)
        return res
    })
    .catch( err =>{
        return err.response
    })
}

export const logout = () =>{
    console.log('logOut: ');
    localStorage.clear();
    window.location.href = '/';
}



export const getAllPosts = () =>{
    return axios
    .get(`${HOST_NAME}/api/posts`,{
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then( res => {
        return res
    })
    .catch( err =>{
        console.log(err.response)
        return err.response
    })
}

export const creatPost = (post) =>{
    return axios
    .post(`${HOST_NAME}/api/posts`,post,{
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then( res => {
        return res
    })
    .catch( err =>{
        console.log(err.response)
        return err.response
    })
}

export const deletePost = (post_id) =>{
    return axios
    .delete(`${HOST_NAME}/api/posts/${post_id}`,{
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then( res => {
        return res
    })
    .catch( err =>{
        console.log(err.response)
        return err.response
    })
}

export const getMyPosts = () =>{
    return axios
    .get(`${HOST_NAME}/api/timeline`,{
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then( res => {
        return res
    })
    .catch( err =>{
        console.log(err.response)
        return err.response
    })
}
