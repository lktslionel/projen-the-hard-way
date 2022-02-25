import { 
    Project as ProjenProject, 
    ProjectOptions as ProjenProjectOptions 
} from 'projen'

import {ComponentType, ComponentPlatform} from '../types'


interface BaseOptions extends ProjenProjectOptions {}


class Base extends ProjenProject {

    type!: ComponentType;

    constructor(opts: BaseOptions) {
        super(opts)

        this.type = ComponentType.BASE

    }

}

export { 
    BaseOptions,
    Base
}

