# Badge使用说明
图标右上角的红点、数字或者文字。用于告知用户，该区域的状态变化或者待处理任务的数量。

## 代码演示
```jsx
import Badge from './Badge';

······

<Badge />
<Badge dot>
    <View style={{ height: 35, width: 35, backgroundColor: '#ddd' }} />
</Badge>
<Badge text="new"/>
<Badge text={103} overflowCount={99} style={{ marginEnd: 10 }}/>
<Badge text={42} overflowCount={99}/>
```

## 属性
属性 | 类型 | 默认值 | 说明
----|-----|------|------
text | string\|number | `new` | 展示的数字或文案，当为数字时候，大于 overflowCount <br/> 时显示为...，为 0 时隐藏
corner | boolean | `false` | 置于角落（此版本未实现）
dot | boolean | `false` | 不展示数字，只有一个小红点
overflowCount | number | `99` | 展示封顶的数字值
bkStyle | Object | - | 自定义背景和文字样式（不建议使用）