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
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
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
                onFocus={() => {handleInputFocus(list)}}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe6e4;</i>
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
    const { focused, list, mouseIn, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
    const jsList = list.toJS();
    const pageList = [];
    if(jsList.length){
      for(let i=(page-1)*10; i<page*10;i++){
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        )
      }
    }
    if(focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={()=>{handleChangePage(page, totalPage, this.spinIcon)}}>
              <i 
                className="iconfont spin"
                ref={(icon) => {this.spinIcon = icon}}
              >&#xe851;</i>
              换一批
            </SearchInfoSwitch>
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
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

const mapDispatchToProps = (dispacth) => {
  return {
    handleInputFocus(list){
      (list.size === 0) && dispacth(actionCreaters.getList());
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
    },
    handleChangePage(page, totalPage, spin){
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if(originAngle){
        originAngle = parseInt(originAngle, 10);
      }else{
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) +'deg)';

      if(page < totalPage){
        dispacth(actionCreaters.changePage(page + 1));
      }else{
        dispacth(actionCreaters.changePage(1));
      }
      // dispacth(actionCreaters.changePage());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);