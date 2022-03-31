import TestImage from '../../components/image'

export default function handler(){
    return(
        <div>
            <TestImage
                imagename = '/rain.png'
                caption = 'somecaption'
            />
        </div>
    )
}