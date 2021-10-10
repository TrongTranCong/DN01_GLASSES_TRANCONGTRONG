import React, { Component } from 'react'
import GlassesList from './GlassesList'


export default class StateGlasses extends Component {
    arrGlasses = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]
    //thuộc tính ban đầu
    state = {
        glassesDetail: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
    }
    renderGlassesList = () => {
        let content = this.arrGlasses.map((glasses, index) => {
            return <div className="col-2">
                <GlassesList sp={glasses} xem={this.xemChiTiet} key={index} />
            </div>
        })
        return content
    }
    xemChiTiet = (newGlasses) => {
        this.setState({
            glassesDetail: newGlasses,
        })
    }


    render() {
        let { glassesDetail } = this.state;
        return (
            <div >
                <header className="w-100">TRY GLASSES APP ONLINE</header>
                <div className="container-fluid" >
                    <div className="container">
                        <div className="row">
                            <div className="col-6 ">
                                <div className="w-50 card text-white" style={{ marginLeft: '8rem' }}>
                                    <img src="./glassesImage/model.jpg" className="card-img" alt="..." />
                                    <img src="./glassesImage/v7.png" style={{ width: '8rem' }} className="glass_Overlay" alt="..." />
                                    <div className="card-img-overlay ">
                                        <h5 className="card-title">FENDI F8750</h5>
                                        <p className="card-text">Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 ">
                                <img className="w-50 " src="./glassesImage/model.jpg" alt="" />
                                <img src={glassesDetail.url} style={{ width: '8rem' }} className="glass_Overlay_After" alt="..." />
                                <div className="card w-50" style={{ marginLeft: '8.5rem', backgroundColor: '#f5450b78' }}>
                                    <h5 className="card-title">{glassesDetail.name}</h5>
                                    <p className="card-text">{glassesDetail.price}$</p>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=" container col-10" style={{ paddingTop: '2rem' }}>
                        <h3 style={{ color: 'red' }}>PLEASE SELECT EYEGLASSES</h3>
                        <div className="row">
                            {this.renderGlassesList()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
