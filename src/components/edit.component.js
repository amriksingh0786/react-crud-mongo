import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
  /*   this.onChangeGstNumber = this.onChangeGstNumber.bind(this); */
    this.onChangeQualification = this.onChangeQualification.bind(this);
    this.onChangeDOB = this.onChangeDOB.bind(this);
    this.onChangeMaritalStatus = this.onChangeMaritalStatus.bind(this);
    this.onChangeHobby = this.onChangeHobby.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
      first_name: '',
      last_name: '',
 /*      business_gst_number: '', */
      person_qualification: '',
      date_of_birth: '',
      marital_status:'',
      person_hobby:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                first_name: response.data.first_name,
                last_name: response.data.last_name,
              /*   business_gst_number: response.data.business_gst_number, */
                person_qualification: response.data.person_qualification,
                date_of_birth: response.data.date_of_birth,
                marital_status:response.data.marital_status,
                person_hobby: response.data.person_hobby
               });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeFirstName(e) {
    this.setState({
      first_name: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      last_name: e.target.value
    })  
  }
  /* onChangeGstNumber(e) {
    this.setState({
      business_gst_number: e.target.value
    })
  } */
    onChangeQualification(e) {
      this.setState({
        person_qualification: e.target.value
      })
    }
    onChangeDOB(e){
        this.setState({
          date_of_birth: e.target.value
        })
    }
    onChangeMaritalStatus(e){
      this.setState({
        marital_status: e.target.value
      })
    }
      onChangeHobby(e){
        this.setState({
          person_hobby: e.target.value
        })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      /* business_gst_number: this.state.business_gst_number, */
      person_qualification: this.state.person_qualification,
      date_of_birth: this.state.date_of_birth,
      marital_status: this.state.marital_status,
      person_hobby: this.state.person_hobby
    };
    axios.post('http://localhost:4000/business/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>First Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.first_name}
                      onChange={this.onChangeFirstName}
                      />
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.last_name}
                      onChange={this.onChangeLastName}
                      />
                </div>
               {/*  <div className="form-group">
                    <label>GST Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.business_gst_number}
                      onChange={this.onChangeGstNumber}
                      />
                </div> */}
                <div className="form-group">
                    <label>Qualification: </label>
                      <input list="browsers" name="browser" className="form-control"
                      value={this.state.person_qualification}
                      onChange={this.onChangeQualification}/>
                      <datalist id="browsers">
                        <option value="Internet Explorer"/>
                        <option value="Firefox"/>
                        <option value="Chrome"/>
                        <option value="Opera"/>
                        <option value="Safari"/>
                      </datalist>
                </div>
                <div className="form-group">
                    <label>Date Of Birth: </label>
                    <input type="date" 
                      className="form-control"
                      value={this.state.date_of_birth}
                      onChange={this.onChangeDOB}
                      />
                </div>
                <div className="form-group">
                    <label>Marital Status : </label>
                      <input list="browsers" name="browser" className="form-control"
                      value={this.state.marital_status}
                      onChange={this.onChangeMaritalStatus}/>
                      <datalist id="browsers">
                        <option value="Internet Explorer"/>
                        <option value="Firefox"/>
                        <option value="Chrome"/>
                        <option value="Opera"/>
                        <option value="Safari"/>
                      </datalist>
                </div>
               {/*  <div className="form-group">
                    <label>Hobby : </label>
                    <input type="checkbox" 
                      className="form-control"
                      value={this.state.person_hobby}
                      onChange={this.onChangeHobby}
                      />
                </div> */}
                <div className="form-group">
                    <input type="submit" 
                      value="Update Info" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}