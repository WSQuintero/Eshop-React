import React, { useContext, useEffect } from 'react'
import { AiFillCamera } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { MyContext } from '../../GeneralContext/GeneralContext'

function MyAccount () {
  let imageInLocalStorage
  const { selectedImage, setSelectedImage, users, addToLocalStorage } =
    useContext(MyContext)
  const actualUser = JSON.parse(sessionStorage.getItem('actualUser')) || {}
  const usersCopied = [...users]
  const userInLocalStorage = users.findIndex((user) => {
    return String(user.email) === String(actualUser.email)
  })

  if (users.length !== 0) {
    imageInLocalStorage = JSON.parse(localStorage.getItem('users')).find(
      (user) => user.email === actualUser.email
    ).image
  }
  /* FileReader es una interfaz del API de JavaScript que permite
  leer el contenido de archivos de forma asíncrona. Proporciona métodos
  para leer archivos de distintos tipos, como imágenes, texto, audio, video,
  entre otros.

  FileReader es especialmente útil cuando se necesita acceder al contenido de
  un archivo seleccionado por el usuario a través de un elemento <input> de tipo
  "file". Permite leer los datos del archivo y utilizarlos en la aplicación web.

  Algunos métodos importantes de FileReader son:

  readAsDataURL(file): Lee el contenido del archivo y devuelve una cadena en
  formato base64 que representa los datos del archivo. Es comúnmente utilizado
  para leer imágenes y mostrarlas en la interfaz de usuario.

  readAsText(file, encoding): Lee el contenido del archivo y devuelve una cadena
  de texto que representa los datos del archivo. Es útil cuando se necesita acceder
  al contenido de archivos de texto, como archivos CSV o archivos de configuración.

  onload: Evento que se dispara cuando la lectura del archivo se ha completado correctamente.
   Se puede utilizar para realizar acciones después de que se haya leído el archivo,
   como actualizar la interfaz de usuario o procesar los datos obtenidos. */

  useEffect(() => {
    const reader = new FileReader()
    reader.onload = () => {
      const imageBase64 = reader.result
      const newUser = {
        name: String(actualUser.name),
        email: String(actualUser.email),
        password: String(actualUser.password),
        image: imageBase64
      }
      usersCopied.splice(userInLocalStorage, 1, newUser)
      addToLocalStorage(usersCopied, 'users')
    }

    if (selectedImage) {
      reader.readAsDataURL(selectedImage)
    }
  }, [selectedImage])

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
        <figcaption className='font-bold'>{actualUser.name}</figcaption>
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
