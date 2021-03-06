import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { vw, vh } from 'react-native-css'
import Div100vh from 'react-div-100vh'
import jwt_decode from 'jwt-decode'
import { patient_home } from '../UserFunctions'
import constantData from './History_Sleep.json';
import Preview_1 from './Preview_1';
import Preview_2 from './Preview_2';
import Preview_3 from './Preview_3';
import _Preview_2 from './_Preview_2';
import _Preview_3 from './_Preview_3';
import Preview_4 from './Preview_4';
import Preview_5 from './Preview_5';
import '../../index.css';
import '../css/styles.css';
//import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

import Highcharts from 'highcharts' //npm install highcharts-more --save
import * as HighchartsMore from "highcharts/highcharts-more"
import Highstock from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official' //npm install highcharts-react-official

HighchartsMore(Highcharts)
HighchartsMore(Highstock)
//var {vw, vh, vmin, vmax} = require('react-native-viewport-units');

var NewArray = new Array();
NewArray = window.location.href.split('/');
const userid =  NewArray[NewArray.length-1];
console.log(userid);

class Mainview extends Component {
    constructor() {
        super()
        this.onClick = this.handleClick.bind(this);
        //console.log(this.props.match.params.id);
        this.state = {
            name: '',
            imagepath:'image/users/empty',
            birth:'',
            sex: '',
            age: '',
            blood:'',
            disease:'',
            address:'',
            phone:'',
            smoke:'',
            chooser: 'chooser_1',
            id: userid
        }
        var NewArray = new Array();
　      NewArray = window.location.href.split('/');
        //console.log(NewArray[NewArray.length-1]);
        const userid =  NewArray[NewArray.length-1];
        var size = 0;
        patient_home(userid).then(res => {
            console.log(res);
            //console.log(res[3] != undefined ? 1 : 0);
            this.setState({
                name: res[0] != undefined ? res[0].name : '無紀錄',
                imagepath: res[0] != undefined ? res[0].imagepath : null,
                birth: res[0] != undefined ? res[0].birth : '無紀錄',
                sex: res[0] != undefined ? res[0].sex : '無紀錄',
                age: res[0] != undefined ? res[0].age : '無紀錄',
                blood: res[0] != undefined ? res[0].blood : '無紀錄',
                disease: res[0] != undefined ? res[0].disease : '無紀錄',
                phone: res[0] != undefined ? res[0].phone : '無紀錄',
                smoke: res[0] != undefined ? res[0].smoke : '無紀錄',
                address: res[0] != undefined ? res[0].address : '無紀錄',
                id: userid
            })
            console.log(this.state.imagepath);
            this.forceUpdate();
        })

    }
    componentDidMount() {

    }

    handleClick (e) {
        this.setState({chooser: e.target.id})
    }

