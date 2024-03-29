import React from 'react';
import { View, ScrollView, StyleSheet, Text, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from 'react-native-chart-kit'
import { LineChart, Path } from 'react-native-svg-charts';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#66B2FF'
    },
    linechart: {
        margin: 5,
        height: 200,
        backgroundColor: 'white',
        borderColor: 'black',
        borderRadius: 10
    },
    box_info: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#0066cc',
        margin: 10
    },
    text_info: {
        marginTop: 20,
        fontSize: 16,
        color: '#ffffff',
        alignItems: 'center'
    }
})


export default class dashboard_summaryScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: 'นาย',
            firstname: 'AAAAAA',
            lastname: 'BBBBBB',
            age: '30',
            position: 'ตึกICU เตียง4'
        }
    }

    render() {
        return (
            <ScrollView style={style.container} >
                <View style={style.box_info}>
                    <Image
                        source={require('../../src/img/boy.png')}
                        style={{ width: 100, height: 100, marginTop: 20, marginBottom: 20 }}
                    />
                    <View style={{ marginLeft: 30, marginRight: 20 }}>
                        <Text style={style.text_info}>
                            ชื่อ : {this.state.title}  {this.state.firstname}  {this.state.lastname}
                        </Text>
                        <Text style={style.text_info}>
                            อายุ : {this.state.age}
                        </Text>
                        <Text style={style.text_info}>
                            สถานที่ : {this.state.position}
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={style.text_info}>
                        ECG GRAPH
                    </Text>
                </View>
                <LineChart
                    style={style.linechart}
                    data={ecg}
                    contentInset={{ top: 20, bottom: 20 }}
                    svg={{
                        stroke: 'rgb(134, 65, 244)',
                        strokeWidth: 2
                    }} />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={style.text_info}>
                        อัพเดทล่าสุด : {new Date().toTimeString()}
                    </Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'row', margin: 20, backgroundColor: '#0066cc' }}>
                        <Text style={{ marginTop: 15, marginLeft: 10, color: '#ffffff' }}>
                            STATUS :
                        </Text>
                        <Icon name="thumbs-up" size={30} color="#11AA55" style={{ margin: 5 }} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', margin: 20, backgroundColor: '#0066cc' }}>
                        <Icon name="heart" size={30} color="#11AA55" style={{ marginTop: 10, marginLeft: 10 }} />
                        <Text style={{ margin: 15, color: '#ffffff' }}>
                            : {Math.round(Math.random() * 100 + 50)}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}


