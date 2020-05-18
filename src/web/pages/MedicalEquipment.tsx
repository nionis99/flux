import React, {Fragment, useContext} from 'react';
import SectionHeader from '../components/Content/Header/Header';
import {Icon} from 'semantic-ui-react';
import Content from '../components/Layout/ContainerOfContent/Content';
import RadioButtonOfSubproperty from '../components/Content/Checkbox/RadioButtonOfSubproperty';
import {appContext} from '../App';
import RadioButtonOfProperty from '../components/Content/Checkbox/RadioButtonOfProperty';
import {Textbox} from '../components/Content/Textbox/Textbox';
import Constants from '../../Constants';
import {emptyShiftForm} from "../../lib/domain/Entity/EmptyShiftForm/EmptyShiftForm";

function MedicalEquipment() {
    const medicalEquipmentForm = emptyShiftForm.medicalEquipment;
    const {builder} = useContext(appContext);
    const controller = builder.createBaseController(medicalEquipmentForm);

    function onClickOfProperty(property: string, value: boolean) {
        controller.setPropertyValue(property, value);
    }

    function onClickOfSubproperty(property: string, subProperty: string, value: boolean) {
        controller.setSubpropertyValue(property, subProperty, value);
    }

    function onTextboxChange(property: string, text: string) {
        controller.setPropertyValue(property, text);
    }

    return (
        <Fragment>
            <SectionHeader>
                <Icon name='medkit' size='big'/>
                <span className='title'>Medicininės įrangos apžiūra priimant pamainą</span>
            </SectionHeader>
            <Content>
                <div className='sixteen wide column title'>
                    Defibriliatorius
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfSubproperty
                        choices={[Constants.WORKING, Constants.NOT_WORKING]}
                        property='defibrillator'
                        subproperty='inWorkingOrder'
                        value={medicalEquipmentForm.defibrillator.inWorkingOrder}
                        onClick={onClickOfSubproperty}
                    />
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfSubproperty
                        choices={[Constants.MASCULINE_CHARGED, Constants.MASCULINE_DISCHARGED]}
                        property='defibrillator'
                        subproperty='charged'
                        value={medicalEquipmentForm.defibrillator.charged}
                        onClick={onClickOfSubproperty}
                    />
                </div>
                <div className='sixteen wide column title'>
                    Lucas2
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfSubproperty
                        choices={[Constants.WORKING, Constants.NOT_WORKING]}
                        property='lucas'
                        subproperty='inWorkingOrder'
                        value={medicalEquipmentForm.lucas.inWorkingOrder}
                        onClick={onClickOfSubproperty}
                    />
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfSubproperty
                        choices={[Constants.MASCULINE_CHARGED, Constants.MASCULINE_DISCHARGED]}
                        property='lucas'
                        subproperty='charged'
                        value={medicalEquipmentForm.lucas.charged}
                        onClick={onClickOfSubproperty}
                    />
                </div>
                <div className='sixteen wide column title'>
                    EKG
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfSubproperty
                        choices={[Constants.WORKING, Constants.NOT_WORKING]}
                        property='ecg'
                        subproperty='inWorkingOrder'
                        value={medicalEquipmentForm.ecg.inWorkingOrder}
                        onClick={onClickOfSubproperty}
                    />
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfSubproperty
                        choices={[Constants.MASCULINE_CHARGED, Constants.MASCULINE_DISCHARGED]}
                        property='ecg'
                        subproperty='charged'
                        value={medicalEquipmentForm.ecg.charged}
                        onClick={onClickOfSubproperty}
                    />
                </div>

                <div className='sixteen wide column title'>
                    Gliukomatis
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfSubproperty
                        choices={[Constants.WORKING, Constants.NOT_WORKING]}
                        property='glucometer'
                        subproperty='inWorkingOrder'
                        value={medicalEquipmentForm.glucometer.inWorkingOrder}
                        onClick={onClickOfSubproperty}
                    />
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfSubproperty
                        choices={[Constants.MASCULINE_CHARGED, Constants.MASCULINE_DISCHARGED]}
                        property='glucometer'
                        subproperty='charged'
                        value={medicalEquipmentForm.glucometer.charged}
                        onClick={onClickOfSubproperty}
                    />
                </div>

                <div className='sixteen wide column title'>
                    Atsiurbėjas
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfSubproperty
                        choices={[Constants.WORKING, Constants.NOT_WORKING]}
                        property='cleaner'
                        subproperty='inWorkingOrder'
                        value={medicalEquipmentForm.cleaner.inWorkingOrder}
                        onClick={onClickOfSubproperty}
                    />
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfSubproperty
                        choices={[Constants.MASCULINE_CHARGED, Constants.MASCULINE_DISCHARGED]}
                        property='cleaner'
                        subproperty='charged'
                        value={medicalEquipmentForm.cleaner.charged}
                        onClick={onClickOfSubproperty}
                    />
                </div>
                <div className='sixteen wide column title'>
                    Infuzomatas
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfSubproperty
                        choices={[Constants.WORKING, Constants.NOT_WORKING]}
                        property='infusionMachine'
                        subproperty='inWorkingOrder'
                        value={medicalEquipmentForm.infusionMachine.inWorkingOrder}
                        onClick={onClickOfSubproperty}
                    />
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfSubproperty
                        choices={[Constants.MASCULINE_CHARGED, Constants.MASCULINE_DISCHARGED]}
                        property='infusionMachine'
                        subproperty='charged'
                        value={medicalEquipmentForm.infusionMachine.charged}
                        onClick={onClickOfSubproperty}
                    />
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfProperty
                        title='Infuzijų šildytuvas'
                        choices={[Constants.WORKING, Constants.NOT_WORKING]}
                        property='infusionHeaterWorking'
                        value={medicalEquipmentForm.infusionHeaterWorking}
                        onClick={onClickOfProperty}
                    />
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfProperty
                        title='DPV aparatas'
                        choices={[Constants.WORKING, Constants.NOT_WORKING]}
                        property='alvDeviceWorking'
                        value={medicalEquipmentForm.alvDeviceWorking}
                        onClick={onClickOfProperty}
                    />
                </div>
                <div className='sixteen wide column title'>
                    O2 balionai
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfSubproperty
                        title='2Litrų'
                        choices={[Constants.FULL, Constants.EMPTY]}
                        property='oxygenBottles'
                        subproperty='twoLitresBottleFull'
                        value={medicalEquipmentForm.oxygenBottles.twoLitresBottleFull}
                        onClick={onClickOfSubproperty}
                    />
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfSubproperty
                        title='10Litrų'
                        choices={[Constants.FULL, Constants.EMPTY]}
                        property='oxygenBottles'
                        subproperty='tenLitresBottleFull'
                        value={medicalEquipmentForm.oxygenBottles.tenLitresBottleFull}
                        onClick={onClickOfSubproperty}
                    />
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfProperty
                        title='Reanimacinis krepšys'
                        choices={[Constants.FULL, Constants.NEED_TO_BE_FILLED]}
                        property='resuscitationBagFull'
                        value={medicalEquipmentForm.resuscitationBagFull}
                        onClick={onClickOfProperty}
                    />
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfProperty
                        title='Medikamentų krepšys'
                        choices={[Constants.FULL, Constants.NEED_TO_BE_FILLED]}
                        property='medicationBagFull'
                        value={medicalEquipmentForm.medicationBagFull}
                        onClick={onClickOfProperty}
                    />
                </div>
                <div className='sixteen wide column title'>
                    Nešiojama racija
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfSubproperty
                        choices={[Constants.WORKING, Constants.NOT_WORKING]}
                        property='portableRadio'
                        subproperty='inWorkingOrder'
                        value={medicalEquipmentForm.portableRadio.inWorkingOrder}
                        onClick={onClickOfSubproperty}
                    />
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfSubproperty
                        choices={[Constants.FEMININE_CHARGED, Constants.FEMININE_DISCHARGED]}
                        property='portableRadio'
                        subproperty='charged'
                        value={medicalEquipmentForm.portableRadio.charged}
                        onClick={onClickOfSubproperty}
                    />
                </div>
                <div className='sixteen wide column title'>
                    Planšetinis kompiuteris
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfSubproperty
                        choices={[Constants.WORKING, Constants.NOT_WORKING]}
                        property='tablet'
                        subproperty='inWorkingOrder'
                        value={medicalEquipmentForm.tablet.inWorkingOrder}
                        onClick={onClickOfSubproperty}
                    />
                </div>
                <div className='eight wide column'>
                    <RadioButtonOfSubproperty
                        choices={[Constants.MASCULINE_CHARGED, Constants.MASCULINE_DISCHARGED]}
                        property='tablet'
                        subproperty='charged'
                        value={medicalEquipmentForm.tablet.charged}
                        onClick={onClickOfSubproperty}
                    />
                </div>
                <div className='sixteen wide column'>
                    <RadioButtonOfProperty
                        title='Automobilinis spausdintuvas'
                        choices={[Constants.WORKING, Constants.NOT_WORKING]}
                        property='printerWorking'
                        value={medicalEquipmentForm.printerWorking}
                        onClick={onClickOfProperty}
                    />
                </div>
                <Textbox
                    title='Akivaizdūs defektai'
                    property='defects'
                    value={medicalEquipmentForm.defects}
                    onChange={onTextboxChange}
                />
                <Textbox
                    title='Sunaudotos medicininės ir kitos priemonės'
                    property='consumedMedicalAndOtherMeans'
                    value={medicalEquipmentForm.consumedMedicalAndOtherMeans}
                    onChange={onTextboxChange}
                />
            </Content>
        </Fragment>
    );
}

export default MedicalEquipment;
