import { Vue, Component } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'

@Component
export default class Hello extends Vue {
  @State test: string
  @Mutation setTest: (p: object) => void
  msg: string = 'Welcome to Your Vue.js App'

  call (data: number): boolean {
    return !!data
  }

  render () {
    return (<div class='hello'>
      <img src={ require('@/assets/logo.png') } />
      <h1>{ this.msg }</h1>
    </div>
    )
  }
}