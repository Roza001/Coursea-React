import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {

    renderComments(comments){
        if(comments != null){
            return comments.map(mycomment =>(
                <ul key={mycomment.id} className="list-unstyled">
                    <li >{mycomment.comment}</li>
                    <li>
                        --{mycomment.author}{", "}
                        {mycomment.date}
                    </li>
                </ul>
            ));
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render(){
        const {selectedDish} = this.props;
        console.log('DishDetail Compenent render is invoked');
        return (            
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                    <CardBody>
                    <CardTitle>{selectedDish.name}</CardTitle>
                    <CardText>{selectedDish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                    <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(selectedDish.comments)}
                </div>
            </div>
        );
    }

}

export default DishDetail