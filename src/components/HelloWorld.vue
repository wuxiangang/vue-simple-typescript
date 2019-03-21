<script>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Hello extends Vue {
  msg = 'Welcome to Your Vue.js App'

  render () {
    return (<div class="hello">
      <img src={ require('@/assets/logo.png') } />
      <h1>{ this.msg }</h1>
    </div>
    )
  }
}
</script>
