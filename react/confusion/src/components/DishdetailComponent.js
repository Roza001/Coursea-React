import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

    function RenderComments({comments}){
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

    function RenderDish({dish}){        
        return (            
            <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>                        
            </div>
        );
    }

    const DishDetail = (props) => {    
        if(props.dish != null){       
            return(
                <div className="container">
                    <div className="row">
                    <RenderDish dish={props.dish}/>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.dish.comments}/>
                    </div>
                    
                    </div>
                </div>
            );
        }
        else{
            return (
                <div/>                
            );
        }
        
    }


export default DishDetail