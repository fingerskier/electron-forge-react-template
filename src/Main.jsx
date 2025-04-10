import React, {useEffect, useState} from 'react'


export default function Main() {
  const [stuff, setStuff] = useState()
  const [thing, setThing] = useState('loading...')


  const listClick = event=>{
    window.flarn.listPorts()
    .then(val=>{
      setStuff(val)
    })
    .catch(console.error)
  }


  useEffect(() => {
    window.flarn.ghibbet()
    .then(val=>{
      setThing(val)
    })
    .catch(console.error)
  }, [])


  return <div>
    <h1>Main Stuff</h1>
    
    <p>{JSON.stringify(thing)}</p>
    
    <button onClick={listClick}>List Coms</button>
    <pre>{JSON.stringify(stuff, null, 2)}</pre>
  </div>
}