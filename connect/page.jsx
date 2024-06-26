"use client"
import React, { useEffect, useState } from 'react'
import CartApis from '../_utils/CartApis'
import { toast } from 'react-toastify'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
const Connect = () => {
  const router = useRouter()
  const { user } = useUser()  
  const [fname,setName]=useState('')
  const [lname,setLName]=useState('')
  const [message,setMsg]=useState('')
  const [city,setCity]=useState('')
  const [state,setState]=useState('')
  const [zip,setZIP]=useState('')
  const HandleSubmit = (e) => {
    e.preventDefault()
   if(!user){
     router.push('/sign-in')
   }else{
    if(fname && lname && message && city && state && zip){
      toast.error('fileds is required !')
      }else{
        toast.success('your message has been sent successfully :)')
      }
  
    
        /*logic to add to cart*/
        const data = {
          data: {
            lname:lname,
            fname:fname,
            message:message,
            city:city,
            state:state,
            zip:zip
  
          }}
      
        CartApis.Connect(data).then(res => {
          console.log('cart created successfully', res.data.data)
        
              })
   }
		}
	
  return (
 <div className='flex justify-center items-center mt-24'>
       <form class="w-full max-w-lg" onSubmit={HandleSubmit}>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          First Name
        </label>
        <input onChange={(e)=>setName(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="name..."/>
      
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
          Last Name
        </label>
        <input onChange={(e)=>setLName(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="lastname..."/>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">

<div>
<label htmlFor="" className="">Message..</label>
  <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
  
  <textarea
    onChange={(e)=>setMsg(e.target.value)}
   
      id="OrderNotes"
      className="w-full  resize-none border-none align-top focus:ring-0 sm:text-sm"
      rows="5"
      
    ></textarea>

  </div>
</div>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
          City
        </label>
        <input onChange={(e)=>setCity(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="City..."/>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
          State
        </label>
        <div class="relative">
          <select onChange={(e)=>setState(e.target.value)} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option onChange={(e)=>setState(e.target.value)}>Iraq</option>
           <option onChange={(e)=>setState(e.target.value)}>SAD</option>
            <option onChange={(e)=>setState(e.target.value)}>Egypt</option>
            <option onChange={(e)=>setState(e.target.value)}>USA</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
          Zip
        </label>
        <input onChange={(e)=>setZIP(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="number..."/>
      </div>
    </div>
   <button type="submit" className='btn p-5 text-white hover:bg-slate-200 hover:text-black mt-5 bg-slate-500 rounded-xl'>send</button>
  </form>
 </div>
  )
}

export default Connect
