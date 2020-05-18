import React, {Fragment, useContext} from 'react';
import SectionHeader from '../components/Content/Header/Header';
import {Icon} from 'semantic-ui-react';
import Content from '../components/Layout/ContainerOfContent/Content';
import {emptyShiftForm} from "../../lib/domain/Entity/EmptyShiftForm/EmptyShiftForm";
import {appContext} from "../App";
import {SingleInput} from "../components/Content/Input/SingleInput";
import Constants from '../../Constants';

function Team() {
    const teamForm = emptyShiftForm.team;
    const {builder} = useContext(appContext);
    const controller = builder.createBaseController(teamForm);

    function onInputChange(property: string, text: string) {
        controller.setPropertyValue(property, text);
    }

    return (
        <Fragment>
            <SectionHeader>
                <Icon name='users' size='big'/>
                <span className='title'>Komandos sudėtis</span>
            </SectionHeader>
            <Content>
                <div className='sixteen wide column'>
                    <SingleInput title={Constants.TEAM_ID}
                                 property={'id'}
                                 value={teamForm.id}
                                 onChange={onInputChange}
                    />
                </div>
                <div className='sixteen wide column'>
                    <SingleInput title={Constants.LEADER}
                                 property={'leader'}
                                 value={teamForm.leader}
                                 onChange={onInputChange}
                    />
                </div>
                <div className='sixteen wide column'>
                    <SingleInput title={Constants.DRIVER}
                                 property={'driver'}
                                 value={teamForm.driver}
                                 onChange={onInputChange}
                    />
                </div>
            </Content>
        </Fragment>
    );
}

export default Team;
