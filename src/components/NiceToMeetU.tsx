import { Vue, Component } from 'vue-property-decorator'
import '@/assets/css/style.scss'

@Component
export default class Hello extends Vue {
  msg: string = 'Nice to Meet You, Friend!'

  render () {
    return (<div class='red'>
      <h1>{ this.msg }</h1>
    </div>
    )
  }
}