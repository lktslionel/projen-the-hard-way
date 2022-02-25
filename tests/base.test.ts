import { components } from '../src/projen'
import { synthSnapshot  } from "projen/lib/util/synth"


describe("Base", () => {
    
    test("synthetize a basic component project", () => {
        
        const project = new components.Base({
            name: "base"
        })

        const snapshot = synthSnapshot(project)



    })

})