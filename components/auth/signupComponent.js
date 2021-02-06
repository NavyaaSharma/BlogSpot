import {useState,useEffect} from 'react'
import {preSignup,isAuth} from '../../actions/auth'
import Router from 'next/router'
const SignupComponent=()=>{

    const [values,setValues]=useState({
        name:'',
        email:'',
        password:'',
        error:'',
        loading:false,
        message:'',
        showForm:true
    })
    const {name,email,password,error,loading,message,showForm}=values

    useEffect(()=>{
        isAuth() && Router.push('/')
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault()
        //console.table({name,email,password,error,loading,message,showForm})
        setValues({ ...values, loading:true,error:false})
        const user={name,email,password}

        preSignup(user).then((result)=>{
            console.log(result)
            result.json().then((data)=>{
            if(data.error)
            {
                setValues({ ...values,error:data.error})
            }
            else{
                setValues({...values,name:'',email:'',password:'',error:'',loading:false,message:data.message,showForm:false})
            }
            })
        })
    }

    const handleChange=name=>e=>{
        e.preventDefault()
        setValues({ ...values,error:false,[name]:e.target.value})
    }

    const showLoading=()=>(loading ? <div className="alert alert-info">Loading...</div> : '')
    const showError=()=>(error ? <div className="alert alert-danger">{error}</div> : '')
    const showMessage=()=>(message ? <div className="alert alert-info">{message}</div> : '')

    const signupForm=()=>{
        return(
            <form onSubmit={handleSubmit}>
                 <h2 style={{textAlign:'center'}}>SIGN UP</h2>
                <div className="form-group">
                    <input value={name} onChange={handleChange('name')} type="text" className="form-control" placeholder="Enter name"></input>
                </div>
                <div className="form-group">
                    <input value={email} onChange={handleChange('email')} type="email" className="form-control" placeholder="Enter email"></input>
                </div>
                <div className="form-group">
                    <input value={password} onChange={handleChange('password')} type="password" className="form-control" placeholder="Enter password"></input>
                </div>
                <div>
                    <button className="btn btn-primary btn-block">Signup</button>
                </div>
            </form>
        )
    }

    return(
        <div className="content">
        <React.Fragment>
            {showError()}
            {showLoading()}
            {showMessage()}
            {showForm && signupForm()}
        </React.Fragment>
        </div>
    )
}

export default SignupComponent