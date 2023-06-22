import React, { useContext, useEffect, useState } from 'react'
import { AiFillCamera } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { MyContext } from '../../GeneralContext/GeneralContext'

function MyAccount () {
  let imageInLocalStorage
  const {
    state: { users },
    actualUser2,
    getUserById,
    setUserInFirebase
  } = useContext(MyContext)
  const [selectedImage, setSelectedImage] = useState(
    ''
  )
  const actualUser = JSON.parse(sessionStorage.getItem('actualUser')) || {}
  const usersCopied = [...users]
  const userInLocalStorage = users.findIndex((user) => {
    return String(user.email) === String(actualUser.email)
  })

  if (actualUser2) {
    imageInLocalStorage = actualUser2.image
  }

  useEffect(() => {
    const reader = new FileReader()
    reader.onload = () => {
      const imageBase64 = reader.result
      const newUser = {
        name: String(actualUser.name),
        email: String(actualUser.email),
        image: imageBase64
      }
      usersCopied.splice(userInLocalStorage, 1, newUser)

      setUserInFirebase(
        { ...actualUser2, image: imageBase64 },
        actualUser.email
      )
      console.log('yes')
    }

    if (selectedImage !== '') {
      reader.readAsDataURL(selectedImage)
    }
  }, [selectedImage])

  useEffect(() => {
    getUserById(actualUser.email)
  }, [])

  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
      <figure className='w-full h-[250px] flex flex-col justify-center items-center'>
        <div className='w-[150px] h-[150px] bg-gray-300 rounded-full relative flex justify-center items-center'>
          <img
            className='w-full h-full rounded-full'
            src={
              selectedImage
                ? URL.createObjectURL(selectedImage)
                : imageInLocalStorage || '' // el navegador puede entender imagenes en base64
            }
            alt=''
          />
          <input
            type='file'
            id='fileUpload'
            name='fileUpload'
            onChange={(e) => setSelectedImage(e.target.files[0])}
            style={{ display: 'none' }}
          />
          <label
            htmlFor='fileUpload'
            className='absolute bottom-0 right-3 border border-gray-400 bg-gray-300 w-[40px] h-[40px] flex justify-center items-center cursor-pointer'
          >
            <IconContext.Provider value={{ size: 35 }}>
              <AiFillCamera />
            </IconContext.Provider>
          </label>
        </div>
        <figcaption className='font-bold'>{actualUser2.name}</figcaption>
      </figure>
      <span>{actualUser.email}</span>
      <input
        className='min-h-[100px] p-3'
        placeholder='Pon tu descripción aquí'
      ></input>
    </div>
  )
}

export { MyAccount }
