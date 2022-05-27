import React from 'react'
import './desktopProfile.css'
import Details from './details'


export default function DesktopProfile() {
    return (
         
         <div className="desktop">

<div class="container emp-profile ">
            <form>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://i.imgur.com/JgYD2nQ.jpg" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head text-center">
                                    <h5>
                                     Sayan Dey
                                    </h5>
                                    <h6>
                                        Web Developer and Designer
                                    </h6>
                                    <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                            
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work text-center">
                            <p>SKILLS</p>
                            <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>
                            <a href="">WordPress</a><br/>
                            <a href="">WooCommerce</a><br/>
                            <a href="">PHP, .Net</a><br/>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="profile-tab" id="myTabContent">
                            <Details/>
                         
                                 
                        </div>
                    </div>
                </div>
            </form>           
        </div>
         </div>
    )
}