    render () {
        let preview_2,preview_3;
        preview_2 = <_Preview_2 />
        preview_3 = <_Preview_3 />
        const chooser_1 = (
            <div>
            <div className="chooser">
                <div id="chooser_1" className="choosed">當前數據</div>
                <div onClick={this.handleClick.bind(this)}  className="unchoosed" id="chooser_2">歷史紀錄</div>
                <div onClick={this.handleClick.bind(this)}  className="unchoosed" id="chooser_3">疾病風險</div>
                <div onClick={this.handleClick.bind(this)} className="unchoosed" id="chooser_4">音檔</div>
                <div onClick={this.handleClick.bind(this)} className="unchoosed" id="chooser_5">相簿</div>
            </div>
            <Preview_1 />
            </div>
        )

        const chooser_2 = (
            <div>
            <div className="chooser">
                <div onClick={this.handleClick.bind(this)} className="unchoosed"id="chooser_1" >當前數據</div>
                <div id="chooser_2" className="choosed">歷史紀錄</div>
                <div onClick={this.handleClick.bind(this)} className="unchoosed" id="chooser_3">疾病風險</div>
                <div onClick={this.handleClick.bind(this)} className="unchoosed" id="chooser_4">音檔</div>
                <div onClick={this.handleClick.bind(this)} className="unchoosed" id="chooser_5">相簿</div>
            </div>
                {preview_2}
            </div>
        )
        const chooser_3 = (
            <div>
            <div className="chooser">
                <div onClick={this.handleClick.bind(this)} className="unchoosed" id="chooser_1" >當前數據</div>
                <div onClick={this.handleClick.bind(this)} className="unchoosed" id="chooser_2">歷史紀錄</div>
                <div id="chooser_3" className="choosed">疾病風險</div>
                <div onClick={this.handleClick.bind(this)} className="unchoosed" id="chooser_4">音檔</div>
                <div onClick={this.handleClick.bind(this)} className="unchoosed" id="chooser_5">相簿</div>
            </div>
            {preview_3}
            </div>
        )
        const chooser_4 = (
            <div>
            <div className="chooser">
                <div onClick={this.handleClick.bind(this)} className="unchoosed" id="chooser_1" >當前數據</div>
                <div onClick={this.handleClick.bind(this)} className="unchoosed" id="chooser_2">歷史紀錄</div>
                <div onClick={this.handleClick.bind(this)} className="unchoosed" id="chooser_3">疾病風險</div>
                <div id="chooser_4" className="choosed">音檔</div>
                <div onClick={this.handleClick.bind(this)} className="unchoosed" id="chooser_5">相簿</div>
            </div>
            <Preview_4 />
            </div>
        )
        const chooser_5 = (
            <div>
            <div className="chooser">
                <div onClick={this.handleClick.bind(this)} className="unchoosed" id="chooser_1" >當前數據</div>
                <div onClick={this.handleClick.bind(this)} className="unchoosed" id="chooser_2">歷史紀錄</div>
                <div onClick={this.handleClick.bind(this)} className="unchoosed" id="chooser_3">疾病風險</div>
                <div onClick={this.handleClick.bind(this)} className="unchoosed" id="chooser_4">音檔</div>
                <div id="chooser_5" className="choosed">相簿</div>
            </div>
            <Preview_5 />
            </div>
        )
        var configs = {
            chart: {
                type: 'bar',
                height: 300,
                width: 600
            },

            title: {
                text: ''
            },

            xAxis: {
                categories: ['Sleep State']
            },

            yAxis: {
                min: 0,
                title: {
                    text: 'Total sleep time (min)'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },

            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },

            plotOptions: {
                bar: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },

            series: [
                {
                    name: 'Deep',
                    data: [this.state.StagesDeep]
                },
                {
                    name: 'Light',
                    data: [this.state.StagesLight]
                },
                {
                    name: 'Rem',
                    data: [this.state.StagesRem]
                },
                {
                    name: 'Wake',
                    data: [this.state.StagesWake]
                },
            ]
        }
        var configs_2 = {
            chart: {
                type: 'bar',
                marginTop: 40,
                marginBottom: 80,
                plotBorderWidth: 1,
                height: 300,
                width: 600
            },

            legend: {
                y: 15
            },

            title: {
                text: '',
            },

            xAxis: {
                categories: ['Calories','Active']
            },

            yAxis: [
                {
                    title: {
                        text: 'Time (min)'
                    },
                    stackLabels: {
                        enabled: true,
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    }
                },
                {
                    title: {
                        text: 'calories (kcal)'
                    },
                    opposite: true
                }
            ],

            plotOptions: {
                bar: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },

            series: [
                {
                    type: 'bar',
                    name: 'Lightly Active',
                    data: [0,this.state.LightlyActiveMinutes]
                },
                {
                    type: 'bar',
                    name: 'Fairly Active',
                    data: [0,this.state.FairlyActiveMinutes]
                },
                {
                    type: 'bar',
                    name: 'Very Active',
                    data: [0,this.state.VeryActiveMinutes]
                },
                {
                    type: 'bar',
                    name: 'Calorie',
                    data: [this.state.CaloriesOut,0],
                    dataLabels: {
                        enabled: true,
                    },
                    yAxis: 1
                }
            ]
        }
        var configs_3 = {
            chart: {
                type: 'column'
            },
            legend: {
                enabled: true,
                align: 'center',
                symbolWidth: 16,
                symbolHeight: 16,
                symbolRadius: 5,
                itemStyle:{
                    "fontSize": "14px"
                }
            },
            rangeSelector : {
                  buttons: [
                  { type: 'day', count: 1, text: '1 d'},
                  { type: 'day', count: 7, text: '1 w'},
                  { type: 'month', count: 1, text: '1 m'},
                  { type: 'month', count: 3, text: '3 m'},
                  { type: 'all', text: 'All'}
                  ],
                  selected : 5
              },

            title : {
                text : ''
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Minutes'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            global: {
                useUTC: false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: true,
                filename: ""
            },
            plotOptions: {
                series: {
                    stacking: 'normal',
                    dataLabels: {
                        style: {
                            textOutline:"none"
                        },
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            navigator: {
                enabled: true,
                series: {
                    type: 'column'
                }
            },

            series: [
                {
                    name: 'Deep',
                    data: constantData.Deep,
                    tooltip: {
                        valueDecimals: 2
                    }
                },
                {
                    name: 'Light',
                    data: constantData.Light,
                    tooltip: {
                        valueDecimals: 2
                    }
                },
                {
                    name: 'Rem',
                    data: constantData.Rem,
                    tooltip: {
                        valueDecimals: 2
                    }
                },
                {
                    name: 'Wake',
                    data: constantData.Wake,
                    tooltip: {
                        valueDecimals: 2
                    }
                }
            ]
        }
        return (
            <div>
                <div className="basicInfo">
                    <div><img src={ require('../' + this.state.imagepath + '.png') } className="photo"/></div>
                    <a className="name" > {this.state.name}</a>
                    <br/><br/>
                    <p>性別： {this.state.sex}</p>
                    <p>年齡： {this.state.age}</p>
                    <p>生日： {this.state.birth}</p>
                    <p>血型： {this.state.blood}</p>
                    <p>病史： {this.state.disease}</p>
                    <p>電話： {this.state.phone}</p>
                    <p>地址： {this.state.address}</p>
                </div>
                {this.state.chooser == "chooser_1" ? chooser_1 : (this.state.chooser == "chooser_2" ? chooser_2 : (this.state.chooser == "chooser_3" ? chooser_3 : (this.state.chooser == "chooser_4" ? chooser_4 : chooser_5)))}

            </div>
        )
    }
}

export default Mainview
