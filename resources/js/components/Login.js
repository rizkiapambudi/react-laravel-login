import axios from 'axios'
import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, } from 'antd';
import { Form, Input, Button } from 'antd';
import bgImage from './assets/background.jpg'
import './Login.css';
import 'antd/dist/antd.css'
import { UserOutlined, LockOutlined, ArrowRightOutlined, CheckCircleFilled } from '@ant-design/icons';
import SweetAlert from 'react-bootstrap-sweetalert';

class NormalLoginForm extends React.Component {
    constructor(){
      super()
      this.state = {
        email:'',
        password:'',
        errors:{},
        loading: false,
      }
      this.hasErrorFor = this.hasErrorFor.bind(this)
      this.handleLogin = this.handleLogin.bind(this)
      this.renderErrorFor = this.renderErrorFor.bind(this)
    }

    goToHome(msg){
        const getAlert = () => (
            <SweetAlert
                success
                title="Success!"
                onConfirm={() => this.onSuccess() }
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="Oke Siap"
                >
                {msg}
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    loginFail(msg){
        const getAlert = () => (
            <SweetAlert
                error
                title="Fail!"
                onConfirm={() => this.hideAlert() }
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="Try again"
                >
                {msg}
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    loginError(){
        const getAlert = () => (
            <SweetAlert
                error
                title="Error Login!"
                onConfirm={() => this.hideAlert() }
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="Try again"
                >
                Please fill username and password
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    onSuccess() {
        this.setState({loading: false})
        this.props.history.push('/app');
    }
 
    hideAlert() {
        this.setState({loading: false})
        this.setState({
            alert: null
        });
    }

    renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
            return (
            <span className='invalid-feedback'>
                <strong>{this.state.errors[field][0]}</strong>
            </span>
            )
        }
    }
 

    hasErrorFor (field) {
        return !!this.state.errors[field]
    }

    handleLogin (event) {
        this.setState({loading: true})
        event.preventDefault()
        const article = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('/api/login', article).then(response => { 
            var success = response.data.success;
            var msg = response.data.message;
            if(success == true){
                return this.goToHome(msg);
            } else {
                return this.loginFail(msg);
            }
        }).catch(error => {
            var error = error.response.data.errors;
            console.log('error', error)
            if (error) {
                return this.loginError();
                return
            }
          })
    }

    render() {

        return (
            <div className="wrapper" style={{
                backgroundImage:`url(${bgImage})`,
                // backgroundSize:' cover',
                // backgroundPosition: 'right top',
                backgroundPosition: '100% 20%',
            }}>
                <div className="login-form-wrapper">
                    <Row>
                        <Col md={{span:24}}>
                            <div  className="login-form-container">
                            
                                <p className="text-head">Welcome</p>
                                <p className="text-about">
                                    MyTemplate is a very cool platform that combines multiple tools. <br/>
                                    All of them are very cool and this is why:
                                </p>   

                                <p className="text-poin"><CheckCircleFilled style={{color:'#1ea73c'}}/> You can do really cool stuff</p>
                                <p className="text-poin"><CheckCircleFilled style={{color:'#1ea73c'}}/> And even more cool stuff</p>
                                <p className="text-poin"><CheckCircleFilled style={{color:'#1ea73c'}}/> You won't believe it!</p>

                                <form onSubmit={this.handleLogin} style={{marginTop: '50px'}}>
                                    <div className='form-group'>
                                        <Input 
                                            prefix={<UserOutlined style={{ fontSize: '25px'}}/>} 
                                            placeholder="Enter your Username" 
                                            onChange={e=>this.setState({email:e.target.value})}/>
                                        {this.renderErrorFor('title')}
                                    </div>
                                    <div className='form-group'>
                                        <Input.Password 
                                            prefix={<LockOutlined style={{ fontSize: '25px'}}/>}
                                            placeholder="Enter your Password" 
                                            onChange={e=>this.setState({password:e.target.value})}/>
                                        {this.renderErrorFor('content')}
                                    </div>
                                    &nbsp;
                                    &nbsp;
                                    <Button htmlType="submit" loading={this.state.loading} type="primary" className='login-form-button'>LOGIN INTO YOUR ACCOUNT <ArrowRightOutlined /></Button>
                                    {this.state.alert}
                                </form>

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }

}

export default NormalLoginForm;

if (document.getElementById('reactindex')) {
    ReactDOM.render(<NormalLoginForm />, document.getElementById('reactindex'));
}
