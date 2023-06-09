import { UserButton } from '@clerk/clerk-react'
// import { UserButton, useUser } from '@clerk/clerk-react'
// import { useNavigate } from 'react-router-dom';
// import { FaPencilAlt } from 'react-icons/fa';
// import { useEditModalStore } from '../store';

function Nav() {
  // const navigate = useNavigate()
  // const { isSignedIn, isLoaded } = useUser();
  // const { showModal }= useEditModalStore((state) => state)

  return (
    <div className='flex justify-end p-4 gap-2'>
      {/* { isLoaded && (
        <>
          {isSignedIn ?
            <button className="px-2 hover:bg-slate-300 hover:shadow-sm transition-all rounded-xl"
              onClick={() => showModal()}><FaPencilAlt /></button>
            :
            <button className="py-2 px-3 hover:bg-slate-300 hover:text-slate-900 hover:shadow-sm transition-all rounded-xl"
              onClick={() => navigate("/sign-in")}>Sign in</button>
          }
        </>
      )} */}
      <UserButton />
    </div>
  )
}

export default Nav