import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>오픈소스 관련 프로젝트</h2>

              <p>안녕하세요 충북대학교 컴퓨터공학과 기계학습 동아리인 COSMIC에서
                기계학습 공부를 하고 있고 오픈소스 프로젝트를 참여하여 프로젝트를 수행하고
                있습니다.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>COSMIC 기계학습 오픈소스 동아리</span>
                    <br />
                    <span>
                    충북 청주시 서원구 충대로1 충북대학교 전자정보대학 컴퓨터공학과 E8-1동 3층 COSMIC 동아리방
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>010-0000-0000</span>
                    <br />
                    <span>yourname@naver.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>사용했던 소스 다운로드
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
