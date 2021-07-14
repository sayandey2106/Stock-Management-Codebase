
import React from 'react';
import './dashboard.css';

import Card1 from './card1';
import Card2 from './card2';
import Table from './Table'

import EqualizerIcon from '@material-ui/icons/Equalizer';
import TodayIcon from '@material-ui/icons/Today';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';


function Dashboard() {
    return (
        <div className="dashboard">
        
        <div className="dashboard-heading">
          <h2>QUBI7 ADMIN DASHBOARD</h2>
        </div>

        <div className="dashboard-container">

          <div className="container-1">

            <div className="cards">
              <Card1 color={"card-one-1"} number={234} cardName={"Total Consumption"} />
              <Card1 color={"card-one-2"} number={20} cardName={"Total Due"} />
              <Card1 color={"card-one-3"} number={37} cardName={"Total Users"} />
            </div>

            

            <div className="table"><Table/></div>
            
          </div>

          <div className="container-2">

              <div className='row'>
              <Card2 color={"card-one-4"} symbol={<EqualizerIcon/>}  cardName={"Consumption/Month"} number={78}/>
              <Card2 color={"card-one-5"}  symbol={<TodayIcon/>} cardName={"Consumption/Day"} number={8}/>
              </div>

              <div className='row row-2'>
              <Card2 color={"card-one-5"}  symbol={<PersonAddIcon/>} cardName={"Pending Request"} number={17}/>
              <Card2 color={"card-one-4"}  symbol={<QueryBuilderIcon/>} cardName={"Coupon Validity"} number={30}/>
              </div>
     
          </div>

        </div>
      </div>
    )
}

export default Dashboard;
