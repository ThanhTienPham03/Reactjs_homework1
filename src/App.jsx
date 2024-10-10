import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   
    
  <div className='body'>
    <div className="container">
    <h2>Form in React</h2>
    <form>
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" required/>

        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" required/>

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required/>

        <label for="contact">Contact #</label>
        <input type="tel" id="contact" name="contact" required/>
        <div className='form-group'>
        <label>Gender</label><br />
        <input type="radio" id="male" name="gender" value="male"/>
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female"/>
        <label for="female">Female</label>
        <input type="radio" id="other" name="gender" value="other"/>
        <label for="other">Other</label>
        </div>
        <label for="subject">Your best Subject</label>
        <div className='form-group'>
        <label>Subject</label><br />
        <input type="checkbox" id="Math" name="subject" value="Math"/>
        <label for="math">Math</label>
        <input type="checkbox" id="Physics" name="subject" value="physics"/>
        <label for="physics">Physic</label>
        <input type="checkbox" id="english" name="subject" value="english"/>
        <label for="english">English</label>
        </div>

        <label for="resume">Upload Resume</label>
        <input type="file" id="resume" name="resume"/>

        <label for="url">Enter URL</label>
        <input type="url" id="url" name="url" required/>

        <label for="about">About</label>
        <textarea id="about" name="about" rows="4"></textarea>

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
    </form>
  </div>
</div>


  )
}

export default App
