/**
 * Created by Joker on 18/12/10.
 */

import React from 'react'
import { Menu, Icon, Button } from 'antd';
import { Link } from 'react-router-dom'
import { menu } from './menu'

const SubMenu = Menu.SubMenu;


export default class Sidebar extends React.Component {

    constructor(props) {
        super(props)
    }

    generateMenu = (menuList) => {
        return menuList.map((item) => {

            if (item.child) {
                return (
                    <SubMenu
                        key={item.key}
                        title={<span>{item.icon ? <Icon type={ item.icon } /> : ''}<span>{ item.name }</span></span>}>
                        { this.generateMenu(item.child) }
                    </SubMenu>
                )
            }

            return (
                <Menu.Item key={ item.key }>
                    <Link to={ item.link }>{ item.name }</Link>
                </Menu.Item>
            )
        })
    }


    render() {
        return (
            <div className="sidebar">
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    className="m"
                >

                    { this.generateMenu(menu) }

                </Menu>
            </div>
        )
    }
}