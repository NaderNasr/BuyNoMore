import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import { RadioGroup, RadioButton } from 'react-radio-buttons';


class Search extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			searchInput : '',
			searchOut : []
		}
		this.handleSearchInput = this.handleSearchInput.bind(this);
		this.handleClickSearch = this.handleClickSearch.bind(this);
	}

	handleSearchInput(evt){
		console.log(evt.target.value)
    this.setState({ searchInput: evt.target.value });
	}

	handleClickSearch(input){
		console.log(this.state.searchInput)
		var that  = this
		console.log('input');
		$.ajax({
			type:'POST',		
			url:'/search',
			data: {
				itemName : that.state.searchInput
			},
			success: function(data) {
				console.log("Success in GET search!", data);
				that.setState({searchOut: data});
			},
			error: function(err) {
				console.log("Error in GET search!", err);

			}

			
		})

	}
		     //             {this.state.searchOut.map(item => {


    
               	   // <a href="#"><img src= {item.src} className="img-responsive img-thumbnail"/></a>

	render(){ // Render function should render only one component

		return (
		<div>
		 {console.log(this.state.searchOut)}
            <h1>Search</h1>
			 <div className="container">
			  <div className="row">

			   <input type="text" name="SearchItems" placeholder='Please enter the item name' onChange={this.handleSearchInput}/>
			    <button type="button" className="btn btn-primary" onClick={this.handleClickSearch}>Search</button>

       				{this.state.searchOut.map(item =>

       				<div key = {item._id}>
                   	<div className='col-lg-3 col-md-4 col-sm-6'>
				    <br/>
				   	</div>
				   	<div>
				    <p>{item.nickname}</p>
				    <br/>
				    <p>{item.itemName}</p>
				    <br/>
				    <p>{item.phoneNum}</p>
				    <br/>
				   	</div>
				    </div>
				)}
			 </div>
			</div>
	      </div>)
   }
	
}

export default Search;
