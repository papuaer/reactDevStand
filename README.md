## React开发逻辑规范

### 背景： 在React开发中，DOM事件和自定义事件散落在组件中，查找和修改都很麻烦。因此需要定义一套React开发的规范，约束事件的定义方式，方便维护。

(```)

    class SendMessage extends  React.Component {
        constructor (props) {
            super(props);
        }
        
        this.state = {};
        
        // 钩子事件
        componentDidMount () {}
        
        // 自定义事件 
        customeredEvents () {
            let _this = this;
            return {
                // 自定义事件1，比如获取处理数据
                getInfoData: function () {
                    _this.xxxxxxxxx
                }
            }
        }
        
        // dom相关事件 和DOM操作的相关事件
        domEvents () {
            let _this = this;
            let customeredEvents = _this.customeredEvents();
            return {
                // 相关的DOM操作;
                changeRole: function () {
                    let data = customeredEvents.getInfoData();
                    // xxxx
                }
            }
        }
        
        
        render () {
            let domEvents = this.domEvents();
            
            return (
                <div>
                    <Button onChange={domEvents.changeRole} />
                </div>
            );
        }
    }
    
(```)


