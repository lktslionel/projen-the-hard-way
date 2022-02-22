import { 
    Project as ProjenProject, 
    ProjectOptions as ProjenProjectOptions 
} from 'projen'


interface ComponentProps extends ProjenProjectOptions {

}

enum ComponentTypes {
    DEFAULT = "_"
}

class Component extends ProjenProject {

    constructor(opts: ComponentProps) {
        super(opts)
    }

}


export {
    Component,
    ComponentProps,
    ComponentTypes
}

