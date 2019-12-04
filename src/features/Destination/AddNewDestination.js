import React from 'react'
import MainImage from '../Common/MainImageContainer'
import beach from '../../assets/img/homegallery/tour.jpg'
const initialState ={
    destinationName:"",
    destinationError:"",
    imagePreviewUrl:'',
    file:'',
    borderColor:""
}

class AddNewDestination extends React.Component{
    constructor(){
        super();
        this.state={
            destinationName:"",
            imagePreviewUrl:'',
            file:''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if(isValid){
            this.setState(initialState);
            document.getElementById('dtn').style.border = '';
        }
    }

    validate = () => {
        let destinationError = "";
        if(!this.state.destinationName){
            destinationError = "destination name cannot be black";
            document.getElementById('dtn').style.border = '1px solid red';
        }
        if(destinationError){
            this.setState({ destinationError });
            return false;
        }
        return true;
    }

    handleImageChange = (e) => {
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
            <div style={{height:"1600px"}}>
              <MainImage mainImage={beach} text="Top Destinations" ></MainImage>
              <div className="container pt-4">
                    <form onSubmit={this.handleSubmit} id="form1">
                        <div className="pt-3" style={{textAlign:"center", fontWeight:"bold", fontSize:"20px", paddingTop:"10px"}}>Add New Destination</div>
                        <div className="wrapper" style={{paddingTop:"30px"}}>
                            <div className="row">
                                <label for="destinationName">Destination Name:</label>
                                <input type="text" id="dtn" className="form-control" style={{borderColor:this.state.is_valid? "red":""}} name="destinationName" value={this.state.destinationName} onChange={this.handleChange}/>
                                <div style={{fontSize:12, color:"red"}}>
                                    {this.state.destinationError}
                                </div>
                            </div>
                            <div className="row" style={{paddingTop:"20px"}}>
                                <input type="file" id="in-btn" onChange={this.handleImageChange}/>
                                <span className="new">Upload Image</span>
                            </div>
                        </div><br />
                        <div>{$imagePreview}</div><br />
                        <div className="pl-1 pb-3">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                        
                    </form>
              </div>
            </div>
        )
    }
}

export default AddNewDestination