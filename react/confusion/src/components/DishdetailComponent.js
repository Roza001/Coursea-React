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
                        {new Intl.DateTimeFormat('en-US', {year: 'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(mycomment.date)))}
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

    renderDish(dish){        
        if(dish != null){
            return (            
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    </div>
                        <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        }
        else{
            return(
                <div>             
                </div>
            )
        }
    }

    render(){
        const {dish} = this.props;            
        
        console.log('DishDetail Compenent render is invoked');
        return(
            <div className="container">
                {this.renderDish(dish)}
            </div>
        );
        
    }

}

export default DishDetail