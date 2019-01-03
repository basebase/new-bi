/**
 * Created by Joker on 18/12/10.
 */

import React from 'react'
import Sidebar from '../sidebar/index'
import ToolBar from '../toolbar/index'
import Footer from '../footer/index'

import '../../../assert/css/layout.css'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'


export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                <ToolBar/>
                <div className="wrapper">
                    <Sidebar/>
                    <div className="page-content">
                        {this.props.children}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}