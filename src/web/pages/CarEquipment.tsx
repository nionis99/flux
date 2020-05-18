import React, {Fragment, useContext} from 'react';
import SectionHeader from '../components/Content/Header/Header';
import {Icon} from 'semantic-ui-react';
import Content from '../components/Layout/ContainerOfContent/Content';
import RadioButtonOfProperty from '../components/Content/Checkbox/RadioButtonOfProperty';
import MultipleRadioButtonOfProperty from "../components/Content/Checkbox/MultipleRadioButtonOfProperty";
import {appContext} from '../App';
import {Textbox} from '../components/Content/Textbox/Textbox';
import Constants from '../../Constants';
import {emptyShiftForm} from "../../lib/domain/Entity/EmptyShiftForm/EmptyShiftForm";

function CarEquipment() {
    const carForm = emptyShiftForm.carEquipment;
    const {builder} = useContext(appContext);
    const controller = builder.createBaseController(carForm);

    function onClickOfProperty(property: string, value: boolean) {
        controller.setPropertyValue(property, value);
    }

    function onClickOfMultipleProperty(property: string, value: string) {
        controller.setPropertyValue(property, value);
    }

    function onTextboxChange(property: string, text: string) {
        controller.setPropertyValue(property, text);
    }

    return (
        <Fragment>
            <SectionHeader>
                <Icon name='ambulance' size='big'/>
                <span className='title'>Automobilio įrangos apžiūra priimant pamainą</span>
            </SectionHeader>
            <Content>
                <div className='eight wide column'>
                    <RadioButtonOfProperty
                        title='Navigacija'
                        choices={[Constants.WORKING, Constants.NOT_WORKING]}
                        property='navigationWorking'
                        onClick={onClickOfProperty}
                        value={carForm.navigationWorking}
                    />
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfProperty
                        title='Racija'
                        choices={[Constants.WORKING, Constants.NOT_WORKING]}
                        property='radioWorking'
                        onClick={onClickOfProperty}
                        value={carForm.radioWorking}/>
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfProperty
                        title='Kompiuteris'
                        choices={[Constants.WORKING, Constants.NOT_WORKING]}
                        property='computerWorking'
                        onClick={onClickOfProperty}
                        value={carForm.computerWorking}
                    />
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfProperty
                        title='Neštuvai'
                        choices={[Constants.WORKING, Constants.NOT_WORKING]}
                        property='stretchersWorking'
                        onClick={onClickOfProperty}
                        value={carForm.stretchersWorking}/>
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfProperty
                        title='Šviesos ir garso signalai'
                        choices={[Constants.WORKING, Constants.NOT_WORKING]}
                        property='lightAndSoundSignalsWorking'
                        onClick={onClickOfProperty}
                        value={carForm.lightAndSoundSignalsWorking}
                    />
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfProperty
                        title='Variklio alyvos lygis'
                        choices={[Constants.MASCULINE_SUITABLE, Constants.MASCULINE_UNSUITABLE]}
                        property='engineOilLevelAppropriate'
                        onClick={onClickOfProperty}
                        value={carForm.engineOilLevelAppropriate}/>
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfProperty
                        title='Šildymo ir aušinimo sistema'
                        choices={[Constants.FEMININE_SUITABLE, Constants.FEMININE_UNSUITABLE]}
                        property='heatingCoolingSystemWorking'
                        onClick={onClickOfProperty}
                        value={carForm.heatingCoolingSystemWorking}/>
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfProperty
                        title='Stabdžių sistema'
                        choices={[Constants.FEMININE_SUITABLE, Constants.FEMININE_UNSUITABLE]}
                        property='brakeSystemWorking'
                        onClick={onClickOfProperty}
                        value={carForm.brakeSystemWorking}/>
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfProperty
                        title='Pakabos būklė'
                        choices={[Constants.FEMININE_SUITABLE, Constants.FEMININE_UNSUITABLE]}
                        property='suspensionConditionGood'
                        onClick={onClickOfProperty}
                        value={carForm.suspensionConditionGood}/>
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfProperty
                        title='Padangų būklė'
                        choices={[Constants.FEMININE_SUITABLE, Constants.FEMININE_UNSUITABLE]}
                        property='tireConditionGood'
                        onClick={onClickOfProperty}
                        value={carForm.tireConditionGood}/>
                </div>
                <div className='sixteen wide column center aligned title'>
                    <MultipleRadioButtonOfProperty
                        title='Techninė apžiūra'
                        choices={[Constants.FEMININE_SUITABLE,
                            Constants.LESS_THAN_ONE_MONTH,
                            Constants.FEMININE_UNSUITABLE
                        ]}
                        property='technicalInspectionValidity'
                        enums={Constants.TECHNICAL_INSPECTION_ENUMS}
                        onClick={onClickOfMultipleProperty}
                        value={carForm.technicalInspectionValidity}/>
                </div>
                <Textbox
                    title='Smulkūs arba nepastebėti defektai pamainos perdavimo metu'
                    property='minorDefects'
                    value={carForm.minorDefects}
                    onChange={onTextboxChange}
                />
                <Textbox
                    title='Defektai reikalaujantys skubaus remonto'
                    property='criticalDefects'
                    value={carForm.criticalDefects}
                    onChange={onTextboxChange}
                />
            </Content>
        </Fragment>
    );
}

export default CarEquipment;
