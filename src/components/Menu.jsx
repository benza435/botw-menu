import React, {useState} from 'react';
import Details from './Details';
import facebook from '../img/icons/facebook.png';
import linkedin from '../img/icons/linkedin.png';
import instagram from '../img/icons/instagram.png';
import google from '../img/icons/google.png'
import pinterest from '../img/icons/pinterest.png'
import twitter from '../img/icons/twitter.png'
import whatsapp from '../img/icons/whatsapp.png'
import youtube from '../img/icons/youtube.png'
import empty from '../img/icons/empty.png'

//const dataD = ["facebook", "linkedin", "instagram", "google", "pinterest", "twitter", "whatsapp","youtube","spare"]
// const previewData = [
// 	{
// 		id: 1,
// 		icon: facebook,
// 	},
// 	{
// 		id: 2,
// 		icon: linkedin,
// 	},
// 	{
// 		id: 3,
// 		icon: instagram,
// 		},
//     {
// 		id: 4,
// 		icon: google,
// 	},
//     {
// 		id: 5,
// 		icon: pinterest,
// 	},
//     {
// 		id: 6,
// 		icon: twitter,
// 	},
//     {
// 		id: 7,
// 		icon: whatsapp,
// 	},
//     {
// 		id: 8,
// 		icon: youtube,
// 	},
//     {
// 		id: 9,
// 		icon: empty}]

	const detailsData = [
		{
			id: 1,
			title: 'Facebook',
			icon: facebook,
			description:
				"Probably the most popular social media platform.  ",
		},
		{
			id: 2,
			title: 'LinkedIn',
			icon: linkedin,
			description:
				'A bit like Facebook, but it isn\'t supposed to be.',
		},
		{
			id: 3,
			title: 'Instagram',
			icon: instagram,
			description:
				"Very lightweight image sharing site.  People with many followers refer to themselves as 'influezas'",
		},
		{
			id: 4,
			title: 'Google+',
			icon: google,
			description:"Is this still a thing?",
		},
		{
			id: 5,
			title: 'Pinterest',
			icon: pinterest,
			description: "never really figured this one out.  you collect links to other peoples images I think",
		},
	   {
			id: 6,
			title: 'Twitter',
			icon: twitter,
			description:
				"Short posts only please.  Runs on Scala.  ",
		},
		{
			id: 7,
			title: 'WhatsApp',
			icon: whatsapp,
			description:
				"Not sure this belongs here - it's a messaging service, often lumped in with social media",
		},
		{
			id: 8,
			title: 'YouTube',
			icon: youtube,
			description:
				"The best ad revenue business in the game.  ",
		},
		{
			id: 9,
			title: 'Spare',
			icon: empty,
			description:
				"I wanted a 3x3 grid so this had to be included",
		}]
	

const initial = {
		id: 10,
		title: 'Menu',
		icon: null,
		description:
			"click a thing on the left to see its details in this bit here",
	}

const Menu = () => {
    const [selected, setSelected] = useState(initial)

	// click a button, change its style to selectedLogo, change all the others back to logoHole
	const [selectedLogo, setSelectedLogo] = useState(null)


    return (
        <>
        <div className="menu">
        <div className="logoGrid">
        {detailsData.map((site) => {
            return(
            <div className="logoHole" key={site.id} onClick={()=> {
				setSelected(site)
				console.log("clicked",site.title)
				console.log("selected state is",selected.title)}}>
                <img className="smallImage" src={site.icon} alt={`450px logo for ${site.title}`}/>
            </div>
            )
        })}
        </div>


        <Details selected={selected}/>

        </div>

        </>
    );
};

export default Menu;