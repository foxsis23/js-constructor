import image from './assets/anime.jpeg'
import {TextBlock,ImageBlock,ColumnsBlock,TitleBlock} from './classes/blocks'

const colValue = [
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus luctus arcu at egestas. Vestibulum.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus luctus arcu at egestas. Vestibulum.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus luctus arcu at egestas. Vestibulum.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus luctus arcu at egestas. Vestibulum.']



export const model = [
    new TitleBlock('My JS app project', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }),

    new ImageBlock(image,{
        styles: {
            display: 'flex',
            'justify-content': 'center',
            padding: '2rem 0'
        },
        imageStyles:{
            width: '750px',
            height: 'auto'
        },
        alt: 'This is an image'
    }),
    new TextBlock(`It's my first project on JS with Parcel :)`,{
        styles: {
            color: 'red',
            'background-color': '#E5F0FF',
            'text-align': 'center',
            padding: '10px',
            margin: '10px 0',
            'font-family': `'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif`
        }
    }),
    new ColumnsBlock(colValue,{
        styles:{
            color:'blue',
            'background-color': '#E5F0FF',
            'font-family': `'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif`
        }
    }),
]