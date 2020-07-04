import React, {useEffect} from 'react'
import MenuBar from '../menu_bar/menu_bar'
import BannerCta from './banner_cta_container'
import FooterMenu from '../menu_bar/footer_menu'
import FeaturedArtists from '../featured_artists/featured_artists'

export default class Splash extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){this.props.getUsers()}

    render(){
        return (
            <>
                <MenuBar mode="splash" />
                <BannerCta />
                <FeaturedArtists artists={this.props.artists} taskTypes={this.props.taskTypes} />
                <FooterMenu />
            </>
        )

        // return (
        //     <>
        //         <MenuBar mode="splash" />
        //         <BannerCta />
        //         <div className="featured-artists-section">
        //             <h1>Featured artists who {this.props.taskTypes[randomTaskId] ? this.props.taskTypes[randomTaskId].title : ""}s: </h1>
        //             <div className="featured-artists">
        //                 {artists}
        //             </div>
        //         </div>
        //         <FooterMenu />
        //     </>
        // )
    }
} 