import React from 'react'
import { useRef,useState,useEffect } from 'react'
  import { ToastContainer, toast } from 'react-toastify';
  import { v4 as uuidv4 } from 'uuid';
  import 'react-toastify/dist/ReactToastify.css';

const Manger = () => {
    const ref=useRef()
    const passwordref=useRef()
    const [form, setform] = useState({ url:"",username:"",password:""})
    const [passwordarray, setpasswordarray] = useState([])
    useEffect(() => {
      let passwords=localStorage.getItem("passwords1")
      if(passwords)
      {
        setpasswordarray(JSON.parse(passwords));
      }
    }, [])
    
    const handleeye=()=>{

        if(ref.current.src.includes("/icons/eye.png"))
        {alert("Show the password")
        ref.current.src=("/icons/hidden.png")
        passwordref.current.type="text"
    }
        else
       {
         ref.current.src=("/icons/eye.png")
        passwordref.current.type="password"
    }
        }
    const Savepassword =()=>{
             
           setpasswordarray(passwordarray => [...passwordarray, {...form,id:uuidv4()}]); // Use functional update
        const updatedPasswordArray =[...passwordarray, {...form,id:uuidv4()}]; // Update local variable
        localStorage.setItem("passwords1", JSON.stringify(updatedPasswordArray)); // Store in local storage
        console.log(updatedPasswordArray); // Log updated array
    }
    const handlechange = (e)=>{
        setform({...form,[e.target.name]:e.target.value})
    }

    const handlededit = (id) => {
         
        console.log("Editing password with id ", id)
        setform(passwordarray.filter(i=>i.id===id)[0]) 
        setpasswordarray(passwordarray.filter(item=>item.id!==id)) 

    }
    const handledelete = (id) => {
         
        // console.log("Edeleting password with id ", id)
        // setform(passwordarray.filter(i=>i.id===id)[0])
        let c = confirm("Do you want to delete this Password?") 
        if(c)
        {setpasswordarray(passwordarray.filter(item=>item.id!==id)) 
        localStorage.setItem("passwords1",JSON.stringify(passwordarray.filter(item=>item.id!==id)))
        toast('Password Deleted', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });}

    }
    const handleclick=(text)=>{
        toast('Copied to Clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        navigator.clipboard.writeText(text)

    }
  return (
    <>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
    <div className="absolute top-0 z-[-2] h-full w-full rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
    <div className="md:mycontainer min-h-[80vw]  italic mx-auto  items-center p-10 flex flex-col gap-2 gap-y-5 " >
        <div className="passop">
            Save-YOUR-PASSWORDS-Now
        </div>
        <div className="manager w-3/4 ">
        <input onChange={handlechange} value={form.url} name='url' placeholder='Enter url' className='p-2 h-10 w-full border rounded-full border-black border-solid' type="text" />
        </div>

        <div className=' flex flex-col md:flex-row md:gap-4 gap-y-2 w-3/4'>

            <input onChange={handlechange} value={form.username} placeholder=' Enter username' name='username' className='md:w-3/4 w-full border p-1 border-black border-solid rounded-full' type="text"/>
            {/* password input */}
        

            <div className=' relative w-full md:w-1/4'>
            <input onChange={handlechange} value={form.password} placeholder=' Enter passowrd' name='password'className=' w-full p-1 border rounded-full border-black border-solid' ref={passwordref} type="password" />
            <span onClick={handleeye} className='w-8 cursor-pointer absolute right-1'>
                <img ref={ref} src="icons/eye.png" alt="img" />
            </span>
            </div>
        </div>
            <div className=' relative border border-solid rounded-full p-2 h-auto bg-blue-400 flex justify-center items-center'>
                <button onClick={Savepassword} className='flex justify-center items-center' ><lord-icon
                    src="https://cdn.lordicon.com/lsrcesku.json"
                    trigger="hover">
                    </lord-icon>Add Password
                </button>
                
            </div>
            <div className="passwords">
                YOUR PASSWORDS :
                </div>
                 
                {passwordarray.length!==0?
            <table className="table-fixed w-full">
                <thead className='bg-blue-500'>
                    <tr>
                    <th className='py-2'>Site</th>
                    <th className='w-1/4'>Username</th>
                    <th>Password</th>
                    <th>Actions</th>
                    </tr>
                </thead>
             { passwordarray.map((item,index)=>{   
               return <tbody key={index}>
                    <tr>
                    
                    <td ><div className='flex justify-center items-center gap-1'><a href={item.url}>{item.url}</a><img onClick={()=>handleclick(item.url)} className='w-4 cursor-pointer' src="/icons/copy.png" alt="img" /></div></td>

                
                    <td ><div className='flex justify-center items-center '>{item.username}<img onClick={()=>handleclick(item.username)} className='w-4 cursor-pointer' src="/icons/copy.png" alt="img" /></div></td>
                    
                    <td ><div className='flex justify-center items-center '>{'*'.repeat(item.password.length)}<img onClick={()=>handleclick(item.password)} className='w-4 cursor-pointer' src="/icons/copy.png" alt="img" /></div></td>

                    
                    <td ><div className='flex justify-center items-center gap-3 '><img className='w-4 cursor-pointer' src="/icons/edit.png" alt="img" onClick={e=>handlededit(item.id)} /><img onClick={e=>handledelete(item.id)} className='w-4 cursor-pointer' src="/icons/trash.png" alt="img" /></div></td>
                    </tr>
                </tbody>
                })}
                </table>:<p>No Passwords to Show</p>}
            
    </div>
    </>
  )
}

export default Manger
