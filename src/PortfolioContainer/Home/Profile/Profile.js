/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Typical from 'react-typical'
import Yang from '../../../assets/Home/Yang.jpeg'
import Chunyu from '../../../assets/Home/Chunyu.jpeg'
import Yaorong from '../../../assets/Home/Yaorong.jpeg'
import Hanieh from '../../../assets/Home/Hanieh.jpeg'
import Yifei from '../../../assets/Home/Yifei.jpeg'
import './Profile.css'
function Profile(props) {
    return (
        <div className="profile-containter">
            <div className="profile-parent">
                <div className="profile-details">
                    {/* <div className="colz">
                        <div className="colz-icon">
                            <a href="https://www.linkedin.com/in/yifei-sun-534b3b128/" target="_blank">
                                <i className="fa fa-linkedin-square"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/chunyu-peng-52850110a/" target="_blank">
                                <i className="fa fa-linkedin-square"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/yaorong-xie/" target="_blank">
                                <i className="fa fa-linkedin-square"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/yang-jiang-828018b6/" target="_blank">
                                <i className="fa fa-linkedin-square"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/hanieh-arabzadeh-722572111/" target="_blank">
                                <i className="fa fa-linkedin-square"></i>
                            </a>
                        </div>
                    </div> */}

                    <div className="profile-details-name">
                        <span className="profile-text">
                            {" "}
                            Hello, We are Team <span className="highlighted-text">ACE</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="profile-text">
                        Team Members:
                            <div className="colz-icon">
                                <div>
                                    <div>
                                        <img src={Yifei} style={{width:40, height:40}}/>
                                    </div>
                                    <a href="https://www.linkedin.com/in/yifei-sun-534b3b128/" target="_blank">
                                        <i className="fa fa-linkedin-square"></i>
                                    </a>
                                </div>

                                <div>
                                    <div>
                                        <img src={Chunyu} style={{width:40, height:40}}/>
                                    </div>
                                    <a href="https://www.linkedin.com/in/chunyu-peng-52850110a/" target="_blank">
                                        <i className="fa fa-linkedin-square"></i>
                                    </a>
                                </div>

                                <div>
                                    <div>
                                        <img src={Yaorong} style={{width:40, height:40}}/>
                                    </div>
                                    <a href="https://www.linkedin.com/in/yaorong-xie/" target="_blank">
                                        <i className="fa fa-linkedin-square"></i>   
                                    </a>
                                </div>
                                
                                <div>
                                    <div>
                                        <img src={Yang} style={{width:40, height:40}}/>
                                    </div>
                                    <a href="https://www.linkedin.com/in/yang-jiang-828018b6/" target="_blank">
                                        <i className="fa fa-linkedin-square"></i>
                                    </a>
                                </div>
                                
                                <div>
                                    <div>
                                        <img src={Hanieh} style={{width:40, height:40}}/>
                                    </div>
                                    <a href="https://www.linkedin.com/in/hanieh-arabzadeh-722572111/" target="_blank">
                                        <i className="fa fa-linkedin-square"></i>
                                    </a>
                                </div>
                            </div>
                           <h1>
                               <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Hanieh Arabzadehghahyazi",
                                       1000,
                                        "Yifei Sun",
                                        1000,
                                        "Chunyu Peng",
                                        1000,
                                        "Yaorong Xie",
                                        1000,
                                        "Yang Jiang",
                                        1000
                                    ]}
                                />
                           </h1>
                           <div className="profile-role-tagline">
                           Random Access Memories is a single-player 2D shooting game. The player needs to fight against different types of enemies. Different types of enemies with various weapons and different levels of difficulty will be shown in the game. The player needs to move around the environment and kill all the enemies to reach the next level until it finds the data. The player will explore levels of different environment and learn how to fight against the enemies.
                           </div>
                        </span>
                    </div>
                    <div className="profile-options">
                        <a className="btn primary-btn" href='https://docs.google.com/spreadsheets/d/1F0f7bjUwphyKpSKR-KyxHOApKdNG8aL-fE3kz9QRXUk/edit#gid=1209633570'>Weekly PPT</a>
                        <a href="GDD.pdf" download="gdd.pdf" target="_blank">
                            <button className="btn primary-btn">Get GDD</button>
                        </a>
                        <a className="btn highlighted-btn" target="_blank" href='https://youtu.be/RKfLoY5t4wk'>Game Trailer</a>
                        <a href='https://www.youtube.com/watch?v=pw-TSv2-tn8' target="_blank">
                            <button className="btn highlighted-btn">Game Play</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    );
}

export default Profile;