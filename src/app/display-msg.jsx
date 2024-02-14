
import { useState } from 'react';

// Icons
import FavoriteIcon from '@mui/icons-material/Favorite';

// Firebase
import { database } from '../Firebase/clientApp';
import { ref, remove } from 'firebase/database';

// Navigation
import { useRouter } from 'next/navigation';

export default function DisplayMsg({ font, id, msg, senderName, to }) {

    const router = useRouter();

    // State
    const [iscopied, setIsCopied] = useState(false);
    const [deleteType, setDeleteType] = useState(false);

    function limitWords(inputString, wordLimit) {
        // Use a regular expression to split the string into an array of words
        const wordsArray = inputString.split(/\s+/);
      
        // Extract the first 'wordLimit' words using slice
        const limitedWords = wordsArray.slice(0, wordLimit);
      
        // Join the selected words back into a string
        const resultString = limitedWords.join(' ');
      
        return resultString;
      }

    const copyLink = async () => {
        try {
            // Use navigator.clipboard.writeText to copy the link to the clipboard
            await navigator.clipboard.writeText(`https://valentines-app-kappa.vercel.app/message/${ JSON.parse(localStorage.getItem("user_id")) }/${ id }`);
            setIsCopied(true);
            setTimeout( () => {setIsCopied(false)}, 5000 )
          } catch (err) {
            console.error('Unable to copy to clipboard', err);
          }
    }

    const deleteMessage = () => {
        remove(
            ref(database, `Messages/${ JSON.parse(localStorage.getItem("user_id")) }/${ id }`)
        )
        .then( res => console.log("deleted") )
        .catch( err => console.log(err) )
    }

    return (
        <>
            <div className="mt-5"
                
            >

                <FavoriteIcon 
                style={{ alignSelf: "center", margin: "2px 45%", fontSize: "40px", marginBottom: "-21px" }}
                />

                <div className="bg-gray-500 bg-opacity-50 mx-6 mb-6 py-4 px-6 rounded-md lg:mx-12">

                <div
                    onClick={ () => router.push(`/message/${ JSON.parse(localStorage.getItem("user_id")) }/${ id }`) }
                >
                    <p className="text-base dancingscript__font">
                        To: { to }
                    </p>

                    <p>
                        <p className='dancingscript__font'>Message: </p>
                        <span className={`text-sm shadowsDesign`}>
                        { limitWords(msg, 25) }...
                        </span>
                    </p>
                </div>

                <div className='flex justify-end'>
                    <p className="text-right text-blue-400 caveat cursor-pointer mr-5"
                        onClick={ copyLink }
                    >{ iscopied ? "Copied" : "Share Link" }</p>

                    <p className="text-right text-red-200 caveat cursor-pointer"
                        onClick={ () => setDeleteType(true) }
                    >delete</p>
                </div>

                { deleteType && <>
                        <p>Are you sure</p>
                        <div className='flex text-center'>
                            <p className='mr-6 text-red-500 cursor-pointer'
                                onClick={ deleteMessage }
                            >Yes</p> 
                            <p className='text-green-500 cursor-pointer'
                                onClick={ () => setDeleteType(false) }
                            >No</p>
                        </div>
                    </> 
                }

                </div>

            </div>
        </>
    )
}
