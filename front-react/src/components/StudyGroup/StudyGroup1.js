import React, { Component } from "react";
import { Link, Switch } from "react-router-dom";
import "../../css/StudyGroup.css"
import TopNav from "../nav/TopNav";

class StudyGroup1 extends React.Component {
    render(){
        return(
            <div>
                <TopNav />
                <div className="GroupName">그룹이름 : 스터디그룹1</div>
                <div className="Groups">
                    <div className="controller">
                        <br/>
                        &nbsp; 공지사항<br/>
                        &nbsp; 학습종료<br/>
                        &nbsp; 스터디룸 탈퇴<br/>
                        &nbsp; 화면 공개 설정<br/>
                        &nbsp; 스터디룸 설정<br/>
                    </div>
                    <div className="block2">
                        rtc 완성되면 캠 들어갈 자리
                    </div>

                    
                </div>
                <div className="footer">
                    푸터자리
                </div>
            </div>
        )
    }
    
}

export default StudyGroup1;