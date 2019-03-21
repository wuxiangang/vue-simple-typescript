<script>
import { Vue, Component, Prop, Inject, Emit } from 'vue-property-decorator'

@Component
export default class Item extends Vue {
  @Prop(Number)
  count

  @Prop({ default: '测试字段sss' })
  text

  input = '双向绑定'

  @Inject('users')
  newUser // 别名

  @Emit()
  returnValue () {
    return 10
  }

  render () {
    return (<div>
      <div >我是组件{ this.input } </div>
      <div>
        <input value={ this.input } on-input = { e => this.input = e.target.value } placeholder="请输入内容"></input>
      </div>
      <p>Vue检测数据格式：{ this.count } 正确数字</p>
      { this.text }
      <button on-click = { this.returnValue }>send to parent</button>
    </div>)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    color: green
  }
</style>
