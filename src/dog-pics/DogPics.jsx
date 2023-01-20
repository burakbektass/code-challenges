import {useEffect, useState} from "react"
export default function DogPics () {

    const [dogImage, setDogImage] = useState()

    const getPic = async () =>{
        const response = await fetch("https://dog.ceo/api/breeds/image/random")
        const dog = await response.json()
        setDogImage(dog.message)
    }

    useEffect(() => {
        getPic()
    },[])
    return (
      <div className='dog-pics'>
        <img src={dogImage} />
        <br />
        <button onClick={e => getPic()} >🐶</button>
      </div>
    )
  }