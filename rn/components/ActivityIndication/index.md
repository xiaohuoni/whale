# 使用方法

## 引用
import ActivityIndication from './ActivityIndication';

## 显示
this.modalKey = ModalBasics.show(<ActivityIndication color="white" />);
this.modalKey = ModalBasics.show(<ActivityIndication size="large" />);
this.modalKey = ModalBasics.show(<ActivityIndication text="正在加载" />);
this.modalKey = ModalBasics.show(<ActivityIndication toast />);
this.modalKey = ModalBasics.show(<ActivityIndication toast text="正在加载" />);

## 关闭
ModalBasics.remove(modalKey);

## 属性
| 属性 | 类型 | 默认值 | 说明 |
| :-: | :-: | :-: | :-: |
|  animating  | boolean  | true  | 显隐状态 |
|  size  | string  | small  | spinner大小，可选`small`/`large` |
|  toast  | boolean  | false  | loading样式类型 |
|  text  | string |  -   | loading文本 |
|  color | string  | gray  | spinner颜色 |