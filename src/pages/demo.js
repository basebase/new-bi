/**
 * Created by Joker on 18/12/10.
 */

import React from 'react'
import { Icon, Button } from 'antd'
import '../../assert/css/pages/demo.css'

const ButtonGroup = Button.Group;


export default class Demo extends React.Component {

    constructor(props) {
        super(props)
    }

    handleClick = (e) => {
        console.log("e", e)
    }

    render() {
        return (
            <div className="wrapper">
                <div className="chart-type">

                    <ButtonGroup>
                        <Button onClick={this.handleClick} className="chart-size" type="primary" icon="pie-chart" />
                        <Button onClick={this.handleClick} className="chart-size" type="primary" icon="bar-chart" />
                        <Button onClick={this.handleClick} className="chart-size" type="primary" icon="line-chart" />
                        <Button onClick={this.handleClick} className="chart-size" type="primary" icon="area-chart" />
                    </ButtonGroup>
                </div>

                <div className="chart-show">

                </div>
            </div>
        )
    }
}