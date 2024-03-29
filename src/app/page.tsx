"use client";
import { useEffect, useState } from 'react';

// Navigation
import { useRouter } from 'next/navigation';

// Firebase
import { auth, database } from '../Firebase/clientApp';
import { onAuthStateChanged } from 'firebase/auth';
import { ref, onValue } from 'firebase/database';

// Icons
import AddCircleIcon from '@mui/icons-material/AddCircle';

// Component
import DisplayMsg from './display-msg';
import Info from './info';

export default function Home() {

  const router = useRouter();

  const [data, setData] = useState<any []>([]);

  useEffect( () => {
    onAuthStateChanged( auth, user => {
      if(user){
        console.log("Working fine")
        onValue(ref(database, `Messages/${ JSON.parse(localStorage.getItem("user_id") as string) }`), (snapshot) => {
          interface objMsg { id: string, font: string, msg: string, senderName: string, to: string }
          const msg: objMsg[] = [];
          snapshot.forEach(childSnapshot => {
              msg.push({
                  id: childSnapshot.key, ...childSnapshot.val()
              })
          })
          setData(msg);
        })
      }
      else{
        router.push("/auth");
      }
    } )
  }, [] )

  return (
    <div>

      <Info />

      <p
        className="text-center text-2xl mt-6 pacifico"
      >Heart To Heart Messages</p>
      
      { data ? data.map( (item) => (
        <div key={ item.id }>
          <DisplayMsg 
            font={ item.font } id={ item.id } msg={ item.msg } senderName={ item.senderName } to={ item.to }
          />
        </div>
      ) ) :
        <div className='my-12 mx-14 py-7 px-12 rounded-lg text-2xl leading-snug text-center' 
          style={{ backgroundColor: "rgba(245, 39, 145, 0.59)" }}
        >
          Create a message and share with loved ones
          <p className='mt-4 text-xl roboto__font'>Click the Add Icon</p>
        </div>
      }

      <div className="absolute -bottom-0 -right-0 mr-12 mb-10 cursor-pointer"
        onClick={ () => router.push('/create') }
      >
        <AddCircleIcon 
          style={{ fontSize: "54px" }}
        />
      </div>

    </div>
  );
}
