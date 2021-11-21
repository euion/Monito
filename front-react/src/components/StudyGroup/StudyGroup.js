import React, { Component } from "react";
import { Link, Switch } from "react-router-dom";
import "../../css/StudyGroup.css"
import TopNav from "../nav/TopNav";

class StudyGroup extends React.Component {
    render(){
        return(
            <div>
                <TopNav />
                <div className="image"></div>
                <div className="search">
                    <input className="searchBar" placeholder="&nbsp; 스터디 그룹 검색" />
                    <button className="btn1"> 검색</button>
                </div>
                <div className="block">
                    <div className="groupBox">
                        <Link to="/StudyGroup1" className="link-text">
                        스터디그룹1
                        </Link>
                    </div>
                    <div className="groupBox">
                        <Link to="#" className="link-text">
                        스터디그룹2
                        </Link>
                    </div>
                    <div className="groupBox">
                        <Link to="#" className="link-text">
                        스터디그룹3
                        </Link>
                    </div>
                    
                </div>

                <div className="footer">
                    푸터자리
                </div>
            
            </div>
        )
    }
    
}

export default StudyGroup;