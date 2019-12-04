import React from 'react'
import MainImage from '../Common/MainImageContainer'
import place from '../../assets/img/destination/bagan.jpg'

const initialState = {
    planname: "",
    plannameError: "",
    price: "",
    priceError:"",
    promoprice:"",
    rating:"",
    description:"",
    duration:"",
    durationError:"",
    destination:"",
    destinationError:"",
    availableperson:"",
    availablepersonError:"",
    file:'',
    imagePreviewUrl:''
}

class AddNewTour extends React.Component {

    state = initialState;
    constructor(props){
        super(props);
        this.state={
            file:'',
            imagePreviewUrl:'',
            
        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }
   

    handleSubmit(e){
        e.preventDefault();
        const isValid = this.validate();
        if(isValid){
            this.setState(initialState);
            document.getElementById('inputbox1').style.border = '';
            document.getElementById('inputbox2').style.border = '';
            document.getElementById('inputbox3').style.border = '';
            document.getElementById('inputbox4').style.border = '';
            document.getElementById('inputbox5').style.border = '';
        }
        
    }

    handleImageChange(e){
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file:file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validate = () => {
        let plannameError = "";
        let priceError = "";
        let durationError = "";
        let destinationError = "";
        let availablepersonError = "";
        if(!this.state.planname){
            plannameError = "plan name cannot be blank";
            document.getElementById('inputbox1').style.border = '1px solid red';
        }
        if(!this.state.price){
            priceError = "price cannot be blank";
            document.getElementById('inputbox2').style.border = '1px solid red';
        }
        if(!this.state.duration){
            durationError = "duration cannot be blank";
            document.getElementById('inputbox3').style.border = '1px solid red';
        }
        if(!this.state.destination){
            destinationError = "destination cannot be blank";
            document.getElementById('inputbox4').style.border = '1px solid red';
        }
        if(!this.state.availableperson){
            availablepersonError = "available person cannot be blank";
            document.getElementById('inputbox5').style.border = '1px solid red';
        }
        if(plannameError || priceError || durationError || destinationError || availablepersonError){
            this.setState({ plannameError, priceError, durationError, destinationError,  availablepersonError});
            return false;
        }
        return true;
    }

    render(){
        let{imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if(imagePreviewUrl){
            $imagePreview = (<img src={imagePreviewUrl} className="img-fluid" style={{width:"500px"}}/>);
        }
        // } else {
        //     $imagePreview = (<div style={{color:"#808080", fontSize:"14px"}}>Please select an image for preview</div>);
        // }

        return(
            <div style={{height:"2000px"}}>
                <MainImage mainImage={place} text="BEST SELLING TOURS"></MainImage>
        
                <div className="container pt-4 pb-3">
                    <form onSubmit={(e)=>this.handleSubmit(e)} id="form1">
                        <div style={{textAlign:"center", fontWeight:"bold", fontSize:"20px", paddingTop:"10px"}}>Add New Tour</div>
                        <div className="wrapper" style={{ paddingTop:"30px"}}>
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 pb-2">
                                    <label for="planname">Plan Name:</label>
                                    <input type="text" id="inputbox1" className="form-control" name="planname" value={this.state.planname} onChange={(e)=>this.handleChange(e)} />
                                    <div style={{fontSize:12, color:"red"}}>
                                        {this.state.plannameError}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 pb-2">
                                    <label for="price">Price:</label>
                                    <input type="text" id="inputbox2" className="form-control" name="price" value={this.state.price} onChange={(e)=>this.handleChange(e)}/>
                                    <div style={{fontSize:12, color:"red"}}>
                                        {this.state.priceError}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-sm-12 pb-2">
                                    <label for="promoprice">Promotion Price:</label>
                                    <input type="text" className="form-control" name="promoprice" value={this.state.promoprice} onChange={(e)=>this.handleChange(e)}/>
                                </div>
                                <div className="col-lg-6 col-sm-12 pb-2">
                                    <label for="superbRating">Supberb rating:</label>
                                    <input type="text" className="form-control" name="rating" value={this.state.rating} onChange={(e)=>this.handleChange(e)}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-sm-12 pb-2">
                                    <label for="description">Description:</label>
                                    <input type="text" className="form-control" name="description" value={this.state.description} onChange={(e)=>this.handleChange(e)} />
                                </div>
                                <div className="col-lg-6 col-sm-12 pb-2">
                                    <label for="duration">Duration:</label>
                                    <input type="text" id="inputbox3" className="form-control" name="duration" value={this.state.duration} onChange={(e)=>this.handleChange(e)}/>
                                    <div style={{fontSize:12, color:"red"}}>
                                        {this.state.durationError}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-sm-12 pb-2">
                                    <label for="availableperson">Destination:</label>
                                    <input type="text" id="inputbox4" className="form-control" name="destination" value={this.state.destination} onChange={(e)=>this.handleChange(e)}/>
                                    <div style={{fontSize:12, color:"red"}}>
                                        {this.state.destinationError}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 pb-2">
                                    <label for="availableperson">Available Person:</label>
                                    <input type="text" id="inputbox5" className="form-control" name="availableperson" value={this.state.availableperson} onChange={(e)=>this.handleChange(e)}/>
                                    <div style={{fontSize:12, color:"red"}}>
                                        {this.state.availablepersonError}
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <input type="file" id="in-btn" onChange={(e)=>this.handleImageChange(e)}/>
                                    <span className="new">Upload Image</span>
                                </div>
                            </div>
                        </div><br />
                        <div>{$imagePreview}</div><br />
                        <div className="pl-3 pb-3">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    
                </div>
                
            </div>
            )
    }
   
}

export default AddNewTour