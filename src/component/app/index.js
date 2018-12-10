/**
 * Created by Joker on 18/12/10.
 */

import React from 'react'
import Sidebar from '../sidebar/index'
import ToolBar from '../toolbar/index'
import Footer from '../footer/index'
import Demo from '../../pages/demo'

import '../../../assert/css/base.css'

export default class App extends React.Component {

    render() {
        return (
            <div>
                <ToolBar/>
                <div className="wrapper">
                    <Sidebar/>
                    <div className="page-content">
                        <Demo />
                    </div>

                    <Footer />
                </div>
            </div>
        )
    }
}