import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreaters } from './store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style';

class Header extends Component{
  render(){
    const { focused, handleInputFocus, handleInputBlur } = this.props;
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe6e4;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe615;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  getListArea(){
    const { focused, list, page, handleMouseEnter, handleMouseLeave} = this.props;
    const jsList = list.toJS();
    const pageList = [];
    for(let i=(page-1)*10; i<page*10;i++){
      pageList.push(
        <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
      )
    }
    if(focused) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { pageList }
          </SearchInfoList>
        </SearchInfo>
      )
    }else{
      return null;
    }
  }
}

const mapStateToProps = (state) =>{
  return {
    focused :state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page'])
  }
}

const mapDispatchToProps = (dispacth) => {
  return {
    handleInputFocus(){
      dispacth(actionCreaters.getList());
      dispacth(actionCreaters.searchFocus());
    },
    handleInputBlur(){
      dispacth(actionCreaters.searchBlur());
    },
    handleMouseEnter(){
      dispacth(actionCreaters.mouseEnter());
    },
    handleMouseLeave(){
      dispacth(actionCreaters.mouseLeave());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);