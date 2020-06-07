import React from 'react'

export default class PhotoUploader extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            photo: null,
            photoUrl: null,
        }
    }

    handleInput(e){
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photo: file, photo_url: fileReader.result})
        }
        if (file){
            fileReader.readAsDataURL(file)
        }
    }

    
    
}