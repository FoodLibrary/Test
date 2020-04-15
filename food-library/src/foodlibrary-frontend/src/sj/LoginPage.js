import React ,{Component} from 'react';
import LoginPageLogo from './LoginPage/LoginPageLogo';
import LoginPageFoot from './LoginPage/LoginPageFoot'
import './LoginPage.css';
import { Container } from 'reactstrap';

class LoginPage extends Component {
  render(){
    return (
      <Container className="LoginPage">
          <LoginPageLogo/>
          <LoginPageFoot/>
      </Container>
    );
  }
}
export default LoginPage;
