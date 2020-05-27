import React from 'react';
import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import bgImage from './assets/background.jpg'
import './Login.css';
import { UserOutlined, LockOutlined, ArrowRightOutlined, CheckCircleFilled } from '@ant-design/icons';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    constructor(){
      super()
      this.state = {
        email:'',
        password:'',
        errors:{}
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
        console.log('e')
        // stop browser's default behaviour of reloading on form submit
        // e.preventDefault();
        axios
            .post('/tasks', {
                name: this.state.name
            })
            .then(response => {
                console.log('from handle submit', response);
            });
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
                        <Col md={{span:9}}>
                            <div  className="login-form-container">
                            
                                <p className="text-head">Welcome</p>
                                <p className="text-about">
                                    MyTemplate is a very cool platform that combines multiple tools. <br/>
                                    All of them are very cool and this is why:
                                </p>   

                                <p className="text-poin"><CheckCircleFilled style={{color:'#1ea73c'}}/> You can do really cool stuff</p>
                                <p className="text-poin"><CheckCircleFilled style={{color:'#1ea73c'}}/> And even more cool stuff</p>
                                <p className="text-poin"><CheckCircleFilled style={{color:'#1ea73c'}}/> You won't believe it!</p>

                                <Form onSubmit={this.handleSubmit} className="login-form">
                                    <FormItem>
                                        <Input 
                                        prefix={<UserOutlined style={{ fontSize: '25px'}}/>} 
                                        placeholder="Enter your Username" 
                                        onChange={e=>this.setState({email:e.target.value})}/>
                                    </FormItem>

                                    <FormItem>
                                        <Input.Password 
                                        style={{ fontSize: '25px'}}
                                        prefix={<LockOutlined style={{ fontSize: '25px'}}/>}
                                        placeholder="Enter your Password" 
                                        onChange={e=>this.setState({password:e.target.value})}/>
                                    </FormItem>
                                    <FormItem>
                                        <Checkbox style={{fontSize: '14px'}}>Remember me</Checkbox>
                                        {/* <Link className="login-form-forgot" to="/forgot-password">Forgot password</Link> */}
                                        <p></p>
                                        <Button type="primary" htmlType="submit" size="large" className="login-form-button" loading={this.state.loading}>
                                            LOGIN INTO YOUR ACCOUNT <ArrowRightOutlined />
                                        </Button>
                                        {/* Or <a href="">register now!</a> */}
                                    </FormItem>
                                </Form>

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
