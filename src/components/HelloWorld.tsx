import { Vue, Component } from 'vue-property-decorator'
import { Mutation, Action } from 'vuex-class'
import '@/assets/css/style.scss'

@Component
export default class Hello extends Vue {
  @Action saveMenuListFN
  @Mutation saveMenuList: (p: object) => void
  msg: string = 'Welcome to Your Vue.js App'

  call (data: number): boolean {
    return !!data
  }
  
  render () {
    return (<div class='hello red'>
      <img src={ require('@/assets/logo.png') } />
      <h1>{ this.msg }</h1>
    </div>
    )
  }
}