const ecg = [

    -0.205,
    -0.205,
    -0.225,
    -0.235,
    -0.24,
    -0.23,
    -0.215,
    -0.24
    -0.24,
    -0.25,
    -0.235,
    -0.21,
    -0.2,
    -0.22,
    -0.255,
    -0.275,
    -0.285,
    -0.3,
    -0.305,
    -0.32,
    -0.33,
    -0.325,
    -0.32,
    -0.33,
    -0.33,
    -0.335,
    -0.34,
    -0.345,
    -0.34,
    -0.335,
    -0.32,
    -0.325,
    -0.335,
    -0.345,
    -0.345,
    -0.345,
    -0.335,
    -0.34,
    -0.345,
    -0.355,
    -0.34,
    -0.34,
    -0.34,
    -0.34,
    -0.345,
    -0.355,
    -0.365,
    -0.37,
    -0.405,
    -0.445,
    -0.48,
    -0.495,
    -0.52,
    -0.535,
    -0.505,
    -0.415,
    -0.28,
    -0.135,
    0.065,
    0.3,
    0.58,
    0.81,
    0.945,
    0.92,
    0.775,
    0.445,
    0.02,
    -0.295,
    -0.445,
    -0.47,
    -.425,
    -0.38,
    -0.36,
    -0.36,
    -0.37,
    -0.38,
    -0.38,
    -0.375,
    -0.37,
    -0.365,
    -0.37,
    -0.385,
    -0.385,
    -0.375,
    -0.37,
    -0.37,
    -0.385,
    -0.395,
    -0.385,
    -0.385,
    -0.39,
    -0.385,
    -0.395,
    -0.41,
    -0.4,
    -0.395,
    -0.38,
    -0.395,
    -0.395,
    -0.4,
    -0.4,
    -0.395,
    -0.39,
    -0.39,
    -0.395,
    -0.405,
    -0.39,
    -0.385,
    -0.375,
    -0.375,
    -0.38,
    -0.39,
    -0.385,
    -0.205,
    -0.205,
    -0.225,
    -0.235,
    -0.24,
    -0.23,
    -0.215,
    -0.24
    -0.24,
    -0.25,
    -0.235,
    -0.21,
    -0.2,
    -0.22,
    -0.255,
    -0.275,
    -0.285,
    -0.3,
    -0.305,
    -0.32,
    -0.33,
    -0.325,
    -0.32,
    -0.33,
    -0.33,
    -0.335,
    -0.34,
    -0.345,
    -0.34,
    -0.335,
    -0.32,
    -0.325,
    -0.335,
    -0.345,
    -0.345,
    -0.345,
    -0.335,
    -0.34,
    -0.345,
    -0.355,
    -0.34,
    -0.34,
    -0.34,
    -0.34,
    -0.345,
    -0.355,
    -0.365,
    -0.37,
    -0.405,
    -0.445,
    -0.48,
    -0.495,
    -0.52,
    -0.535,
    -0.505,
    -0.415,
    -0.28,
    -0.135,
    0.065,
    0.3,
    0.58,
    0.81,
    0.945,
    0.92,
    0.775,
    0.445,
    0.02,
    -0.295,
    -0.445,
    -0.47,
    -0.425,
    -0.38,
    -0.36,
    -0.36,
    -0.37,
    -0.38,
    -0.38,
    -0.375,
    -0.37,
    -0.365,
    -0.37,
    -0.385,
    -0.385,
    -0.375,
    -0.37,
    -0.37,
    -0.385,
    -0.395,
    -0.385,
    -0.385,
    -0.39,
    -0.385,
    -0.395,
    -0.41,
    -0.4,
    -0.395,
    -0.38,
    -0.395,
    -0.395,
    -0.4,
    -0.4,
    -0.395,
    -0.39,
    -0.39,
    -0.395,
    -0.405,
    -0.39,
    -0.385,
    -0.375,
    -0.375,
    -0.38,
    -0.39,
    -0.385,
    -0.205,
    -0.205,
    -0.225,
    -0.235,
    -0.24,
    -0.23,
    -0.215,
    -0.24
    -0.24,
    -0.25,
    -0.235,
    -0.21,
    -0.2,
    -0.22,
    -0.255,
    -0.275,
    -0.285,
    -0.3,
    -0.305,
    -0.32,
    -0.33,
    -0.325,
    -0.32,
    -0.33,
    -0.33,
    -0.335,
    -0.34,
    -0.345,
    -0.34,
    -0.335,
    -0.32,
    -0.325,
    -0.335,
    -0.345,
    -0.345,
    -0.345,
    -0.335,
    -0.34,
    -0.345,
    -0.355,
    -0.34,
    -0.34,
    -0.34,
    -0.34,
    -0.345,
    -0.355,
    -0.365,
    -0.37,
    -0.405,
    -0.445,
    -0.48,
    -0.495,
    -0.52,
    -0.535,
    -0.505,
    -0.415,
    -0.28,
    -0.135,
    0.065,
    0.3,
    0.58,
    0.81,
    0.945,
    0.92,
    0.775,
    0.445,
    0.02,
    -0.295,
    -0.445,
    -0.47,
    -.425,
    -0.38,
    -0.36,
    -0.36,
    -0.37,
    -0.38,
    -0.38,
    -0.375,
    -0.37,
    -0.365,
    -0.37,
    -0.385,
    -0.385,
    -0.375,
    -0.37,
    -0.37,
    -0.385,
    -0.395,
    -0.385,
    -0.385,
    -0.39,
    -0.385,
    -0.395,
    -0.41,
    -0.4,
    -0.395,
    -0.38,
    -0.395,
    -0.395,
    -0.4,
    -0.4,
    -0.395,
    -0.39,
    -0.39,
    -0.395,
    -0.405,
    -0.39,
    -0.385,
    -0.375,
    -0.375,
    -0.38,
    -0.39,
    -0.385,
    -0.205,
    -0.205,
    -0.225,
    -0.235,
    -0.24,
    -0.23,
    -0.215,
    -0.24
    -0.24,
    -0.25,
    -0.235,
    -0.21,
    -0.2,
    -0.22,
    -0.255,
    -0.275,
    -0.285,
    -0.3,
    -0.305,
    -0.32,
    -0.33,
    -0.325,
    -0.32,
    -0.33,
    -0.33,
    -0.335,
    -0.34,
    -0.345,
    -0.34,
    -0.335,
    -0.32,
    -0.325,
    -0.335,
    -0.345,
    -0.345,
    -0.345,
    -0.335,
    -0.34,
    -0.345,
    -0.355,
    -0.34,
    -0.34,
    -0.34,
    -0.34,
    -0.345,
    -0.355,
    -0.365,
    -0.37,
    -0.405,
    -0.445,
    -0.48,
    -0.495,
    -0.52,
    -0.535,
    -0.505,
    -0.415,
    -0.28,
    -0.135,
    0.065,
    0.3,
    0.58,
    0.81,
    0.945,
    0.92,
    0.775,
    0.445,
    0.02,
    -0.295,
    -0.445,
    -0.47,
    -.425,
    -0.38,
    -0.36,
    -0.36,
    -0.37,
    -0.38,
    -0.38,
    -0.375,
    -0.37,
    -0.365,
    -0.37,
    -0.385,
    -0.385,
    -0.375,
    -0.37,
    -0.37,
    -0.385,
    -0.395,
    -0.385,
    -0.385,
    -0.39,
    -0.385,
    -0.395,
    -0.41,
    -0.4,
    -0.395,
    -0.38,
    -0.395,
    -0.395,
    -0.4,
    -0.4,
    -0.395,
    -0.39,
    -0.39,
    -0.395,
    -0.405,
    -0.39,
    -0.385,
    -0.375,
    -0.375,
    -0.38,
    -0.39,
    -0.385,
    -0.205,
    -0.205,
    -0.225,
    -0.235,
    -0.24,
    -0.23,
    -0.215,
    -0.24
    -0.24,
    -0.25,
    -0.235,
    -0.21,
    -0.2,
    -0.22,
    -0.255,
    -0.275,
    -0.285,
    -0.3,
    -0.305,
    -0.32,
    -0.33,
    -0.325,
    -0.32,
    -0.33,
    -0.33,
    -0.335,
    -0.34,
    -0.345,
    -0.34,
    -0.335,
    -0.32,
    -0.325,
    -0.335,
    -0.345,
    -0.345,
    -0.345,
    -0.335,
    -0.34,
    -0.345,
    -0.355,
    -0.34,
    -0.34,
    -0.34,
    -0.34,
    -0.345,
    -0.355,
    -0.365,
    -0.37,
    -0.405,
    -0.445,
    -0.48,
    -0.495,
    -0.52,
    -0.535,
    -0.505,
    -0.415,
    -0.28,
    -0.135,
    0.065,
    0.3,
    0.58,
    0.81,
    0.945,
    0.92,
    0.775,
    0.445,
    0.02,
    -0.295,
    -0.445,
    -0.47,
    -.425,
    -0.38,
    -0.36,
    -0.36,
    -0.37,
    -0.38,
    -0.38,
    -0.375,
    -0.37,
    -0.365,
    -0.37,
    -0.385,
    -0.385,
    -0.375,
    -0.37,
    -0.37,
    -0.385,
    -0.395,
    -0.385,
    -0.385,
    -0.39,
    -0.385,
    -0.395,
    -0.41,
    -0.4,
    -0.395,
    -0.38,
    -0.395,
    -0.395,
    -0.4,
    -0.4,
    -0.395,
    -0.39,
    -0.39,
    -0.395,
    -0.405,
    -0.39,
    -0.385,
    -0.375,
    -0.375,
    -0.38,
    -0.39,
    -0.385,
    -0.205,
    -0.205,
    -0.225,
    -0.235,
    -0.24,
    -0.23,
    -0.215,
    -0.24
    -0.24,
    -0.25,
    -0.235,
    -0.21,
    -0.2,
    -0.22,
    -0.255,
    -0.275,
    -0.285,
    -0.3,
    -0.305,
    -0.32,
    -0.33,
    -0.325,
    -0.32,
    -0.33,
    -0.33,
    -0.335,
    -0.34,
    -0.345,
    -0.34,
    -0.335,
    -0.32,
    -0.325,
    -0.335,
    -0.345,
    -0.345,
    -0.345,
    -0.335,
    -0.34,
    -0.345,
    -0.355,
    -0.34,
    -0.34,
    -0.34,
    -0.34,
    -0.345,
    -0.355,
    -0.365,
    -0.37,
    -0.405,
    -0.445,
    -0.48,
    -0.495,
    -0.52,
    -0.535,
    -0.505,
    -0.415,
    -0.28,
    -0.135,
    0.065,
    0.3,
    0.58,
    0.81,
    0.945,
    0.92,
    0.775,
    0.445,
    0.02,
    -0.295,
    -0.445,
    -0.47,
    -.425,
    -0.38,
    -0.36,
    -0.36,
    -0.37,
    -0.38,
    -0.38,
    -0.375,
    -0.37,
    -0.365,
    -0.37,
    -0.385,
    -0.385,
    -0.375,
    -0.37,
    -0.37,
    -0.385,
    -0.395,
    -0.385,
    -0.385,
    -0.39,
    -0.385,
    -0.395,
    -0.41,
    -0.4,
    -0.395,
    -0.38,
    -0.395,
    -0.395,
    -0.4,
    -0.4,
    -0.395,
    -0.39,
    -0.39,
    -0.395,
    -0.405,
    -0.39,
    -0.385,
    -0.375,
    -0.375,
    -0.38,
    -0.39,
    -0.385,
    -0.205,
    -0.205,
    -0.225,
    -0.235,
    -0.24,
    -0.23,
    -0.215,
    -0.24
    -0.24,
    -0.25,
    -0.235,
    -0.21,
    -0.2,
    -0.22,
    -0.255,
    -0.275,
    -0.285,
    -0.3,
    -0.305,
    -0.32,
    -0.33,
    -0.325,
    -0.32,
    -0.33,
    -0.33,
    -0.335,
    -0.34,
    -0.345,
    -0.34,
    -0.335,
    -0.32,
    -0.325,
    -0.335,
    -0.345,
    -0.345,
    -0.345,
    -0.335,
    -0.34,
    -0.345,
    -0.355,
    -0.34,
    -0.34,
    -0.34,
    -0.34,
    -0.345,
    -0.355,
    -0.365,
    -0.37,
    -0.405,
    -0.445,
    -0.48,
    -0.495,
    -0.52,
    -0.535,
    -0.505,
    -0.415,
    -0.28,
    -0.135,
    0.065,
    0.3,
    0.58,
    0.81,
    0.945,
    0.92,
    0.775,
    0.445,
    0.02,
    -0.295,
    -0.445,
    -0.47,
    -.425,
    -0.38,
    -0.36,
    -0.36,
    -0.37,
    -0.38,
    -0.38,
    -0.375,
    -0.37,
    -0.365,
    -0.37,
    -0.385,
    -0.385,
    -0.375,
    -0.37,
    -0.37,
    -0.385,
    -0.395,
    -0.385,
    -0.385,
    -0.39,
    -0.385,
    -0.395,
    -0.41,
    -0.4,
    -0.395,
    -0.38,
    -0.395,
    -0.395,
    -0.4,
    -0.4,
    -0.395,
    -0.39,
    -0.39,
    -0.395,
    -0.405,
    -0.39,
    -0.385,
    -0.375,
    -0.375,
    -0.38,
    -0.39,
    -0.385,
    -0.205,
    -0.205,
    -0.225,
    -0.235,
    -0.24,
    -0.23,
    -0.215,
    -0.24
    -0.24,
    -0.25,
    -0.235,
    -0.21,
    -0.2,
    -0.22,
    -0.255,
    -0.275,
    -0.285,
    -0.3,
    -0.305,
    -0.32,
    -0.33,
    -0.325,
    -0.32,
    -0.33,
    -0.33,
    -0.335,
    -0.34,
    -0.345,
    -0.34,
    -0.335,
    -0.32,
    -0.325,
    -0.335,
    -0.345,
    -0.345,
    -0.345,
    -0.335,
    -0.34,
    -0.345,
    -0.355,
    -0.34,
    -0.34,
    -0.34,
    -0.34,
    -0.345,
    -0.355,
    -0.365,
    -0.37,
    -0.405,
    -0.445,
    -0.48,
    -0.495,
    -0.52,
    -0.535,
    -0.505,
    -0.415,
    -0.28,
    -0.135,
    0.065,
    0.3,
    0.58,
    0.81,
    0.945,
    0.92,
    0.775,
    0.445,
    0.02,
    -0.295,
    -0.445,
    -0.47,
    -.425,
    -0.38,
    -0.36,
    -0.36,
    -0.37,
    -0.38,
    -0.38,
    -0.375,
    -0.37,
    -0.365,
    -0.37,
    -0.385,
    -0.385,
    -0.375,
    -0.37,
    -0.37,
    -0.385,
    -0.395,
    -0.385,
    -0.385,
    -0.39,
    -0.385,
    -0.395,
    -0.41,
    -0.4,
    -0.395,
    -0.38,
    -0.395,
    -0.395,
    -0.4,
    -0.4,
    -0.395,
    -0.39,
    -0.39,
    -0.395,
    -0.405,
    -0.39,
    -0.385,
    -0.375,
    -0.375,
    -0.38,
    -0.39,
    -0.385
]