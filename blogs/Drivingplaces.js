import { useEffect } from 'react'
import styles from '../css/Main.module.css'
import blogstyles from '../css/Blog.module.css'
import ComponentImage from '../components/image'

const Drivingplaces = () => {

  return (
    <div className={blogstyles.blogbackground}>
      <div className={blogstyles.title}>
        Driving Places
      </div>
      <div className={blogstyles.subtitle}>
        Idiots in Cars Getting Coffee
      </div>
      <ComponentImage
        imagename='/blogs/driving/odometer.webp'
        caption='test'
      />
      <ComponentImage
        imagename='/blogs/driving/coffeeshop.webp'
        caption='test'
      />
      <ComponentImage
        imagename='/blogs/driving/disquiet.webp'
        caption='test'
      />
      <ComponentImage
        imagename='/blogs/driving/illuminatus.webp'
        caption='test'
      />
      <ComponentImage
        imagename='/blogs/driving/rain.webp'
        caption='test'
      />
      <ComponentImage
        imagename='/blogs/driving/pushcart.webp'
        caption='test'
      />
      <ComponentImage
        imagename='/blogs/driving/babel.webp'
        caption='test'
      />
    </div>
  )
}

export default Drivingplaces;