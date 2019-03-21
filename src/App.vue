<script>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  render () {
    return (<div id="app">
      <img src={ require('@/assets/logo.png') } />
      <router-view/>
    </div>)
  }
}
</script>

<style scoped lang="scss">
  #app {
    color: $red;
    text-align: center;
    img {
      margin: 0 auto;
      display: block;
      transform: scale(.6);
    }
  }
</style>
