import React, {Fragment, useContext} from 'react';
import SectionHeader from '../components/Content/Header/Header';
import Content from '../components/Layout/ContainerOfContent/Content';
import {Icon} from 'semantic-ui-react';
import CheckboxOfProperty from '../components/Content/Checkbox/CheckboxOfProperty';
import RadioButtonOfSubproperty from '../components/Content/Checkbox/RadioButtonOfSubproperty';
import CheckboxOfSubproperty from '../components/Content/Checkbox/CheckboxOfSubproperty';
import {appContext} from '../App';
import Constants from '../../Constants';
import {emptyShiftForm} from "../../lib/domain/Entity/EmptyShiftForm/EmptyShiftForm";


function Cleaning() {
    const cleaningForm = emptyShiftForm.cleaning;
    const {builder} = useContext(appContext);
    const controller = builder.createBaseController(cleaningForm);

    function onClickOfSubproperty(property: string, subproperty: string, value: boolean) {
        controller.setSubpropertyValue(property, subproperty, value);
    }

    function onClickOfProperty(property: string, value: boolean) {
        controller.setPropertyValue(property, value);
    }

    return (
        <Fragment>
            <SectionHeader>
                <Icon name='tint' size='big'/>
                <span className='title'>Automobilio kasdieninis valymas</span>
                <div className='two wide column align-right'>
                    <CheckboxOfProperty
                        title='Generalinis valymas'
                        property='generalCleaning'
                        value={cleaningForm.generalCleaning}
                        onClick={onClickOfProperty}
                    />
                </div>
            </SectionHeader>
            <Content>
                <div className='sixteen wide column title'>
                    Grindys, sienos, lubos, durys, spintelės, rankenos, neštuvai ir kėdės
                </div>
                <div className='seven wide column'>
                    <RadioButtonOfSubproperty
                        title='Valymas'
                        choices={[Constants.CLEANED, Constants.NOT_CLEANED]}
                        property='interiorEquipment'
                        subproperty='cleaned'
                        onClick={onClickOfSubproperty}
                        value={cleaningForm.interiorEquipment.cleaned}
                    />
                </div>
                <div className='nine wide column'>
                    <RadioButtonOfSubproperty
                        title='Dezinfekavimas'
                        choices={[Constants.DISINFECTED, Constants.NOT_DISINFECTED]}
                        property='interiorEquipment'
                        subproperty='disinfected'
                        onClick={onClickOfSubproperty}
                        value={cleaningForm.interiorEquipment.disinfected}
                    />
                </div>
                <div className='sixteen wide column title'>
                    Sieninių spintelių vidus
                </div>
                <div className='seven wide column'>
                    <RadioButtonOfSubproperty
                        title='Valymas'
                        choices={[Constants.CLEANED, Constants.NOT_CLEANED]}
                        property='insideWallCabinets'
                        subproperty='cleaned'
                        onClick={onClickOfSubproperty}
                        value={cleaningForm.insideWallCabinets.cleaned}
                    />
                </div>
                <div className='nine wide column'>
                    <RadioButtonOfSubproperty
                        title='Dezinfekavimas'
                        choices={[Constants.DISINFECTED, Constants.NOT_DISINFECTED]}
                        property='insideWallCabinets'
                        subproperty='disinfected'
                        onClick={onClickOfSubproperty}
                        value={cleaningForm.insideWallCabinets.disinfected}
                    />
                </div>
                <div className='sixteen wide column title'>
                    Medicininė įranga
                </div>
                <div className='seven wide column'>
                    <RadioButtonOfSubproperty
                        title='Valymas'
                        choices={[Constants.CLEANED, Constants.NOT_CLEANED]}
                        property='medicalEquipment'
                        subproperty='cleaned'
                        onClick={onClickOfSubproperty}
                        value={cleaningForm.medicalEquipment.cleaned}
                    />
                </div>
                <div className='nine wide column'>
                    <RadioButtonOfSubproperty
                        title='Dezinfekavimas'
                        choices={[Constants.DISINFECTED, Constants.NOT_DISINFECTED]}
                        property='medicalEquipment'
                        subproperty='disinfected'
                        onClick={onClickOfSubproperty}
                        value={cleaningForm.medicalEquipment.disinfected}
                    />
                </div>
                <div className='sixteen wide column title'>
                    Naudotos cheminės priemonės
                </div>
                <div className='six wide column'>
                    <CheckboxOfSubproperty
                        title='Bacticid'
                        property='usedCleaning'
                        subproperty='bacticid'
                        value={cleaningForm.usedCleaning.bacticid}
                        onClick={onClickOfSubproperty}
                    />
                </div>
                <div className='ten wide column'>
                    <CheckboxOfSubproperty
                        title='Chemipharm des new'
                        property='usedCleaning'
                        subproperty='chemipharm'
                        value={cleaningForm.usedCleaning.chemipharm}
                        onClick={onClickOfSubproperty}
                    />
                </div>
                <div className='sixteen wide column'>
                    <CheckboxOfSubproperty
                        title='Paviršių dezinfekcinės servetėlės'
                        property='usedCleaning'
                        subproperty='wipes'
                        value={cleaningForm.usedCleaning.wipes}
                        onClick={onClickOfSubproperty}
                    />
                </div>
            </Content>
        </Fragment>
    );
};

export default Cleaning;

