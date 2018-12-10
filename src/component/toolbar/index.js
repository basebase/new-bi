/**
 * Created by Joker on 18/12/9.
 */


import React from 'react'
import '../../../assert/css/toolbar/index.css'

export default class ToolBar extends React.Component {
    render() {
        return (
            <div className="nav-top">
                <ul>
                    <li>
                        <a href="#">个人信息</a>
                    </li>
                    <li>
                        <a href="#">退出</a>
                    </li>
                </ul>
            </div>
        )
    }
}