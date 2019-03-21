<script>
import { Vue, Component, Provide, Watch } from 'vue-property-decorator'
import Item from './item'

@Component({
  components: {
    Item
  }
})
export default class Hello extends Vue {
  msg = 'Welcome to Your Vue.js App'
  count = 111
  list = []

  async getPrice () {
    this.list = await this.$http.symbol()
  }

  @Watch('list')
  onChangeList (val, oldval) {
    console.log(val)
  }

  @Provide('users')
  users = '这个数据是父级注入给子级'

  getReturnValue (val) {
    console.log('emit 返回数据:', val)
  }

  render () {
    const table = this.list.length ? (<table>
      <tr>
        <th>交易对</th>
        <th>价格</th>
      </tr>
      {
        this.list.map((v, i) => {
          return (<tr key = { i }>
            <td>{ v.symbol}</td>
            <td>{ v.price + v.unit }</td>
          </tr>)
        })
      }
    </table>) : null

    return (<div class="hello">
      <h1>{ this.msg }</h1>
      <button onClick={ this.getPrice }>获取交易对</button>
      { table }
      <Item on-return-value = { this.getReturnValue } count = { this.count } />
    </div>
    )
  }
}
</script>

<style scoped lang="scss">
  table {
    margin: 0 auto;
    text-align: center
  }
</style>
