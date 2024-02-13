"use client";
import React, { useState } from 'react';
import { signInAnonymously } from 'firebase/auth';
import { ref, push } from 'firebase/database';

// Navigation
import { useRouter } from 'next/navigation';

import { auth, database } from '../../Firebase/clientApp';

// Icons
import PersonIcon from '@mui/icons-material/Person';

export default function Auth() {

    const router = useRouter();

    const signin = () => {
        signInAnonymously(auth)
        .then( (data: any) => {

            push(
                ref(database, `User/${data.user.uid}`),
                { username: "John", id: data.user.uid }
            )
            .then( res => {
                router.push('/');
            } )
            .catch( err => console.log(err) )

            // console.log(data.user.uid)
        } )
        .catch( err => console.log(err) );

        console.log("working")
    }

    return (
        <div className='items-center justify-center'
            style={{ margin: "15% auto", textAlign: "center", width: '300px' }}
        >
            <PersonIcon 
                style={{ 
                    fontSize: '74px', textAlign: "center", 
                    alignSelf: "center", margin: "2px 30%", marginBottom: "12px" 
                }}
            />
            
            <div>
                <label>Username or Nickname</label><br />
                <input 
                    className='mt-2 py-2 px-4 rounded-sm text-black'
                    placeholder="John Doe or Classic_Dude"
                />
            </div>

            <button
                className='bg-blue-700 mt-4 py-2 px-6 rounded-lg'
                onClick={ signin }
            >Login</button>
        </div>
    )
}
