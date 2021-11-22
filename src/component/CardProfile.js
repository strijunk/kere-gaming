import React from 'react'
import {AiFillInstagram, AiFillGithub} from 'react-icons/ai'

export default function CardProfile({avatar, nama, nim, ig, github}){
    return(
        <div className="card-profile">
            <div className="profile-left">
                <img src={avatar}/>
                <div className="profile-medsos">
                    <a href={'https://www.instagram.com/${ig}/'} target="_blank" rel="noreferrer">
                    <AiFillInstagram className="profile-medsos" size="25"/></a>
                    <a href={'https://www.github.com/${github}/'} target="_blank" rel="noreferrer">
                    <AiFillGithub className="profile-medsos" size="25"/></a>
                </div>
            </div>
            <div className="profile-details">
                <p>Nama: {nama}</p>
                <p>NIM: {nim}</p>
            </div>
        </div>
    )
}

export const ListAuthor ={
        avatar: '',
        nama: 'Syekh Seif Izzul Khaq',
        nim: '21120119130080',
        ig: 'izzul_khaq1',
        github: 'strijunk',
    }