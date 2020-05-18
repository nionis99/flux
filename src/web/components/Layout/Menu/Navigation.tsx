import React from 'react';
import {Icon, Menu} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';
import Constants from '../../../../Constants';

export default function Navigation() {
    return (
        <div className='navigation'>
            <Menu icon='labeled' size='mini'>
                <NavLink to={Constants.APP_PAGES.TEAM}>
                    <Menu.Item activeclassname='active'>
                        <Icon name='users'/>Komanda
                    </Menu.Item>
                </NavLink>
                <NavLink to={Constants.APP_PAGES.CLEANING}>
                    <Menu.Item activeclassname='active'>
                        <Icon name='tint'/>Valymas
                    </Menu.Item>
                </NavLink>
                <NavLink to={Constants.APP_PAGES.MEDICAL_EQUIPMENT}>
                    <Menu.Item activeclassname='active'>
                        <Icon name='medkit'/>Įranga
                    </Menu.Item>
                </NavLink>
                <NavLink to={Constants.APP_PAGES.CAR_EQUIPMENT}>
                    <Menu.Item activeclassname='active'>
                        <Icon name='ambulance'/>Automobilis
                    </Menu.Item>
                </NavLink>
            </Menu>
        </div>
    );
}
