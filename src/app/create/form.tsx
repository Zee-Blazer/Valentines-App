"use client";

import { useState } from "react";

// Navigation
import { useRouter } from 'next/navigation';

// Firebase
import { database } from '../../Firebase/clientApp';
import { ref, push } from 'firebase/database';

// JSON file
import data from './messages.json';

export default function FormCont () {

    const router = useRouter();

    const messageLength = data.messages.length;

    const [currentMsg, setCurrentMsg] = useState(0);
    const [font, setFont] = useState("caveat");

    const [name, setName] = useState<string>();
    const [message, setMessage] = useState<string>();

    const generateMessage = () => {
        setMessage(data.messages[currentMsg].msg);
        currentMsg != messageLength-1 ? setCurrentMsg(currentMsg+1) : setCurrentMsg(0);
    }

    const sendMessage = () => {
        push(
            ref( database, `Messages/${ JSON.parse(localStorage.getItem("user_id") as string) }` ),
            { senderName: localStorage.getItem("Username"), to: name, msg: message, font: font }
        )
        .then( res => {
            router.push('/');
        } )
        .catch( err => {} );
    }

    return (
        <>
            <div className="mx-6 mb-7">
                <label className="shadowsDesign mb-6">To:</label><br />
                <input 
                    placeholder="Fullname or Nickname" 
                    className="outline-none py-2 px-4 w-full rounded-md text-black"
                    value={name}
                    onChange={ e => setName(e.target.value) }
                />
            </div>

        
            <div className="mx-6 mb-7">
                <div className="flex justify-between">
                    <label className="shadowsDesign mb-6">Message:</label>
                    <div className="flex justify-between">
                        <p className="bg-green-400 mb-6 px-4 py-1 rounded-sm cursor-pointer mr-2 text-xs"
                            onClick={ generateMessage }
                        >Auto Generate Message</p>
                        
                        <select
                            className="bg-green-700 mb-6"
                            value={ font }
                            onChange={ e => setFont(e.target.value) }
                        >
                            <option value="caveat">Caveat</option>
                            <option value="roboto__font">Roboto</option>
                            <option value="inter__font">Inter</option>
                            <option value="dancingscript__font">Dancing Script</option>
                            <option value="pacifico">Pacifico</option>
                            <option value="shadowsDesign">Shadow Into Light</option>
                            <option value="greatvibes">Great_Vibes</option>
                        </select>
                        
                    </div>
                </div>
                <textarea 
                    placeholder="Write a message..." 
                    className={`outline-none py-2 px-4 w-full rounded-md text-black h-52 ${font}`}
                    value={ message }
                    onChange={ e => setMessage(e.target.value) }
                />
            </div>

            <button
                className="bg-red-400 shadow-xl text-white py-2 px-4 rounded-md self-center mx-10 w-4/5"
                onClick={ sendMessage }
            >Done</button>
        </>
    )
}
