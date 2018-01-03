import React,{Component} from 'react'

class Filters extends Component{
    render(){
        const {filters,activeFilter} = this.props;
        return (
            <div>
               {
                   filters.map((filter,index) => 
                   <span style={{color:(filter.isActive ? 'red' : '#000')}}
                         onClick={ () => activeFilter(index)}>   
                        {filter.name} 
                   </span>)
               }
            </div>
        )
    }
}

export default Filters