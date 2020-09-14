import React, { Component } from 'react'
import { connect } from "react-redux";
import styles from './Footer.module.scss';
import Index from './Index';

class Footer extends Component {

    mapIndex = (pages,currentPage) =>{
        const indexes = [];
        for (let i=1; i<=pages; i++){
            indexes.push(<Index key={i} index={i} current={currentPage}/>)
        }
        
        return indexes;

    }
    render() {
        const {pages, currentPage} = this.props;
       // console.log(pages,currentPage)
       //const indexs = this.mapIndex(pages, currentPage);
        return (
            
            <div className={styles.footer}>                
                <ul className={styles.indexList}>
                    
                {this.mapIndex(pages, currentPage)}  
                </ul>
                

            </div>
        )
    }
}

function mapStateToProps(state){
    return {        
        pages: state.todo.pages,
        currentPage: state.todo.currentPage,
     } 
  };
  const mapDispatchToProps =dispatch =>{
    return{
        //findAllTodo: (data)=>dispatch(findAllTodo(data)),
       // addTodo: (data)=>dispatch(addTodo(data)),        
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Footer)
