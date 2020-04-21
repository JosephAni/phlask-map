import React from 'react'
import { connect } from 'react-redux'
import { toggleInfoExpanded, toggleInfoWindow } from '../actions'
import { isMobile } from 'react-device-detect'
// import { connect } from 'react-redux'
import './SelectedTap.css'
import arrow from './images/arrow.png'
import hoursArrow from './images/hoursArrow.png'
import sampleImg from './fountain.png'
import accessible from './images/accessible.png'
import filteredBlue from './images/filteredBlue.png'
import phlaskGreen from './images/phlaskGreen.png'
import privateRestricted from './images/privateRestrictedTap.png'
import privateShared from './images/privateSharedTap.png'
import privateTap from './images/privateTap.png'
// import profileImg1 from './images/profileImg1.jpg'
// import profileImg2 from './images/profileImg2.png'
// import profileImg3 from './images/profileImg3.jpg'
import tapMenu from './images/tapMenu.png'

const tempImages = {
    tapImg: sampleImg,
    infoImages: [
        // privateTap,
        phlaskGreen,
        // privateRestricted,
        privateTap,
        privateRestricted,
        accessible,
        filteredBlue,
        // privateShared
    ],
    // profile: [profileImg1,profileImg2,profileImg3]
}
export class SelectedTap extends React.Component{

    expandTap(){
        // this.setState({
        //     infoIsExpanded: true
        // })
        this.props.toggleInfoExpanded(true)
    }
    
    collapseTap(){
        // this.setState({
        //     infoIsExpanded: false
        // })
        this.props.toggleInfoExpanded(false)
    }

    render(){
        return(
            <div>

                {this.props.showingInfoWindow
                // Preview
                ?<div 
                    id={isMobile ? 'tap-info-container-mobile' :'tap-info-container'}
                    style={this.props.infoIsExpanded ? {
                            position: 'relative',
                            // height: '100vh',
                            top: '10px'
                        } 
                        : {
                            height:'fit-content',
                            bottom: '5px'   
                        }
                    }
                    >
                    {/* Drag & Close Area */}
                    <div id='tap-info-top'>
                        <div id='tap-info-drag-area'>
                            <div className='drag-bar-dash'></div>
                            <div className='drag-bar-dash'></div>
                        </div>
                        <div id='tap-menu'>
                            <img id='tap-menu-icon' src={tapMenu} alt=''/>
                        </div>
                    </div>
                    

                    {/* Placeholder for Fixed Close Area */}
                    <div id='tap-info-drag-area-placeholder'>
                        <div id='tap-menu'>
                            <img id='tap-menu-icon' src={tapMenu} alt=''/>
                        </div>
                    </div>

                    {/* Tap Info */}

                    <div id='tap-info'>

                        {/* Location Name */}
                        <div id='tap-content'>

                            {/* Main Image */}

                            <div id='tap-info-img-box'>
                                <img id ='tap-info-img'
                                    // src={this.props.displayImg}
                                    src={tempImages.tapImg}
                                    alt=''
                                > 
                                </img>
                            </div>

                            <div id='tap-head-info'>
                                {/* Tap Type Icon */}
                                <div id='tap-type-icon-container'>
                                    <div id='tap-type-icon'>
                                        <img className='tap-info-icon-img' src={phlaskGreen} alt=''></img>
                                    </div>
                                </div>

                                {/* Name & Address */}
                                <div id='org-name-and-address'>
                                    <div id='tap-organization-name'>
                                        {this.props.organization}
                                    </div>
                                    <h5 id='tap-info-address'>
                                        {this.props.address}
                                    </h5>
                                </div>

                                {/* Hours */}
                                <div id='org-hours'>
                                    <div id='tap-info-org-status'>Open</div>
                                    <div id='tap-info-hours'>
                                        <span>8am</span>-<span>10pm</span>
                                        <div id='hours-dropdown-arrow-container'>
                                            <img id='hours-dropdown-arrow' src={hoursArrow} alt=''></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Walk Time & Info Icons */}
                            <div id='walk-time-and-icons'>
                                <div id='tap-info-walk-time'>Estimated Walk Time: 12 mins</div>
                                <div id='tap-info-icons-box'>
                                    {tempImages.infoImages.map((icon,index) => (
                                        <div className='tap-info-icon' key={index}>
                                            <img className='tap-info-icon-img' src={icon} alt=''></img>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                                                    
                    </div>
                    {/* Expanded View */}

                    {this.props.infoIsExpanded
                    ?<div id='tap-content-expanded'>
                        
                        {/* Description */}
                        <div id='tap-info-description-box'>
                            <div id='tap-info-description-expanded'>
                                {/* {this.props.description} */}
                                Lorem ipsum dolor sit amet, vix ex modus philosophia. At mei idque noluisse suavitate. Probo reprimique delicatissimi nec ut, diam mandamus te cum. Ad mea bonorum voluptua, ex quo melius fabellas efficiendi. Alii vituperatoribus vix te, per inani disputationi eu, omnium assueverit an has.

No vim verear contentiones, sed et sale nihil dictas. Ad tamquam ornatus explicari est, sea laudem volutpat maiestatis ad. Dicit paulo an eam, id wisi copiosae dissentiunt cum, has malis indoctum eu. Eam et fuisset invenire, in erant nullam liberavisse ius, ut est affert ceteros. Cotidieque neglegentur usu ex, cu nam delectus definitiones, qui eu justo dicit iriure. Qui nibh scripta ne.

Scribentur deterruisset nec ea, meis possit diceret has ut. Inermis legendos sea te. Vis in quando mollis. Ne dolore alterum vim.

Eos tollit adipisci ne, ea euismod oporteat suscipiantur eos. Cu dicant nemore aperiri pro, ex pri ubique verear platonem. Ius ut albucius probatus intellegam, id recteque adipiscing per. Ex augue commune suavitate vis. Pri in pertinax intellegebat.

Vis ei diam ridens saperet, ius ei vitae regione cotidieque. Eam ut liber sapientem, definitiones signiferumque id est, modo essent honestatis ei pro. Senserit urbanitas comprehensam ne est. Vel docendi similique ex, reque mundi percipitur vix no. Vel bonorum delenit admodum te, eos cibo oratio melius et.
                            </div>
                        </div>
                    </div>
                    
                    /** Preview **/

                    :<div id='tap-info-arrow-box' onClick={this.expandTap.bind(this)}>
                        <img className='tap-info-arrow' src={arrow} alt=''></img>
                    </div>
                    }
                </div>
                :<div></div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    showingInfoWindow: state.showingInfoWindow,
    infoIsExpanded: state.infoIsExpanded
});
const mapDispatchToProps = { toggleInfoExpanded, toggleInfoWindow };


export default connect(mapStateToProps,mapDispatchToProps)(SelectedTap);