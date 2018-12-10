/**
 * Created by Joker on 18/12/10.
 */

import React from 'react'
import '../../../assert/css/sidebar/index.css'

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <ul>
                    <li>
                        <a href="#">仪表盘</a>
                    </li>
                    <li>
                        <a href="#">数据预览</a>
                    </li>
                </ul>
            </div>
        )
    }
}