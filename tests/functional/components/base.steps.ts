import {defineFeature, loadFeature } from 'jest-cucumber'
import path from 'path'
import { directorySnapshot, SynthOutput  } from "projen/lib/util/synth"

import { components } from '../../../src/projen'

const feature = loadFeature(path.join(__dirname, '../../../specs/functional/components/base.feature'))

defineFeature(feature, (test) => {
    test('Synthetize',  ({ given, when, then, and, pending }) => {
    
        let component: components.Base
        let snapshot: SynthOutput
    
        given(/^I have a component named "(.*)"$/, (name: string) => {
            component = new components.Base({
                name: name
            })
        })
        
        when('I synthetize the component', () => {
            snapshot = directorySnapshot(component.name)
        });
    
        then(/^I should have a directory named "(.*)"$/, (name: string) => {
            console.log(snapshot)
            console.log(name)
            pending()
        });
        
        and('Containing the following files:', (files: string[]) => {
            console.log(`${files}`)
            pending()
        });
    
    });
    
})

