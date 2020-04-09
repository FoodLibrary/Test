import React, {Component} from 'react';
import './Main.css';

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
        };
        this.handle = this.handle.bind(this);
    }

    handle = () => {
        if(!this.state.hidden){
            this.setState((Filtering) => ({ hidden: true }));
        }
        else{
            this.setState((Filtering) => ({ hidden: false }));
        }
    }

    render(){
        return(
            <div>
                <div className = "navigationBar">
                    <button></button>
                    <div></div>
                    <button></button>
                    <button></button>
                </div>
                <div className ="main">
                    <div className ="foodLibraryLogo">음식도서관</div>
                    <div className = "searchBar"><buttion>검색</buttion></div>
                    <div className = "ResultFiltering" >
                        <button className="ResultFilteringLogo" onClick={this.handle}>
                            <img src = "https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/117F0361-1F9E-40CD-82A1-C56C3E114CEF.png" width = "35px"/>
                            검색어 필터링</button>
                        {this.state.hidden&&<table className="Filtering" >
                            <tr>
                                <th width={"200px"}>구분</th>
                                <th>Check List</th>
                            </tr>
                            <tr>
                                <td>알레르기</td>
                                <td>
                                    <form id="allergyFiltering" className ="allergyFiltering" method="post" >
                                        <input type="checkbox" className="allergyCheck" value="myAllergy"/> 내정보
                                        <input type="checkbox" className="allergyCheck" value="ex1"/> 새우
                                        <input type="checkbox" className="allergyCheck" value="ex2"/> 굴
                                    </form>
                                </td>
                            </tr>
                            <tr>
                                <td>지병 <span title ="자신의 지병을 체크하면, 해당 질병에 좋지 않은 음식들은 제외하고 검색됩니다.">!</span></td>
                                <td>
                                    <form id="diseaseFiltering" className="diseaseFiltering" method="post">
                                        <input type="checkbox" className="diseaseCheck" value="myDisease"/> 내정보
                                        <input type="checkbox" className="diseaseCheck" value="ex1"/> 질병a
                                        <input type="checkbox" className="diseaseCheck" value="ex2"/> 질병b
                                    </form>
                                </td>
                            </tr>
                        </table>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default Main;