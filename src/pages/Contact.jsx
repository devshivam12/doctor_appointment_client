import React, { useEffect, useState } from 'react'
import ComponentLoading from '../component/helper/ComponentLoading'

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  })
  return (
    <section className='px-[1rem] md:px-[2.7rem] lg:px-[5rem]'>

      {isLoading ? (
        <ComponentLoading />
      ) : (  <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center'>Contact Us</h2>
        <p className='mb-8 lg:mb-16 font-light text-center text_para'>
          Got a technical issue ? Want to send feedback
        </p>

        <form action=""
          className='space-y-8'
        >

          <div>
            <label
              htmlFor="email"
              className='form_label'
            >
              Your Email
            </label>
            <input
              type="email"
              id='email'
              placeholder='example@gmail.com'
              className='form_input mt-1'
            />

          </div>

          <div>
            <label
              htmlFor="subject"
              className='form_label'
            >
              Subject
            </label>
            <input
              type="text"
              id='subject'
              placeholder='Let us know how we can help you'
              className='form_input mt-1'
            />

          </div>

          <div className='sm:col-span-2'>
            <label
              htmlFor="message"
              className='form_label'
            >
              Your Message
            </label>
            <textarea
              rows='5'
              type="text"
              id='message'
              placeholder='Leave a comment...'
              className='form_input mt-1'
            />

          </div>
          <button type='submit' className='btn sm:w-fit'>Submit</button>
        </form>

      </div>)}


    </section>
  )
}

export default Contact
