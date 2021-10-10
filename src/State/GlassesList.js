import React, { Component } from 'react'

export default class GlassesList extends Component {
    render() {
        let { sp,xem } = this.props;
        return (
            <div className="card">
                <a className="btn btn-primary" onClick={() => {
                    xem(sp);
                }}>
                    <img className="img-fluid" src={sp.url} alt="" />
                </a>
            </div>


        )
    }
}
