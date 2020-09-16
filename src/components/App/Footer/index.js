import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import styles from './Footer.module.scss';
import Index from './Index';

class Footer extends Component {

    mapIndex = (pages,currentPage) =>{
        const indexes = [];
        for (let i=1; i<=pages; i++){
            indexes.push(<Index key={i} index={i}/>)
        }        
        return indexes;
    }

    render() {
        const {pages, currentPage} = this.props;   
        return (            
            <div className={styles.footer}>                
                <ul className={styles.indexList}>                    
                {this.mapIndex(pages, currentPage)}  
                </ul>                
            </div>
        )
    }
}

Footer.propTypes = {   
    pages: PropTypes.number,       
}

function mapStateToProps(state){
    return {        
        pages:state.todo.pages
    } 
  };
  const mapDispatchToProps =dispatch =>{
    return {};
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Footer)
