import React , {Component} from 'react'
import { render } from 'react-dom';
import Slide from '../slider/slide'
import LeftArrow from '../slider/left-arrow'
import RightArrow from '../slider/right-arrow'


export default class Slidex extends Component{
    constructor(props){
        super(props);
    

    this.state = {

        images:[

            "https://ichef.bbci.co.uk/news/1024/branded_turkce/16FA9/production/_92712149_gettyimages-480164327.jpg",
             "https://im.haberturk.com/2019/05/23/ver1558622944/2473354_810x458.jpg"
        ],
        currentIndex:0,
        translateValue:0
    }
    }

    goToPrevSlide = () => {}

    goToNextSlide = () => {
       if(this.state.currentIndex === this.state.images.length -1 ){
           return this.state({
               currentIndex :0,
               translateValue:0
           })
       }

       this.setState(prevState => ({
           currentIndex : prevState.currentIndex + 1,
           translateValue: prevState.translateValue + -(this.slideWidth())
       }))
    }

    slideWidth=()=>{
        return document.querySelector('.slide').clientWidth
    }

    render() {
        return(
            <div className="slider">
                <div className="slider-wrapper"
                style={{transform: `translateX(${this.state.translateValue}px)`,
            transition : "transform ease-out 0.45s"}}
                
                >
                {
                    this.state.images.map((image,i) => (
                        <Slide key={i} image={image}/>
                    ))
                }
               </div>

                <LeftArrow
                    goToPrevSlide={this.goToPrevSlide}
                />
                <RightArrow
                    goToNextSlide={this.goToNextSlide}
                />

            </div>
        );
    }
}