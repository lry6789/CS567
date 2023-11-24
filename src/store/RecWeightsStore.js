import { makeAutoObservable } from "mobx"

class RecWeightsStore {


  constructor() {
    makeAutoObservable(this)
  }
  history = 35
  interaction = 25
  demographics = 40
  setHistory (val) {
    this.history = val
  }
  setInteraction (val) {
    this.interaction = val
  }
  setDemographics (val) {
    this.demographics = val
  }
  get biased () {
    return this.demographics + this.history
  }
}
const recWeightsStore = new RecWeightsStore()
export default recWeightsStore