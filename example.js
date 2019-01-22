/**
 * 案例文件 主要为了展示React的逻辑规范
 * 里面的实现问题请忽略
 */

import React from 'react';
import { connect } from 'react-redux';
import {Toast } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import FieldCol from 'components/FlexibleFormJob/Row/FieldCol.js';
import Fetch from 'constants/fetch';

class SendMessage extends  React.Component {
    constructor (props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount () {
        let customeredEvents = this.customeredEvents();

        // 获取头部数据;
        customeredEvents.getInfoData();

        // 获取联系人数据
        customeredEvents.getContractor();

        // 确认是否需要展示验证码
        customeredEvents.getValidateInfo();

    }
    // 自定义事件 自定义事件的命名空间;
    customeredEvents () {
        const _this = this;

        return {
            getInfoData: function () {
            },
            // 验证
            showValidateImg: function () {
            },
            // 表单验证
            checkForm: function () {
                var formParams = {};
                return formParams;
            }
        }
    }

    // dom相关事件 DOM操作的命名空间
    domEvents () {
        let _this = this;
        return {

            changeRole: function (tel) {
            },
            changeTel: function (value) {
            },
            changeSmsContent: function (value) {
            },
            submitInfo: function () {
                var formParams = _this.customeredEvents().checkForm();
                if (formParams) {
                    Fetch('/mock/sms/send', {
                        params: formParams,
                        method: 'post'
                    }).then (function(data) {

                    });
                }

            }
        }
    }

    render () {
        let domEvents = this.domEvents();
        return (
            <div className="contentWrap">
                <div styleName="module-module">
                    {
                        this.state.contractors.length > 0 ?
                            <FieldCol
                                inputType="select"
                                onChange={domEvents.changeRole}
                                option={this.state.contractors}
                            /> : null
                    }

                    <FieldCol
                        inputType="text"
                        desc="姓名"
                        value={this.state.currentName}
                    />

                    <FieldCol
                        inputType='input'
                        validator="phone"
                        value={this.state.tel}
                        onChange={domEvents.changeTel}
                        desc="手机号码"
                    />
                <div>
            </div>
        );
    }
}

const mapState = function (state) {
    return {
        messageInfo: state.messageInfo
    }
}

export default connect(mapState)(withRouter(SendMessage));