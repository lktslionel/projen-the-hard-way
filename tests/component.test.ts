import * as tdk from "../src"
import { synthSnapshot  } from "projen/lib/util/synth"


describe("Component", () => {
    
    test("create", () => {
        
        const project = new tdk.Component({
            name: "demo",
        })

        const snapshot = synthSnapshot(project)

        console.log(snapshot)

    })

})