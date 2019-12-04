import React, { Component, useState } from 'react'
import {color} from '../../../../config/color'
export const ShowLogin = (props) => {

    const [showHide, setHide] = useState(props.showHide)
    const [ColorChange, setColor] = useState(1)
    const [HoverColor,setHover] = useState(false)

    const HandleLogin = (num) => {
        setColor(num)

    }
    const HandleSignin = (num) => {
        setColor(num)

    }
    const HideZindex = () => {
        setHide(false)
    }
    const HandleEnter= () =>{
        setHover(true)
    }
    const HandleLeave= () =>{
        setHover(false)
    }
    
    return (
        <div className="row">
    
            <div style={{
                display: showHide ? 'block' : 'none', zIndex: "1",
                background: color.LoginBackground, position: 'fixed', height: "100%", width: "100%", left: 0, right: 0, color:color.LoginColor
            }}>

                <div style={{ margin: "auto", width: "375px", backgroundColor: 'white', zIndex: '-1' }}>
                    <div style={{ width: '100%', position: 'relative', boxSizing: 'border-box', backgroundColor: color.LoginBackground }} >
                        <ul className="nav my-3">
                            <li className="nav-item" onClick={() => HandleSignin(1)} >
                                <a className="active nav-link py-3 px-3" data-toggle="tab" href="#nav-signin" style={ColorChange == 1 ? { color: 'red', backgroundColor: 'white' } : { color: color.LoginColor }}>Sign Up</a>
                            </li>
                            <li className="nav-item" onClick={() => HandleLogin(2)} >
                                <a className="nav-link py-3 px-3" data-toggle="tab" href="#nav-login" style={ColorChange == 1 ? { color: color.LoginColor } : { backgroundColor: 'white', color: 'red' }}>Log In</a>
                            </li>
                            <li className="nav-item" style={{ cursor: 'pointer' }}>
                                <a className="nav-link py-3 px-3" onClick={() => HideZindex()}>x</a>
                            </li>

                        </ul>
                    </div>
                    <div className="tab-content">
                        <div style={{ backgroundColor: '#fff', padding: "5px", position: "relative", width: '100%', height: '400px' }} className="tab-pane active justify-content-center">

                            <form>

                                <div className="form-group px-3">
                                    <label htmlFor="exampleFormControlInput1">User Name</label>
                                    <input type="name" className="form-control"  placeholder="name" />
                                </div>
                                <div className="form-group px-3">
                                    <label htmlFor="exampleFormControlInput1">password</label>
                                    <input type="password" className="form-control"  placeholder="password" />
                                </div>
                                <div className="form-group px-3">
                                    <label htmlFor="exampleFormControlInput1">Confirm password</label>
                                    <input type="password" className="form-control"  placeholder="confirm password" />
                                </div>

                                <div className="d-flex justify-content-center" style={{
                                    height: '40px', margin: 'auto', cursor: "pointer",
                                    width: "90%", backgroundColor: 'red', position: 'relative'
                                }}>
                                    <button type="submit" className="btn" style={{ backgroundColor: 'red', color: 'white' }}>Register</button>
                                </div>
                            </form>
                        </div>
                        <div style={{ backgroundColor: '#fff', position: "relative", width: '100%', height: '350px', padding: "5px" }} className="tab-pane justify-content-center" id="nav-login">

                            <form>

                                <div className="form-group px-3">
                                    <label htmlFor="exampleFormControlInput1">User Name</label>
                                    <input type="name" className="form-control"  placeholder="name" />
                                </div>
                                <div className="form-group px-3">
                                    <label htmlFor="exampleFormControlInput1">password</label>
                                    <input type="password" className="form-control"  placeholder="password" />
                                </div>
                                <div className="form-row px-3">
                                <div className="col-auto my-1">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-check-label" htmlFor="autoSizingCheck2">
                                            Remember me
                                    </label>
                                    </div>
                                </div>
                               
                                    <div className="col-auto my-1">
                                        <a href="#" style={{textDecoration:'none', color:HoverColor?'red':'#bbbebf'}} onMouseEnter={()=>HandleEnter()} onMouseLeave={()=>HandleLeave()}>Forget Passord?</a>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center" style={{
                                    height: '40px', margin: 'auto', cursor: "pointer",
                                    width: "90%", backgroundColor: 'red', position: 'relative'
                                }}>
                                    <button type="submit" className="btn" style={{ backgroundColor: 'red', color: 'white' }}>Register</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )

}
export default ShowLogin